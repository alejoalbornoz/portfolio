// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import About from "./About";
// import Contact from "./Contact";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function SwipeSection() {
//   const intentObserverRef = useRef(null);
//   const scrollTimeoutRef = useRef(null);
//   const currentIndexRef = useRef(0);
//   const allowScrollRef = useRef(true);

//   const [isDesktop, setIsDesktop] = useState(false);

//   // 🔒 Bloqueo / desbloqueo real del scroll
//   const lockScroll = () => {
//     document.body.style.overflow = "hidden";
//   };

//   const unlockScroll = () => {
//     document.body.style.overflow = "";
//   };

//   useEffect(() => {
//     const update = () => setIsDesktop(window.innerWidth >= 768);
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   useEffect(() => {
//     if (!isDesktop) return;

//     const swipePanels = gsap.utils.toArray(".swipe-section .panel");
//     const isTouch = ScrollTrigger.isTouch;

//     if (isTouch === 1) {
//       ScrollTrigger.normalizeScroll(true);
//     }

//     gsap.set(swipePanels, {
//       zIndex: (i) => swipePanels.length - i,
//     });

//     scrollTimeoutRef.current = gsap
//       .delayedCall(0.8, () => {
//         allowScrollRef.current = true;
//       })
//       .pause();

//     const gotoPanel = (index, isScrollingDown) => {
//       const lastIndex = swipePanels.length - 1;

//       // 🚫 Último panel + scroll hacia abajo = BLOQUEO TOTAL
//       if (currentIndexRef.current === lastIndex && isScrollingDown) {
//         lockScroll();
//         return;
//       }

//       // 🔓 Si vuelvo hacia arriba desde el último, libero
//       if (currentIndexRef.current === lastIndex && !isScrollingDown) {
//         unlockScroll();
//       }

//       if (index < 0 || index > lastIndex) return;

//       allowScrollRef.current = false;
//       scrollTimeoutRef.current.restart(true);

//       const target = isScrollingDown
//         ? swipePanels[currentIndexRef.current]
//         : swipePanels[index];

//       gsap.to(target, {
//         yPercent: isScrollingDown ? -100 : 0,
//         duration: 0.75,
//         ease: "power2.out",
//       });

//       currentIndexRef.current = index;
//     };

//     intentObserverRef.current = ScrollTrigger.observe({
//       type: "wheel,touch",
//       onUp: () =>
//         allowScrollRef.current &&
//         gotoPanel(currentIndexRef.current - 1, false),
//       onDown: () =>
//         allowScrollRef.current &&
//         gotoPanel(currentIndexRef.current + 1, true),
//       tolerance: 10,
//       preventDefault: true,
//       scrollSpeed: isTouch === 1 ? 1 : -1,
//       onEnable(self) {
//         allowScrollRef.current = false;
//         scrollTimeoutRef.current.restart(true);

//         const savedScroll = self.scrollY();
//         self._restoreScroll = () => self.scrollY(savedScroll);
//         document.addEventListener("scroll", self._restoreScroll, {
//           passive: false,
//         });
//       },
//       onDisable(self) {
//         document.removeEventListener("scroll", self._restoreScroll);
//       },
//     });

//     intentObserverRef.current.disable();

//     ScrollTrigger.create({
//       trigger: ".swipe-section",
//       pin: true,
//       pinSpacing: false,
//       start: "top top",
//       end: () => `+=${(swipePanels.length - 1) * window.innerHeight}`,
//       onEnter(self) {
//         if (intentObserverRef.current.isEnabled) return;
//         self.scroll(self.start + 1);
//         intentObserverRef.current.enable();
//       },
//       onEnterBack(self) {
//         if (intentObserverRef.current.isEnabled) return;
//         unlockScroll();
//         self.scroll(self.end - 1);
//         intentObserverRef.current.enable();
//       },
//     });

//     return () => {
//       unlockScroll();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       intentObserverRef.current?.kill();
//       scrollTimeoutRef.current?.kill();
//     };
//   }, [isDesktop]);

//   return (
//     <div
//       className={`swipe-section relative w-full ${
//         isDesktop ? "h-screen overflow-hidden" : "h-auto"
//       }`}
//     >
//       <div className="panel md:absolute md:inset-0 relative">
//         <About />
//       </div>

//       <div className="panel md:absolute md:inset-0 relative">
//         <Contact />
//       </div>
//     </div>
//   );
// }ccccccccccc
