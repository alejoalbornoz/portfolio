export default function Contact() {
  return (
    <section
      className="panel absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-[#2c3d33] text-[#f9f9f9] font-[sora] px-4 sm:px-6"
      id="contact"
    >
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl">
        <button className="w-full border border-[#f9f9f9]/70 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#f9f9f9]/10 transition-colors duration-300">
          Dí Hola – ale.dev@gmail.com
        </button>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 w-full">
          <button className="flex-1 border border-[#f9f9f9]/70 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#f9f9f9]/10 transition-colors duration-300">
            GitHub
          </button>
          <button className="flex-1 border border-[#f9f9f9]/70 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#f9f9f9]/10 transition-colors duration-300">
            Ver CV
          </button>
        </div>

        <button className="w-full border border-[#f9f9f9]/70 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#f9f9f9]/10 transition-colors duration-300">
          LinkedIn
        </button>
      </div>

      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[200px] font-extrabold font-[sora] leading-none mt-6 sm:mt-8 md:mt-12 text-center">
        GRACIAS
      </h1>
    </section>
  );
}