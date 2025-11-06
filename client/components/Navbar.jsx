"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constance/index.js";

export default function Navbar() {
  const [isOnDarkBg, setIsOnDarkBg] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  useEffect(() => {
    const checkDarkSection = () => {
      const contactPanel = document.querySelector("#contact");
      const aboutPanel = document.querySelector("#about");
      
      if (!contactPanel || !aboutPanel) return;

      const contactRect = contactPanel.getBoundingClientRect();
      const aboutRect = aboutPanel.getBoundingClientRect();
      
      // Obtener los transforms de ambos paneles
      const contactTransform = window.getComputedStyle(contactPanel).transform;
      const aboutTransform = window.getComputedStyle(aboutPanel).transform;
      
      // Contact está visible si:
      // 1. Está en el viewport
      const contactInView = contactRect.top <= 100 && contactRect.bottom >= 100;
      
      // 2. About está movido hacia arriba (yPercent: -100)
      const aboutIsUp = aboutTransform.includes("matrix(1, 0, 0, 1, 0, -") || 
                        aboutRect.top < -window.innerHeight * 0.5;
      
      // 3. Contact NO está movido hacia arriba
      const contactNotMoved = !contactTransform.includes("matrix(1, 0, 0, 1, 0, -");
      
      const isContactActive = contactInView && aboutIsUp && contactNotMoved;
      
      setIsOnDarkBg(isContactActive);
    };

    const interval = setInterval(checkDarkSection, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div 
        className={`fixed z-50 w-full pl-20 pr-20 font-[sora] transition-colors duration-500 ${
          isOnDarkBg ? "text-[#fffcf5]" : "text-[#2c3d33]"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 text-[20px] cursor-pointer">
          <a href="#home" className="flex items-center gap-2">
            <p>Inicio</p>
          </a>
          <ul className="flex lg:gap-12 gap-7 cursor-pointer">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div 
          className={`border transition-colors duration-500 ${
            isOnDarkBg ? "border-[#fffcf5]" : "border-[#0000001c]"
          }`}
        />
      </div>
    </nav>
  );
}