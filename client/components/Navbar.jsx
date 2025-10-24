"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constance/index.js";

export default function Navbar() {
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

  return (
    <nav>
      <div className="fixed z-50 w-full text-[#edd509]">
        <div className="flex justify-between items-center px-6 py-4 text-2xl ">
          {/* Logo a la izquierda */}
          <a href="#home" className="flex items-center gap-2">
            <p>me</p>
          </a>
          
          {/* Links a la derecha */}
          <ul className="flex lg:gap-12 gap-7">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}