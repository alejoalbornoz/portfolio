import React from "react";
import Image from "next/image";

export default function CreativeSpace() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4  sm:px-6 lg:px-12 py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Welcome Badge */}
        <div className="mb-12 translate-y-3 flex justify-center lg:justify-start ">
          <div className="inline-flex items-center gap-3 border border-[#2c3d33] rounded-full px-5 py-2">
            <span className="text-xl">👋</span>
            <span className="text-[#2c3d33] font-medium text-sm sm:text-base">
              Bienvenido a mi portfolio
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h1
              className="
                font-[Anton] tracking-tight leading-[0.9]
                text-[48px] sm:text-[72px] md:text-[110px] lg:text-[160px] xl:text-[210px]
                mb-6
              "
            >
              ALEJO <br /> ALBORNOZ
            </h1>

            <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Hola, soy{" "}
              <span className="font-semibold">Desarrollador FullStack</span>.
              Escribo código para resolver problemas reales y construir
              experiencias web sólidas. Me interesa entender el “por qué” detrás
              de cada proyecto, no solo el “cómo”. Trabajo con tecnologías
              modernas y una mentalidad clara: aprender, iterar y mejorar en
              cada línea de código.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                max-w-xs sm:max-w-sm lg:max-w-lg
                rounded-3xl overflow-hidden shadow-2xl
                lg:-translate-y-12 lg:translate-x-12
              "
            >
              <Image
                src="/images/imagenalejo2.jpeg"
                alt="Alejo Albornoz"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 hidden sm:flex items-center justify-between text-sm text-gray-600">
          <span>Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
          </div>
          <span>Scroll down</span>
        </div>
      </div>
    </section>
  );
}
