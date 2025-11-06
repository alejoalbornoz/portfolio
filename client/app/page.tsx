// import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import SwipeSection from "../components/SwipeSection";


export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <SwipeSection />
    </main>
  );
}
