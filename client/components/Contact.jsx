
export default function Contact() {
  return (
    <section
      className="panel absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#2c3d33] text-[#f9f9f9] font-[sora]"
      id="contact"
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-6">
        <button className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
          Dí Hola – ale.dev@gmail.com
        </button>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          <button className="flex-1 min-w-[40%] border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
            GitHub
          </button>
          <button className="flex-1 min-w-[40%] border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
            Ver CV
          </button>
        </div>

        <button className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-lg font-medium hover:bg-[#f9f9f9]/10 transition">
          LinkedIn
        </button>
      </div>

      <h1 className="text-[150px] md:text-[200px] font-extrabold font-[sora] leading-none mt-12">
        GRACIAS
      </h1>
    </section>
  );
}