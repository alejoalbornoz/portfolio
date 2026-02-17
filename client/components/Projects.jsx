"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* =======================
   ICONOS DE TECNOLOGÍAS
======================= */
const TechIcons = ({ icons }) => {
  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {icons.map((icon) => (
        <div key={icon} className="h-7 w-7 flex items-center justify-center">
          <Image
            src={`/icons/${icon}.svg`}
            alt={icon}
            width={30}
            height={30}
            className={`object-contain ${icon === "mongodb" ? "scale-70" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};

export default function Projects() {
  const horizontalContainerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const setupScrollTrigger = () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set(".horizontal .panel", { clearProps: "all" });

      if (window.innerWidth >= 1024) {
        const sections = gsap.utils.toArray(".horizontal .panel");

        const animation = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            scrub: 1,
            end: "+=3500",
            invalidateOnRefresh: true,
          },
        });

        scrollTriggerRef.current = animation.scrollTrigger;
      }

      ScrollTrigger.refresh();
    };

    setupScrollTrigger();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setupScrollTrigger, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden" id="projects">
      <div className="horizontal lg:w-[400%] w-full lg:h-screen lg:flex lg:flex-nowrap">
        {/* ========= PROYECTO 1 ========= */}
        <section className="panel lg:w-screen min-h-screen flex items-center justify-center py-8">
          <ProjectCard
            image="/images/laptop.png"
            number="Proyecto #1"
            title="Tienda E-Commerce de Mates"
            description="E-commerce full stack con autenticación, carrito y gestión de productos. Pensado para escalar y listo para producción."
            icons={[
              "vite",
              "react",
              "javascript",
              "node",
              "express",
              "mongodb",
            ]}
            repo="https://github.com/alejoalbornoz/Mates-E-Commerce"
          />
        </section>

        {/* ========= PROYECTO 2 ========= */}
        <section className="panel lg:w-screen min-h-screen flex items-center justify-center py-8">
          <ProjectCard
            image="/images/laptop-project2.png"
            number="Proyecto #2"
            title="Sistema de Reservas para Restaurante"
            description="Sistema de reservas optimizado para SEO y rendimiento, con gestión de turnos y disponibilidad."
            icons={[
              "next",
              "react",
              "typescript",
              "node",
              "express",
              "postgresql",
            ]}
            repo="https://github.com/alejoalbornoz/MeatResturant"
          />
        </section>

        {/* ========= PROYECTO 3 ========= */}
        <section className="panel lg:w-screen min-h-screen flex items-center justify-center py-8">
          <ProjectCard
            image="/images/obrasocialsaas.png"
            number="Proyecto #3"
            title="SaaS de Obra Social"
            description="Plataforma SaaS tipada y escalable para gestión de usuarios, planes y operaciones internas."
            icons={[
              "next",
              "react",
              "typescript",
              "node",
              "express",
              "postgresql",
            ]}
            repo="https://github.com/alejoalbornoz/Saas-ObraSocial"
          />
        </section>
      </div>
    </div>
  );
}

/* =======================
   TARJETA DE PROYECTO
======================= */
const ProjectCard = ({ image, number, title, description, icons, repo }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#2c3d33] lg:h-[800px] w-[90%] max-w-[1400px] rounded-3xl p-6">
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] bg-[#fffcf5] rounded-3xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
        <span className="text-[#f9f9f9] font-semibold">{number}</span>

        <h2 className="text-[#f9f9f9] mt-3 text-3xl lg:text-5xl font-bold">
          {title}
        </h2>

        <p className="text-[#b3b3b3] text-lg lg:text-xl mt-6">{description}</p>

        <TechIcons icons={icons} />

        <a
          href={repo}
          target="_blank"
          className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[#fffcf5] text-[#2c3d33] font-semibold rounded-full hover:scale-105 transition"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          Ver repositorio
        </a>
      </div>
    </div>
  );
};
