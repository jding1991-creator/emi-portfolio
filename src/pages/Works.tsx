import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Works() {
  const navigate = useNavigate();

  return (
    <main className="pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 animate-fade-in-up">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50">
          · Works Index
        </div>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.95]">
          Selected <span className="italic">projects.</span>
        </h1>
        <p className="mt-6 max-w-xl text-ink/70 text-base md:text-lg leading-relaxed">一个有血有肉的作品集合集。从 AI-native 产品设计到跨多端的数字化解决方案 — 每一个项目都是一次关于「如何让产品更具价值」的尝试。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="group relative rounded-[24px] overflow-hidden animate-fade-in-up cursor-pointer hover:-translate-y-1 transition-all duration-500"
            style={{
              animationDelay: `${i * 0.08}s`,
              aspectRatio: "4 / 5",
              background: p.coverGradient,
            }}
            onClick={() => navigate(`/works/${p.slug}`)}
          >
            {/* decorative grid lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15"
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
            >
              {Array.from({ length: 8 }).map((_, idx) => (
                <line
                  key={idx}
                  x1={idx * 60 - 200}
                  y1={-100}
                  x2={idx * 60 + 400}
                  y2={600}
                  stroke="white"
                  strokeWidth="1"
                />
              ))}
            </svg>

            <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between text-white">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-80">
                {p.number ?? String(i + 1).padStart(2, "0")} · {p.year}
              </span>
              <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-sm font-bold group-hover:rotate-45 group-hover:bg-white group-hover:text-ink transition-all duration-500">↗</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
              <p className="mt-2 text-white/85 text-sm md:text-base leading-snug max-w-[85%]">
                {p.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="font-display text-2xl md:text-3xl italic text-ink/70">
          更多作品正在路上 — 永远在探索。
        </p>
      </div>
    </main>
  );
}
