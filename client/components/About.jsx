import Image from "next/image";

// components/AboutSection.jsx
export default function About() {
  return (
    <section
      className="panel absolute inset-0 flex flex-col md:flex-row items-center justify-center rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[150px] bg-[#fffcf5] text-[#2c3d33] font-[sora] px-4 sm:px-6 md:px-12 py-8 md:py-0"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 max-w-5xl w-full">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4 md:space-y-5 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight">
            Acerca de mi
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed px-4 md:px-0">
            I turn ideas into clean, functional and meaningful digital
            experiences...
          </p>
          <div className="flex justify-center md:justify-start pt-2">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-black rounded-full text-sm sm:text-base font-medium hover:bg-[#2c3d33] hover:text-[#fffcf5] transition-colors duration-300">
              More about me →
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
          <div className="relative w-full max-w-[280px] h-[350px] sm:max-w-[320px] sm:h-[400px] md:max-w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] bg-[#2c3d33] rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/images/imagenalejo.jpeg" 
              fill 
              className="object-cover" 
              alt="Foto de perfil" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}