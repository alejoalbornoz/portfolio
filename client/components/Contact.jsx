"use client";

import { useState } from "react";

export default function Contact() {
  const email = "alejoalbornoz912@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="panel relative flex flex-col items-center justify-center gap-6 bg-[#2c3d33] text-[#f9f9f9] font-[sora] px-4 sm:px-6 py-12 md:py-20 min-h-screen"
      id="contact"
    >
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl">

        {/* EMAIL */}
        <div className="w-full flex flex-col gap-2">
          <a
            href={`mailto:${email}`}
            className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-center hover:bg-[#f9f9f9]/10 transition-colors duration-300"
          >
            Email: {email}
          </a>

          <button
            onClick={handleCopy}
            className="text-xs  cursor-pointer sm:text-sm opacity-80 hover:opacity-100 transition"
          >
            {copied ? "📋 Email copiado" : "Copiar email"}
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full">
          <a
            href="https://github.com/alejoalbornoz"
            target="_blank"
            className="flex-1 border border-[#f9f9f9]/70 py-4 rounded-full text-center hover:bg-[#f9f9f9]/10 transition"
          >
            GitHub
          </a>

          <a
            href="/Alejo-Angel-Albornoz-CV.pdf"
            download="Alejo-Angel-Albornoz-CV.pdf"
            className="flex-1 border border-[#f9f9f9]/70 py-4 rounded-full text-center hover:bg-[#f9f9f9]/10 transition"
          >
            Ver CV
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/alejoalbornozz/"
          target="_blank"
          className="w-full border border-[#f9f9f9]/70 py-4 rounded-full text-center hover:bg-[#f9f9f9]/10 transition"
        >
          LinkedIn
        </a>
      </div>

      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[200px] font-extrabold leading-none mt-10 text-center">
        HABLEMOS
      </h1>

      <nav className="flex justify-center absolute bottom-4 w-full text-xs sm:text-sm opacity-70">
        © 2026 Alejo Albornoz. Derechos reservados.
      </nav>
    </section>
  );
}
