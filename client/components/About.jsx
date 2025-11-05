"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
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

    // Set z-index levels for the swipe panels
    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });

    // Scroll timeout
    scrollTimeoutRef.current = gsap
      .delayedCall(1, () => {
        allowScrollRef.current = true;
      })
      .pause();

    // Handle panel swipe animations
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

    // Create observer
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

    // Pin swipe section and initiate observer
    ScrollTrigger.create({
      trigger: ".swipe-section",
      pin: true,
      start: "top top",
      end: "bottom bottom", // 👈 el pin termina exactamente cuando se acaba la sección
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

    // Cleanup
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
          {/* PANEL 1 – About me */}
          <section className="panel absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-[#fffcf5] text-[#2c3d33] font-[sora] px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl w-full">
              {/* Texto */}
              <div className="flex-1 text-center md:text-left space-y-5">
                <h1 className="text-[90px] font-extrabold">About me</h1>
                <p className="text-lg leading-relaxed">
                  I turn ideas into clean, functional and meaningful digital
                  experiences. With a background in design and development, I
                  blend creativity with logic to craft things that connect.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, veniam a! Non laudantium blanditiis odio numquam maiores
                  officia quo ex neque, quis dolorem! Aut autem eius sequi
                  architecto omnis, facere ducimus pariatur nulla libero
                  molestias at deserunt sapiente doloribus provident excepturi
                  explicabo est adipisci dolor. Corporis architecto
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="mt-2 px-6 py-3 border border-black rounded-full font-medium hover:bg-[#2c3d33] hover:text-[#fffcf5] transition">
                    More about me →
                  </button>
                </div>
              </div>

              {/* Imagen */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-[400px] h-[500px]  bg-[#2c3d33] rounded-2xl overflow-hidden">
                  {/* <Image
          src="/about-photo.png"
          alt="Profile photo"
          fill
          className="object-cover grayscale"
        /> */}
                </div>
              </div>
            </div>
          </section>

          <section className="panel absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#2c3d33] text-[#f9f9f9] font-[sora]">
            <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-6">
              <button className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
                Dí Hola – ale.dev@gmail.com
              </button>
              <button className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
                Ver CV
              </button>

              <div className="flex flex-wrap justify-center gap-6 w-full">
                <button className="flex-1 min-w-[40%] border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
                  GitHub
                </button>
                <button className="flex-1 min-w-[40%] border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
                  Instagram
                </button>
              </div>

              <button className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
                LinkedIn
              </button>
            </div>

            <h1 className="text-[150px] md:text-[200px] font-extrabold leading-none mt-12">
              GRACIAS
            </h1>
          </section>
        </div>
      </div>

      {/* 👇 espacio para seguir scrolleando */}
      <div className="h-[10vh] bg-[#101010] flex items-center justify-center text-white text-3xl">
        Contenido después del swipe
      </div>
    </div>
  );
}
