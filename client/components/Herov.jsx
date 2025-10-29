"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import PassportMockup from "./Passport"

export default function Herov() {
  const titleRef = useRef(null);
  const cloudsRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // --- Animación del texto ---
    const split = new SplitText(titleRef.current, { type: "chars" });
    const chars = split.chars;

    gsap.set(chars, { opacity: 0, y: 80 });
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
    });

    // --- Animación de las nubes al scrollear ---
    const clouds = cloudsRef.current?.querySelectorAll(".cloud");

    clouds.forEach((cloud, i) => {
      const direction = i % 2 === 0 ? -1 : 1; // izquierda/derecha alternadas
      gsap.to(cloud, {
        scrollTrigger: {
          trigger: cloudsRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        x: 800 * direction, // se van completamente de la pantalla
        y: i * -100, // movimiento leve hacia arriba
        opacity: 0,
        ease: "power1.out",
      });
    });
  }, []);

  return (
    <main className="overflow-x-hidden text-white">
      {/* Sección principal */}
      <section className="relative flex flex-col justify-center items-center h-screen overflow-hidden">
        {/* Nubes */}
        <div
          ref={cloudsRef}
          className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none"
        >
          <Image
            src="/clouds.png"
            alt="Cloud Left"
            width={400}
            height={400}
            className="absolute cloud left-[10%] top-[25%] opacity-70"
          />
           <Image
            src="/clouds.png"
            alt="Cloud Left"
            width={400}
            height={400}
            className="absolute cloud left-[20%] top-[15%] opacity-70"
          />
          <Image
            src="/clouds.png"
            alt="Cloud Center"
            width={500}
            height={500}
            className="absolute cloud top-[30%] opacity-80"
          />
          <Image
            src="/clouds.png"
            alt="Cloud Right"
            width={400}
            height={400}
            className="absolute cloud right-[10%] top-[25%] opacity-70"
          />
        </div>

        {/* Texto centrado */}
        <div className="relative z-10">
          <h1
            ref={titleRef}
            className="text-[150px] text-[#edd509] font-bold leading-[0.9] text-center"
          >
            Alejo <br /> Albornoz
          </h1>
        </div>
      </section>

      {/* Sección extra para el scroll */}
      <section className="h-[150vh] flex items-center justify-center text-4xl">
       <PassportMockup />
      </section>
    </main>
  );
}
