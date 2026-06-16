import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const total = projects.length;

  // Auto-play every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const goTo = useCallback((direction: number) => {
    setActiveIndex((prev) => (prev + direction + total) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, [total]);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  // Calculate visible cards based on activeIndex
  const visibleCards = useMemo(() => {
    const leftIndex = (activeIndex - 1 + total) % total;
    const centerIndex = activeIndex;
    const rightIndex = (activeIndex + 1) % total;

    return [
      { project: projects[leftIndex], position: "left" as const, index: leftIndex },
      { project: projects[centerIndex], position: "center" as const, index: centerIndex },
      { project: projects[rightIndex], position: "right" as const, index: rightIndex },
    ];
  }, [activeIndex, total]);

  // Get card style based on position
  const getCardStyle = (position: "left" | "center" | "right", isMobile: boolean) => {
    if (isMobile) {
      // Mobile styles - safely get window width
      const windowWidth = typeof window !== "undefined" ? window.innerWidth : 375;
      const mainWidth = Math.min(windowWidth * 0.78, 320);
      const mainHeight = 400;
      const sideWidth = mainWidth * 0.82;
      const sideHeight = mainHeight * 0.82;

      switch (position) {
        case "center":
          return {
            width: `${mainWidth}px`,
            height: `${mainHeight}px`,
            transform: "translate(-50%, -50%) translateX(0) scale(1)",
            opacity: 1,
            zIndex: 30,
          };
        case "left":
          return {
            width: `${sideWidth}px`,
            height: `${sideHeight}px`,
            transform: "translate(-50%, -50%) translateX(-120px) scale(0.82)",
            opacity: 0.55,
            zIndex: 10,
          };
        case "right":
          return {
            width: `${sideWidth}px`,
            height: `${sideHeight}px`,
            transform: "translate(-50%, -50%) translateX(120px) scale(0.82)",
            opacity: 0.55,
            zIndex: 10,
          };
      }
    }

    // Desktop styles
    switch (position) {
      case "center":
        return {
          width: "430px",
          height: "520px",
          transform: "translate(-50%, -50%) translateX(0) scale(1)",
          opacity: 1,
          zIndex: 30,
        };
      case "left":
        return {
          width: "361px", // 430 * 0.84
          height: "437px", // 520 * 0.84
          transform: "translate(-50%, -50%) translateX(-210px) scale(0.84)",
          opacity: 0.6,
          zIndex: 10,
        };
      case "right":
        return {
          width: "361px", // 430 * 0.84
          height: "437px", // 520 * 0.84
          transform: "translate(-50%, -50%) translateX(210px) scale(0.84)",
          opacity: 0.6,
          zIndex: 10,
        };
    }
  };

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <div>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50">
            SELECTED WORKS · 2022–2026
          </div>
          <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
            Things I <span className="italic">designed.</span>
          </h2>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(-1)}
            className="btn-pill !py-2 !px-3"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={() => goTo(1)}
            className="btn-pill !py-2 !px-3"
            aria-label="Next project"
          >→</button>
        </div>
      </div>

      {/* Desktop Carousel - Three cards stack */}
      <div className="hidden md:block">
        {/* Carousel stage with fixed dimensions */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "900px",
            height: "620px",
            overflow: "visible",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleCards.map(({ project, position, index }) => {
            const style = getCardStyle(position, false);
            const isCenter = position === "center";

            return (
              <article
                key={`${project.id}-${position}`}
                className={`absolute top-1/2 left-1/2 rounded-[28px] overflow-hidden cursor-pointer transition-all duration-600 ${
                  isCenter ? "shadow-2xl" : "shadow-xl"
                }`}
                style={{
                  ...style,
                  background: project.coverGradient,
                  transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease",
                }}
                onClick={() => navigate(`/works/${project.id}`)}
              >
                {/* Decorative grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                  viewBox="0 0 430 520"
                  preserveAspectRatio="none"
                >
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1={idx * 60 - 200}
                      y1={-100}
                      x2={idx * 60 + 400}
                      y2={620}
                      stroke="white"
                      strokeWidth="1"
                    />
                  ))}
                </svg>

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between text-white">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-80">
                    0{index + 1} · {project.year}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-sm font-bold">
                    ↗
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                  <p className="mt-2 text-white/85 text-sm leading-snug max-w-[85%]">
                    {project.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center card glow */}
                {isCenter && (
                  <div className="absolute inset-0 bg-white/5 pointer-events-none rounded-[28px]" />
                )}
              </article>
            );
          })}

          {/* Pagination indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-10 bg-ink" : "w-4 bg-ink/20"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
            <span className="ml-4 font-mono text-xs text-ink/50">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Carousel - Three cards stack */}
      <div className="md:hidden">
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "90vw",
            height: "460px",
            overflow: "visible",
          }}
        >
          {visibleCards.map(({ project, position, index }) => {
            const style = getCardStyle(position, true);
            const isCenter = position === "center";

            return (
              <article
                key={`${project.id}-${position}`}
                className="absolute top-1/2 left-1/2 rounded-[24px] overflow-hidden cursor-pointer"
                style={{
                  ...style,
                  background: project.coverGradient,
                  transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease",
                }}
                onClick={() => navigate(`/works/${project.id}`)}
              >
                {/* Decorative grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                  viewBox="0 0 320 400"
                  preserveAspectRatio="none"
                >
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <line
                      key={idx}
                      x1={idx * 60 - 200}
                      y1={-100}
                      x2={idx * 60 + 400}
                      y2={500}
                      stroke="white"
                      strokeWidth="1"
                    />
                  ))}
                </svg>

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex items-start justify-between text-white">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-80">
                    0{index + 1} · {project.year}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-sm font-bold">
                    ↗
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-display text-xl leading-tight">{project.title}</h3>
                  <p className="mt-2 text-white/85 text-xs leading-snug max-w-[85%]">
                    {project.subtitle}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-white/15 backdrop-blur border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}

          {/* Mobile pagination */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-8 bg-ink" : "w-3 bg-ink/20"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
