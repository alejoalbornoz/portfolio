"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MixedScrollComponent() {
  const swipeSectionRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const intentObserverRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const allowScrollRef = useRef(true);

  useEffect(() => {
    const swipePanels = gsap.utils.toArray(".swipe-section .panel");
    const isTouch = ScrollTrigger.isTouch;

    if (isTouch === 1) {
      ScrollTrigger.normalizeScroll(true);
    }

    // Set z-index levels for the swipe panels
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });

    // Scroll timeout
    scrollTimeoutRef.current = gsap
      .delayedCall(1, () => {
        allowScrollRef.current = true;
      })
      .pause();

    // Handle panel swipe animation
    const gotoPanel = (isScrollingDown) => {
      if (isScrollingDown) {
        allowScrollRef.current = false;
        scrollTimeoutRef.current.restart(true);

        gsap.to(swipePanels[0], {
          yPercent: -100,
          duration: 0.75,
          onComplete: () => {
            intentObserverRef.current?.disable();
          }
        });
      }
    };

    // Create observer
    intentObserverRef.current = ScrollTrigger.observe({
      type: "wheel,touch",
      onDown: () => allowScrollRef.current && gotoPanel(true),
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

    // Pin swipe section and initiate observer
    ScrollTrigger.create({
      trigger: ".swipe-section",
      pin: true,
      start: "top top",
      end: "+=200",
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

    // Horizontal scrolling section
    const horizontalSections = gsap.utils.toArray(".horizontal .panel");
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        scrub: 1,
        end: "+=3500",
        markers: false,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      intentObserverRef.current?.kill();
      scrollTimeoutRef.current?.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Swipe Section */}
      <div
        ref={swipeSectionRef}
        className="swipe-section relative h-screen w-full overflow-hidden"
      >
        <section className="panel absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Welcome</h1>
            <div className="flex flex-col items-center">
              <span className="text-xl mb-4">Scroll down to continue</span>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white animate-bounce"></div>
            </div>
          </div>
        </section>
        <section className="panel absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-white text-4xl font-bold">
          Continue scrolling for horizontal section →
        </section>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={horizontalContainerRef}
        className="horizontal w-[400%] h-screen flex flex-nowrap"
      >
        <section className="panel w-screen h-full flex items-center justify-center bg-red-500 text-white text-6xl font-bold shrink-0">
          ONE
        </section>
        <section className="panel w-screen h-full flex items-center justify-center bg-orange-500 text-white text-6xl font-bold shrink-0">
          TWO
        </section>
        <section className="panel w-screen h-full flex items-center justify-center bg-purple-500 text-white text-6xl font-bold shrink-0">
          THREE
        </section>
        <section className="panel w-screen h-full flex items-center justify-center bg-green-500 text-white text-6xl font-bold shrink-0">
          FOUR
        </section>
      </div>
    </div>
  );
}