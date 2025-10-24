// import Image from "next/image";
import Herov from "../components/Herov";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Herov />
    </main>
  );
}
