"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";

// Registrar plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Observer);
}

export default function StackingCards() {
  const cardsRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const tlRef = useRef(null);
  const observerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const allowScrollRef = useRef(true);
  const animatingRef = useRef(false);

  useEffect(() => {
    const time = 0.5;

    // Progressive enhancement
    gsap.set(".stacking-card", {
      y: (index) => 20 * index,
      transformOrigin: "center top",
    });

    // Timeline
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    tl.add("card2");
    tl.to(".stacking-card:nth-child(1)", {
      scale: 0.85,
      duration: time,
    });
    tl.from(
      ".stacking-card:nth-child(2)",
      {
        y: () => window.innerHeight,
        duration: time,
      },
      "<"
    );

    tl.add("card3");
    tl.to(".stacking-card:nth-child(2)", {
      scale: 0.9,
      duration: time,
    });
    tl.from(
      ".stacking-card:nth-child(3)",
      {
        y: () => window.innerHeight,
        duration: time,
      },
      "<"
    );

    tl.add("card4");
    tl.to(".stacking-card:nth-child(3)", {
      scale: 0.95,
      duration: time,
    });
    tl.from(
      ".stacking-card:nth-child(4)",
      {
        y: () => window.innerHeight,
        duration: time,
      },
      "<"
    );
    tl.add("card5");

    // Función para animar a una etiqueta
    const tweenToLabel = (direction, isScrollingDown) => {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        observerRef.current?.disable();
        return;
      }
      if (!animatingRef.current && direction) {
        animatingRef.current = true;
        tl.tweenTo(direction, {
          onComplete: () => (animatingRef.current = false),
        });
      }
    };

    // Observer plugin
    const cardsObserver = Observer.create({
      wheelSpeed: -1,
      onDown: () => tweenToLabel(tl.previousLabel(), false),
      onUp: () => tweenToLabel(tl.nextLabel(), true),
      tolerance: 10,
      preventDefault: true,
      onEnable(self) {
        allowScrollRef.current = false;
        if (scrollTimeoutRef.current) {
          scrollTimeoutRef.current.restart(true);
        }
        const savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll);
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false,
        });
      },
      onDisable: (self) =>
        document.removeEventListener("scroll", self._restoreScroll),
    });

    cardsObserver.disable();
    observerRef.current = cardsObserver;

    // ScrollTrigger
    ScrollTrigger.create({
      id: "STOP-SCROLL",
      trigger: cardsSectionRef.current,
      pin: true,
      start: "top",
      end: "+=100",
      onEnter: () => {
        if (cardsObserver.isEnabled) return;
        cardsObserver.enable();
      },
      onEnterBack: () => {
        if (cardsObserver.isEnabled) return;
        cardsObserver.enable();
      },
    });

    // Cleanup
    return () => {
      tl.kill();
      cardsObserver.kill();
      ScrollTrigger.getById("STOP-SCROLL")?.kill();
      if (scrollTimeoutRef.current) {
        scrollTimeoutRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="min-h-screen  text-[#fffce1] flex flex-col items-center justify-center font-sans px-20 ">
      <section className="">
        <h1 className="text-white text-[50px] font-bold">Projectos</h1>
      </section>

      <section
        className="py-10 mb-10 flex items-center justify-center"
        ref={cardsSectionRef}
      >
        <div className="relative grid gap-12  ">
          <div className="grid mt-14" ref={cardsRef}>
            <div className="stacking-card w-[1200] h-[600px] bg-neutral-500 rounded-lg border-2 border-neutral-500 [grid-area:1/1/2/2] flex items-center justify-center text-xl font-semibold">
              First card
            </div>
            <div className="stacking-card w-[1200] h-[600px] bg-neutral-500 rounded-lg border-2 border-neutral-500 [grid-area:1/1/2/2] flex items-center justify-center text-xl font-semibold">
              Second card
            </div>
            <div className="stacking-card w-[1200] h-[600px] bg-neutral-500 rounded-lg border-2 border-neutral-500 [grid-area:1/1/2/2] flex items-center justify-center text-xl font-semibold">
              Third card
            </div>
            <div className="stacking-card w-[1200] h-[600px] bg-neutral-500 rounded-lg border-2 border-neutral-500 [grid-area:1/1/2/2] flex items-center justify-center text-xl font-semibold">
              Fourth card
            </div>
          </div>
        </div>
      </section>

      <section className=""></section>
    </div>
  );
}
