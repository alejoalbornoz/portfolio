// components/SwipeSection.jsx (antes About.jsx)
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Contact from "./Contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SwipeSection() {
  const swipeSectionRef = useRef(null);
  const intentObserverRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const currentIndexRef = useRef(0);
  const allowScrollRef = useRef(true);

  useEffect(() => {
    const swipePanels = gsap.utils.toArray(".swipe-section .panel");
    const isTouch = ScrollTrigger.isTouch;

    if (isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });

    scrollTimeoutRef.current = gsap
      .delayedCall(1, () => {
        allowScrollRef.current = true;
      })
      .pause();

    const gotoPanel = (index, isScrollingDown) => {
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
        intentObserverRef.current?.disable();
        return;
      }
      allowScrollRef.current = false;
      scrollTimeoutRef.current.restart(true);

      const target = isScrollingDown
        ? swipePanels[currentIndexRef.current]
        : swipePanels[index];
      gsap.to(target, {
        yPercent: isScrollingDown ? -100 : 0,
        duration: 0.75,
      });

      currentIndexRef.current = index;
    };

    intentObserverRef.current = ScrollTrigger.observe({
      type: "wheel,touch",
      onUp: () =>
        allowScrollRef.current && gotoPanel(currentIndexRef.current - 1, false),
      onDown: () =>
        allowScrollRef.current && gotoPanel(currentIndexRef.current + 1, true),
      tolerance: 10,
      scrollSpeed: isTouch === 1 ? 1 : -1,
      preventDefault: true,
      onEnable(self) {
        allowScrollRef.current = false;
        scrollTimeoutRef.current.restart(true);
        const savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll);
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false,
        });
      },
      onDisable: (self) =>
        document.removeEventListener("scroll", self._restoreScroll),
    });
    intentObserverRef.current.disable();

    ScrollTrigger.create({
      trigger: ".swipe-section",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      onEnter: (self) => {
        if (intentObserverRef.current.isEnabled) return;
        self.scroll(self.start + 1);
        intentObserverRef.current.enable();
      },
      onEnterBack: (self) => {
        if (intentObserverRef.current.isEnabled) return;
        self.scroll(self.end - 1);
        intentObserverRef.current.enable();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      intentObserverRef.current?.kill();
      scrollTimeoutRef.current?.kill();
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div
          ref={swipeSectionRef}
          className="swipe-section relative h-screen w-full overflow-hidden"
        >
          <About />
          <Contact />
        </div>
      </div>

      <div className="h-[10vh] bg-[#101010] flex items-center justify-center text-white text-3xl">
        Contenido después del swipe
      </div>
    </div>
  );
}