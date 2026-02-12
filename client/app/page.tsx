import Technologies from "../components/Technologies";
import HeroV2 from "../components/HeroV2";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact"



export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroV2 />
      <Projects />
      <Technologies/>
      <Contact/>
    </main>
  );
}
