"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
        <section className="panel w-screen h-full flex items-center justify-center  shrink-0">
          <div className="flex flex-row justify-center items-center bg-[#2c3d33] h-[800] w-[1400px] border border-[#2c3d33] shadow-sm rounded-4xl ">
            <div className="relative w-1/2 h-[500px] bg-black m-20 rounded-4xl">
              <Image
                src="/images/laptop.png"
                alt="Laptop"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 p-2">
              <h1 className="text-[#f9f9f9]  text-6xl font-bold">
                Tienda E-Commerce de Mates
              </h1>
              <p className="text-[#b3b3b3] text-2xl pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                iure inventore numquam veniam aliquam sit iusto neque unde, sed
                error facilis possimus atque esse tenetur, incidunt repudiandae
                ipsa vitae sequi soluta illo optio explicabo dolorum reiciendis.
                Soluta voluptatum nemo perferendis magni. Non, itaque. Fuga quos
                excepturi consequuntur, perspiciatis necessitatibus deserunt!
              </p>
            </div>
          </div>
        </section>
        <section className="panel w-screen h-full flex items-center justify-center shrink-0">
          <div className="flex flex-row justify-center items-center bg-[#2c3d33] h-[800] w-[1400px] border border-[#2c3d33] shadow-sm rounded-4xl ">
            <div className="relative w-1/2 h-[500px] bg-black m-20 rounded-4xl">
              <Image
                src="/images/laptop-project2.png"
                alt="Laptop 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 p-2">
              <h1 className="text-[#f9f9f9]  text-6xl font-bold">
                Sistema de Reservas para Restaurante
              </h1>
              <p className="text-[#b3b3b3] text-2xl pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                iure inventore numquam veniam aliquam sit iusto neque unde, sed
                error facilis possimus atque esse tenetur, incidunt repudiandae
                ipsa vitae sequi soluta illo optio explicabo dolorum reiciendis.
                Soluta voluptatum nemo perferendis magni. Non, itaque. Fuga quos
                excepturi consequuntur, perspiciatis necessitatibus deserunt!
              </p>
            </div>
          </div>
        </section>
        <section className="panel w-screen h-full flex items-center justify-center shrink-0">
          <div className="flex flex-row justify-center items-center bg-[#2c3d33] h-[800] w-[1400px] border border-[#2c3d33] shadow-sm rounded-4xl ">
            <div className="relative w-1/2 h-[500px] bg-black m-20 rounded-4xl">
              {/* <Image
                src="/images/laptop-project2.png"
                alt="Laptop 2"
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="w-1/2 p-2">
              <h1 className="text-[#f9f9f9]  text-6xl font-bold">
                Lorem ipsum dolor sit.
              </h1>
              <p className="text-[#b3b3b3] text-2xl pt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                iure inventore numquam veniam aliquam sit iusto neque unde, sed
                error facilis possimus atque esse tenetur, incidunt repudiandae
                ipsa vitae sequi soluta illo optio explicabo dolorum reiciendis.
                Soluta voluptatum nemo perferendis magni. Non, itaque. Fuga quos
                excepturi consequuntur, perspiciatis necessitatibus deserunt!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
