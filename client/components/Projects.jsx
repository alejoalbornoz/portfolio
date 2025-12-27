"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import GitHubIcon from "@/public/icons/github.svg";

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
                E-commerce completo orientado a la venta de mates, desarrollado
                con una arquitectura full stack moderna. El frontend está
                construido con React y Vite para una experiencia rápida y
                fluida, mientras que el backend utiliza Express sobre Node.js
                con MongoDB para la gestión de productos, usuarios y
                autenticación. Incluye carrito de compras, manejo de sesiones y
                una base sólida pensada para escalar.
              </p>

              <a
                href="https://github.com/alejoalbornoz/Mates-E-Commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 px-6 py-3 
             text-lg font-semibold text-[#2c3d33] bg-[#fffcf5] 
             rounded-full transition-all duration-300 
             hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="group-hover:rotate-12 transition-transform"
                />
                Ver repositorio
              </a>
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
                Sistema de reservas desarrollado con Next.js y React, enfocado
                en rendimiento y SEO. El backend corre sobre Express y Node.js,
                utilizando Prisma como ORM para una base de datos SQL,
                garantizando integridad y consultas eficientes. Permite
                gestionar turnos, disponibilidad y reservas de manera ordenada,
                pensado para un entorno real de producción.
              </p>
              <a
                href="https://github.com/alejoalbornoz/MeatResturant"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 px-6 py-3 
             text-lg font-semibold text-[#2c3d33] bg-[#fffcf5] 
             rounded-full transition-all duration-300 
             hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="group-hover:rotate-12 transition-transform"
                />
                Ver repositorio
              </a>
            </div>
          </div>
        </section>

        {/* Panel 3 */}
        <section className="panel lg:w-screen w-full lg:h-full min-h-screen flex items-center justify-center lg:shrink-0 py-8 lg:py-0">
          <div className="relative flex flex-col lg:flex-row justify-center items-center bg-[#2c3d33] lg:h-[800px] w-[90%] max-w-[1400px] border border-[#2c3d33] shadow-sm rounded-3xl lg:rounded-4xl p-6 lg:p-0">
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] bg-[#fffcf5] lg:m-20 mb-6 lg:mb-0 rounded-3xl lg:rounded-4xl overflow-hidden">
              <Image
                src="/images/obrasocialsaas.png"
                alt="Laptop 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:p-2 px-4 lg:px-0">
              <span className="text-[#f9f9f9] text-base lg:text-xl font-semibold">
                Proyecto #3
              </span>
              <h1 className="text-[#f9f9f9] mt-3 pl-2 lg:mt-5 text-3xl lg:text-6xl font-bold">
                Saas de Obra Social
              </h1>
              <p className="text-[#b3b3b3] text-base lg:text-2xl pt-6 lg:pt-10">
                Plataforma SaaS desarrollada con Next.js y React, escrita en
                TypeScript para mayor robustez y escalabilidad. El backend
                utiliza Express sobre Node.js junto a Prisma y una base de datos
                SQL, permitiendo una gestión segura y tipada de datos. Diseñada
                para administrar usuarios, planes y operaciones internas, con
                una arquitectura preparada para crecer y adaptarse a nuevos
                módulos.
              </p>

              <a
                href="https://github.com/alejoalbornoz/Saas-ObraSocial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-8 px-6 py-3 
             text-lg font-semibold text-[#2c3d33] bg-[#fffcf5] 
             rounded-full transition-all duration-300 
             hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="group-hover:rotate-12 transition-transform"
                />
                Ver repositorio
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
