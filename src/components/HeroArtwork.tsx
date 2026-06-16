import { useEffect, useRef } from "react";

export function HeroArtwork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0;
    let mx = 0;
    let my = 0;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mx = (e.clientX - rect.left) / rect.width - 0.5;
      my = (e.clientY - rect.top) / rect.height - 0.5;
    };
    window.addEventListener("mousemove", onMove);

    const render = () => {
      container.style.setProperty("--mx", `${mx * 30}px`);
      container.style.setProperty("--my", `${my * 30}px`);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px]"
      style={{
        transform:
          "translate3d(var(--mx, 0px), var(--my, 0px), 0)",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* SVG grid lines similar to reference */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* diagonal lines */}
        {Array.from({ length: 14 }).map((_, i) => {
          const offset = i * 50 - 200;
          return (
            <line
              key={`a-${i}`}
              x1={-200 + offset}
              y1={-100}
              x2={800 + offset}
              y2={700}
              stroke="url(#lineG)"
              strokeWidth="1"
            />
          );
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const offset = i * 60 - 200;
          return (
            <line
              key={`b-${i}`}
              x1={800 - offset}
              y1={-100}
              x2={-200 - offset}
              y2={700}
              stroke="url(#lineG)"
              strokeWidth="1"
              opacity="0.6"
            />
          );
        })}
      </svg>

      {/* Big gradient blurred blobs */}
      <div
        className="absolute -top-6 -right-8 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full blur-3xl opacity-80 animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #F5C9B9 0%, #F07C4C 60%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -left-8 w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full blur-3xl opacity-70 animate-pulse-soft"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #F4E1A7 0%, #F5C9B9 55%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[200px] h-[200px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, #F07C4C 0%, transparent 70%)",
        }}
      />

      {/* ✕ symbol */}
      <div className="absolute top-4 right-8 md:top-12 md:right-16 text-ink animate-jitter">
        <svg width="90" height="90" viewBox="0 0 100 100">
          <line x1="15" y1="15" x2="85" y2="85" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
          <line x1="85" y1="15" x2="15" y2="85" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="40" stroke="#1A1A1A" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Small + and dot accents */}
      <div className="absolute bottom-12 left-8 text-ink text-4xl font-light animate-float-slow opacity-80">
        +
      </div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-ink animate-pulse-soft" />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-accent" />

      {/* Decorative card mockup */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] max-w-[320px] bg-white/70 backdrop-blur rounded-2xl border border-ink/10 shadow-2xl p-4 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-2 h-2 rounded-full bg-softyellow" />
          <span className="w-2 h-2 rounded-full bg-ink/40" />
          <span className="ml-auto text-[10px] text-ink/50 font-mono">live</span>
        </div>
        <div
          className="h-28 rounded-xl mb-3 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg,#F5C9B9 0%,#F07C4C 55%,#1A1A1A 100%)",
          }}
        >
          <div className="px-4 py-3 text-white/95">
            <div className="font-display text-2xl rotate-0 text-left">What makes everything possible?&nbsp;</div>
            <div className="font-display italic text-2xl text-left">Design. Defined</div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-[10px] px-2 py-1 rounded-full bg-ink/5 text-ink/70">UI/UX</span>
          <span className="text-[10px] px-2 py-1 rounded-full bg-ink/5 text-ink/70">Agentic</span>
          <span className="text-[10px] px-2 py-1 rounded-full bg-ink/5 text-ink/70">AIGC</span>
        </div>
      </div>
    </div>
  );
}
