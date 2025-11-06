// components/AboutSection.jsx
export default function About() {
  return (
    <section
      className="panel absolute inset-0 flex flex-col md:flex-row items-center justify-center rounded-b-[150px] bg-[#fffcf5] text-[#2c3d33] font-[sora] px-6 md:px-12 "
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl w-full">
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-[70px] font-bold">Acerca de mi</h1>
          <p className="text-lg leading-relaxed">
            I turn ideas into clean, functional and meaningful digital
            experiences...
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-2 px-6 py-3 border border-black rounded-full font-medium hover:bg-[#2c3d33] hover:text-[#fffcf5] transition">
              More about me →
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-[400px] h-[500px] bg-[#2c3d33] rounded-2xl overflow-hidden">
          </div>
        </div>
      </div>
    </section>
  );
}