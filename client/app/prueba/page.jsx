import React from "react";
import Image from "next/image";

const TechStackDisplay = () => {
  const stacks = [
    {
      title: "Stack Frontend",
      command: "~/skills $ ls ./frontend",
      items: [
        { name: "HTML", icon: "html5.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "Tailwind", icon: "tailwindcss.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Next.js", icon: "next.svg" },
        { name: "JS", icon: "javascript.svg" },
        { name: "TS", icon: "typescript.svg" },
        { name: "Vite", icon: "vite.svg" },
      ],
    },
    {
      title: "Stack Backend",
      command: "~/skills $ ls ./backend",
      items: [
        { name: "Node.js", icon: "node.svg" },
        { name: "Express", icon: "express.svg" },
        { name: "Python", icon: "python.svg" },
      ],
    },
    {
      title: "Stack Database",
      command: "~/skills $ ls ./data-layer",
      items: [
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
      ],
    },
    {
      title: "Tools",
      command: "~/skills $ ls ./tools",
      items: [
        { name: "Git", icon: "git.svg" },
        { name: "GitHub", icon: "github.svg" },
        { name: "Docker", icon: "docker.svg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf5] text-[#2c3d33] p-8">
      <div className="max-w-7xl mx-auto h-screen flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight text-center mb-6">
          Mis Herramientas & Tecnologías
        </h1>
        <p className="text-center text-[#2c3d33] opacity-70 mb-12 text-lg">
          El stack con el que desarrollo aplicaciones limpias, consistentes y
          <br />
          listas para producción.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#2c3d33] border-opacity-10 overflow-hidden shadow-sm"
            >
              {/* Terminal Header */}
              <div className="bg-[#f5f1e8] border-b border-[#2c3d33] border-opacity-10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[#2c3d33] opacity-60 text-sm ml-4">
                  {stack.title}
                </span>
              </div>

              {/* Terminal Command */}
              <div className="bg-[#f9f6ed] px-4 py-3 font-mono text-sm">
                <span className="text-green-600">→ </span>
                <span className="text-[#2c3d33]">{stack.command}</span>
                <span className="text-[#2c3d33] opacity-30 ml-2">▋</span>
              </div>

              {/* Icons Grid */}
              <div className="p-6 grid grid-cols-3 gap-6">
                {stack.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#f5f1e8] border border-[#2c3d33] border-opacity-10 flex items-center justify-center p-2 hover:bg-[#ebe7dc] transition-colors">
                      <Image
                        src={`/icons/${item.icon}`}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        width={48}
                        height={48}
                      />
                    </div>
                    <span className="text-xs text-[#2c3d33] opacity-70">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackDisplay;
