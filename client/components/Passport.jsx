import React from "react";

// Passport-like component built with React + TailwindCSS
// Drop this file into a React / Next.js project with Tailwind configured.
// Replace the avatarPlaceholder with your own image path or URL.

export default function PassportMockup({
  name = "MIMANSA SHARMA",
  email = "MIMANSA.SHARMA@GMAIL.COM",
  nationality = "INDIAN",
  dob = "16-12-2000",
  profession = "UI/UX DESIGNER",
  location = "GURGAON",
  avatarPlaceholder = "/avatar-placeholder.jpg",
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-[560px] bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-2">
        {/* Top half: stamp / postcard */}
        <div className="bg-slate-100 p-8 flex items-center justify-center">
          <div className="relative w-[720px] h-[220px] bg-[#cfe4fb] rounded-md flex items-center justify-center">
            {/* scalloped border (stamp effect) */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 720 220" preserveAspectRatio="none">
                <defs>
                  <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#cfe4fb" />
                    <circle cx="20" cy="20" r="6" fill="#eaf5ff" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="720" height="220" fill="url(#dots)" rx="12" />
                {/* scallops */}
                {Array.from({ length: 36 }).map((_, i) => {
                  const cx = 10 + i * 20;
                  const cyTop = 0;
                  const cyBottom = 220;
                  return (
                    <g key={i}>
                      <circle cx={cx} cy={cyTop} r={8} fill="#ffffff" />
                      <circle cx={cx} cy={cyBottom} r={8} fill="#ffffff" />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* stylized portrait bubble */}
            <div className="relative w-[240px] h-[160px] rounded-lg bg-white flex items-center justify-center">
              <svg viewBox="0 0 200 140" className="w-44 h-32">
                <rect width="100%" height="100%" rx="10" fill="#bcdffb" />
                <g transform="translate(20,10)">
                  <ellipse cx="60" cy="60" rx="40" ry="44" fill="#ffd1e6" />
                  <rect x="10" y="10" width="80" height="18" rx="8" fill="#fff" opacity="0.9" />
                  <circle cx="40" cy="60" r="6" fill="#111" />
                  <circle cx="80" cy="60" r="6" fill="#111" />
                  <circle cx="60" cy="85" r="8" fill="#ff97c1" />
                </g>
              </svg>
            </div>

            {/* decorative stars */}
            <div className="absolute left-6 top-6 text-white opacity-70">✦</div>
            <div className="absolute right-6 bottom-6 text-white opacity-70">✦</div>
          </div>
        </div>

        {/* Bottom half: passport info */}
        <div className="p-8 bg-white">
          <div className="flex gap-6">
            {/* photo block */}
            <div className="w-48 h-56 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden border border-gray-300">
              <img src={avatarPlaceholder} alt="avatar" className="w-full h-full object-cover" />
            </div>

            {/* info grid */}
            <div className="flex-1">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm uppercase text-gray-500">Republic of Design</h3>
                <div className="text-xs text-gray-400">Passport</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-[10px] text-gray-400">Name</div>
                  <div className="font-semibold text-gray-800">{name}</div>
                </div>

                <div>
                  <div className="text-[10px] text-gray-400">Sex / Date of Birth</div>
                  <div className="font-medium text-gray-800">F / {dob}</div>
                </div>

                <div>
                  <div className="text-[10px] text-gray-400">Email</div>
                  <div className="truncate text-gray-700">{email}</div>
                </div>

                <div>
                  <div className="text-[10px] text-gray-400">Nationality</div>
                  <div className="text-gray-700">{nationality}</div>
                </div>

                <div className="col-span-2">
                  <div className="text-[10px] text-gray-400">Profession / City</div>
                  <div className="text-gray-700">{profession} — {location}</div>
                </div>
              </div>

              {/* machine-readable rows (codigo lines) */}
              <div className="mt-6">
                <div className="text-[10px] text-gray-400 mb-1">Codigo (líneas generadas)</div>
                <div className="bg-black text-green-400 text-xs font-mono p-3 rounded-md">
                  {/* simulate code-like lines */}
                  <pre className="whitespace-pre-wrap">{`const passport = {
  name: "${name}",
  email: "${email}",
  nationality: "${nationality}",
  dob: "${dob}",
  profession: "${profession}",
  location: "${location}"
}

export default passport;`}</pre>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-gray-400">* Puedes personalizar los estilos y reemplazar la imagen de avatar con tu propio archivo.</div>
            </div>
          </div>

          {/* footer decorative line */}
          <div className="mt-6 border-t border-dashed border-gray-200 pt-4 text-xs text-gray-400">REPUBLIC of DESIGN — &lt;SERIES 000000&gt;</div>
        </div>
      </div>
    </div>
  );
}
