"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

export default function Herov() {
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const split = new SplitText(titleRef.current, { type: "chars" });
    const chars = split.chars;

    gsap.set(chars, { opacity: 0, y: 80 });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05, // Delay entre cada letra
    });
  }, []);

  return (
    <div className="flex justify-center flex-row items-center  h-screen">
      <h1
        ref={titleRef}
        className="text-[150px] mb-30 text-[#edd509] font-bold leading-[0.9]"
      >
        Alejo <br /> Albornoz
      </h1>
    </div>
  );
}
