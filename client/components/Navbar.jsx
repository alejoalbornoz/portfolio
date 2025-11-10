"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constance/index.js";

export default function Navbar() {
  const [isOnDarkBg, setIsOnDarkBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      
      const contactTransform = window.getComputedStyle(contactPanel).transform;
      const aboutTransform = window.getComputedStyle(aboutPanel).transform;
      
      const contactInView = contactRect.top <= 100 && contactRect.bottom >= 100;
      const aboutIsUp = aboutTransform.includes("matrix(1, 0, 0, 1, 0, -") || 
                        aboutRect.top < -window.innerHeight * 0.5;
      const contactNotMoved = !contactTransform.includes("matrix(1, 0, 0, 1, 0, -");
      
      const isContactActive = contactInView && aboutIsUp && contactNotMoved;
      
      setIsOnDarkBg(isContactActive);
    };

    const interval = setInterval(checkDarkSection, 100);

    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <div 
        className={`fixed z-50 w-full px-4 sm:px-8 md:px-12 lg:px-20 font-[sora] transition-colors duration-500 ${
          isOnDarkBg ? "text-[#fffcf5]" : "text-[#2c3d33]"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 text-[16px] sm:text-[18px] md:text-[20px]">
          <a href="#home" className="flex items-center gap-2 cursor-pointer z-50">
            <p>Inicio</p>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex lg:gap-12 gap-7 cursor-pointer">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          className={`border transition-colors duration-500 ${
            isOnDarkBg ? "border-[#fffcf5]" : "border-[#0000001c]"
          }`}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#2c3d33] bg-opacity-95 backdrop-blur-lg transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-[#fffcf5] cursor-pointer z-50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col items-center justify-center h-full gap-8 text-[#fffcf5] text-[24px] cursor-pointer">
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Inicio
              </a>
            </li>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={handleLinkClick}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}