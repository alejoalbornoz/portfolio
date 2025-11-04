"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const horizontalContainerRef = useRef(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Horizontal Scroll Container */}
      <div
        ref={horizontalContainerRef}
        className="horizontal w-[400%] h-screen flex flex-nowrap"
      >
        <section className="panel w-screen h-full flex items-center justify-center   text-6xl font-bold shrink-0">
          <div className="h-[800] w-[1400px] border border-[#1022ff] shadow-sm rounded-4xl"></div>
        </section>
        <section className="panel w-screen h-full flex items-center justify-center   text-6xl font-bold shrink-0">
          <div className="h-[800] w-[1400px] border border-[#1022ff] shadow-sm rounded-4xl"></div>
        </section>
        <section className="panel w-screen h-full flex items-center justify-center   text-6xl font-bold shrink-0">
          <div className="h-[800] w-[1400px] border border-[#1022ff] shadow-sm rounded-4xl"></div>
        </section>
      </div>
    </div>
  );
}
