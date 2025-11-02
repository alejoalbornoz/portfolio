import React from "react";
import { LogoLoop } from "./LogoLoop";
import iconsData from "../data/icons.json";

export default function About() {
  return (
    <div className="h-screen mt-40">
      <div className="flex justify-center items-center">
        <LogoLoop
          logos={iconsData.icons}
          title={iconsData.title}
          fadeOut
          fadeOutColor="#000000"
        />
      </div>
    </div>
  );
}
