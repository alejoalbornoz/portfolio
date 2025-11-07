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
    // Solo activar scroll horizontal en desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Horizontal Scroll Container - Desktop / Vertical Scroll - Mobile */}
      <div
        ref={horizontalContainerRef}
        className="horizontal lg:w-[400%] w-full lg:h-screen lg:flex lg:flex-nowrap"
      >
        {/* Panel 1 */}
        <section className="panel lg:w-screen w-full lg:h-full min-h-screen flex items-center justify-center lg:shrink-0 py-8 lg:py-0">
          <div className="relative flex flex-col lg:flex-row justify-center items-center bg-[#2c3d33] lg:h-[800px] w-[90%] max-w-[1400px] border border-[#2c3d33] shadow-sm rounded-3xl lg:rounded-4xl p-6 lg:p-0">
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] bg-[#fffcf5] lg:m-20 mb-6 lg:mb-0 rounded-3xl lg:rounded-4xl overflow-hidden">
              <Image
                src="/images/laptop.png"
                alt="Laptop"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full  lg:w-1/2 lg:p-2 px-4 lg:px-0">
              <span className="text-[#f9f9f9] text-base lg:text-xl font-semibold">
                Proyecto #1
              </span>
              <h1 className="text-[#f9f9f9] mt-3 pl-2 lg:mt-5 text-3xl lg:text-6xl font-bold">
                Tienda E-Commerce de Mates
              </h1>
              <p className="text-[#b3b3b3] text-base lg:text-2xl pt-6 lg:pt-10">
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

        {/* Panel 2 */}
        <section className="panel lg:w-screen w-full lg:h-full min-h-screen flex items-center justify-center lg:shrink-0 py-8 lg:py-0">
          <div className="relative flex flex-col lg:flex-row justify-center items-center bg-[#2c3d33] lg:h-[800px] w-[90%] max-w-[1400px] border border-[#2c3d33] shadow-sm rounded-3xl lg:rounded-4xl p-6 lg:p-0">
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] bg-[#fffcf5] lg:m-20 mb-6 lg:mb-0 rounded-3xl lg:rounded-4xl overflow-hidden">
              <Image
                src="/images/laptop-project2.png"
                alt="Laptop 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:p-2 px-4 lg:px-0">
              <span className="text-[#f9f9f9] text-base lg:text-xl font-semibold">
                Proyecto #2
              </span>
              <h1 className="text-[#f9f9f9] mt-3 lg:mt-5 text-3xl lg:text-6xl font-bold">
                Sistema de Reservas para Restaurante
              </h1>
              <p className="text-[#b3b3b3] text-base lg:text-2xl pt-6 lg:pt-10">
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

        {/* Panel 3 */}
        <section className="panel lg:w-screen w-full lg:h-full min-h-screen flex items-center justify-center lg:shrink-0 py-8 lg:py-0">
          <div className="relative flex flex-col lg:flex-row justify-center items-center bg-[#2c3d33] lg:h-[800px] w-[90%] max-w-[1400px] border border-[#2c3d33] shadow-sm rounded-3xl lg:rounded-4xl p-6 lg:p-0">
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] bg-[#fffcf5] lg:m-20 mb-6 lg:mb-0 rounded-3xl lg:rounded-4xl overflow-hidden">
              {/* <Image
                src="/images/laptop-project3.png"
                alt="Laptop 3"
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="w-full lg:w-1/2 lg:p-2 px-4 lg:px-0">
              <span className="text-[#f9f9f9] text-base lg:text-xl font-semibold">
                Proyecto #3
              </span>
              <h1 className="text-[#f9f9f9] mt-3 pl-2 lg:mt-5 text-3xl lg:text-6xl font-bold">
                Lorem ipsum dolor sit.
              </h1>
              <p className="text-[#b3b3b3] text-base lg:text-2xl pt-6 lg:pt-10">
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
