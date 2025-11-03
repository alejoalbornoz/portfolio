"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const line1 = "Hola";
  const line2 = "soy Alejo";

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current];
    if (!lines[0] || !lines[1]) return;

    lines.forEach((line, index) => {
      line.innerHTML = "";
      const text = index === 0 ? line1 : line2;

      text.split("").forEach((char) => {
        const wrapper = document.createElement("span");
        wrapper.className = "relative inline-block will-change-transform";

        const fill = document.createElement("span");
        fill.textContent = char === " " ? "\u00A0" : char;
        fill.className = "text-fill block relative z-10";

        const outline = document.createElement("span");
        outline.textContent = char === " " ? "\u00A0" : char;
        outline.className =
          "text-outline block absolute top-0 left-0 z-20 pointer-events-none";

        wrapper.appendChild(fill);
        wrapper.appendChild(outline);
        line.appendChild(wrapper);
      });
    });

    const letters = sectionRef.current.querySelectorAll("span");

    gsap.set(letters, { y: 0, x: 0, rotation: 0, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(letters, {
      y: () => gsap.utils.random(-300, -150),
      x: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-60, 60),
      opacity: 0,
      ease: "power2.out",
      stagger: { each: 0.03, from: "center" },
      duration: 10,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(letters);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="h-screen relative">
        <div className="h-screen flex flex-col items-center justify-center sticky top-0 ">
          <h1
            ref={line1Ref}
            className="relative font-[Anton] tracking-tight leading-[0.9] text-[200px] mb-4"
          />
          <h1
            ref={line2Ref}
            className="relative font-[Anton] tracking-tight leading-[0.9] text-[200px]"
          />
          <p className="pt-10 text-[20px] text-gray-400">
            Desarrollador FullStack
          </p>
        </div>
      </section>
    </>
  );
}
