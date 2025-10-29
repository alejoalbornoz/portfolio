"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { LogoLoop } from "./LogoLoop";
import iconsData from "../data/icons.json";

export default function Hero() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // --- Animación del texto ---
    const split = new SplitText(titleRef.current, { type: "chars" });
    const chars = split.chars;

    // Creamos una timeline para encadenar la animación del nombre y luego la del párrafo
    const tl = gsap.timeline();

    tl.set(chars, { opacity: 0, y: 80 })
      .to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power3.out",
        duration: 1,
      })
      // pequeño delay y animación del párrafo "Desarrollador FullStack"
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        "+=0.2"
      );

    // Opcional: si quisieras limpiar SplitText en un unmount, podrías llamar a split.revert()
  }, []);

  return (
    <main className="overflow-x-hidden text-white font-bold text-center">
      {/* Sección principal */}
      <section className="relative flex flex-col justify-center items-center h-screen overflow-hidden">
        {/* Nubes */}
        {/* Texto centrado */}
        <div className="relative z-10">
          <h1 ref={titleRef} className="text-[150px]  leading-[0.9] ">
            Alejo <br /> Albornoz
          </h1>
          <p ref={paraRef} className="text-[#b2b2b2] text-[50px] ">
            Desarrollador FullStack
          </p>
        </div>
      


        <LogoLoop logos={iconsData.icons} className="logo-white" />
      </section>
    </main>
  );
}
