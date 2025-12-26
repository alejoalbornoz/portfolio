import React from "react";
import Image from "next/image";

export default function CreativeSpace() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6 py-12 mt-10">
      <div className="max-w-7xl w-full">
        {/* Welcome Badge */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-transparent rounded-full px-6 py-3 shadow-sm border border-[#2c3d33]">
            <span className="text-2xl">👋</span>
            <span className="text-[#2c3d33] font-medium">
              Bienvenido a mi portfolio
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Name with Stars */}
            <div className="flex items-center gap-4 mb-8">
              <h1 className="relative font-[Anton] tracking-tight leading-[0.9] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] xl:text-[250px] mb-2 sm:mb-4 px-4">
                ALEJO ALBORNOZ
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Hola, Soy{" "}
                <span className=" font-semibold">Desarrollador FullStack</span>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ullam explicabo obcaecati rerum aut alias ipsum facere quidem
                provident odio. Ut nobis non facilis. Autem, vel aspernatur
                adipisci dolor cum ullam nemo quasi tenetur perspiciatis culpa
                temporibus alias, dolorem deserunt odio voluptas suscipit magnam
                deleniti quis nisi minima necessitatibus maiores.{" "}
                <span className=" font-semibold">
                  Honours Degree in Design from UID
                </span>
                , lorem100.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md translate-x-30">
              <Image
                src="/images/imagenalejo2.jpeg"
                alt="Alejo Albornoz"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-24 flex items-center justify-between text-sm text-gray-600">
          <span>Scroll down</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          <span>Scroll down</span>
        </div>
      </div>
    </div>
  );
}
