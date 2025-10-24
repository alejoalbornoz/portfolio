"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    gsap.set(".letter-image", {
      y: -1000,
      opacity: 0,
    });

    gsap.set(".letter-image-x", {
      x: 800,
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(".letter-image", {
      y: 0,
      opacity: 1,
      duration: 1.7,
      ease: "expo.inOut",
      stagger: {
        each: 0.2,
        from: "start",
      },
    });

    tl.to(".letter-image-x", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "bounce.out",
      stagger: {
        each: 0.4,
        from: "start",
      },
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-auto h-screen w-full text-[#bbbbbb]">
      <div className="text-2xl font-bold">
        {/* <h1>12:00 - Buenos Aires</h1> */}
      </div>
      <div className="flex flex-row gap-4">
        <Image
          className="letter-image"
          src="/a2.png"
          alt="Image description"
          width={200}
          height={200}
        />
        <Image
          className="letter-image"
          src="/l2.png"
          alt="Image description"
          width={200}
          height={200}
        />
        <Image
          className="letter-image"
          src="/e2.png"
          alt="Image description"
          width={200}
          height={200}
        />
        <Image
          className="letter-image"
          src="/j2.png"
          alt="Image description"
          width={200}
          height={200}
        />
        <Image
          className="letter-image-x"
          src="/o2.png"
          alt="Image description"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}
