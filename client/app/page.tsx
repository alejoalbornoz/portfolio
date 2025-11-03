// import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Projects from "../components/Projects";
// import About from "../components/About";


export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
