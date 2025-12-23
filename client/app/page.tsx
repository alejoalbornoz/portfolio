// import Image from "next/image";
// import Hero from "../components/Hero";
import HeroV2 from "../components/HeroV2";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import SwipeSection from "../components/SwipeSection";


export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroV2 />
      <Projects />
      <SwipeSection />
    </main>
  );
}
