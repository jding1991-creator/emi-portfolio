import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import { projects } from "../data/projects";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

function Lightbox({
  images,
  title,
  initialIndex,
  onClose,
}: {
  images: string[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const count = images.length;

  const goTo = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(count - 1, next)));
  }, [count]);

  const prev = useCallback(() => goTo(index - 1), [index, goTo]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    const threshold = 50;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* 图片区域 - 单次只显示一张 */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-24 py-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={index}
          className="flex-1 w-full flex items-center justify-center animate-fade-in"
        >
          <img
            src={images[index]}
            alt={`${title} ${index + 1}`}
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
        </div>

        {/* 标题 + 计数 */}
        <div className="mt-6 flex flex-col items-center gap-3 pointer-events-none">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream/60">
            {title} · {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </div>
          {count > 1 && (
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-cream" : "w-1.5 bg-cream/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 控制按钮 - 放到 DOM 末尾确保在最上层 */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="关闭预览"
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center text-cream"
      >
        <X size={22} strokeWidth={2} />
      </button>

      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="上一张"
            className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center text-cream ${
              index === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="下一张"
            className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center text-cream ${
              index === count - 1 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </>
      )}
    </div>
  );
}

function ImageCarousel({
  count,
  images,
  title,
  setImageRef,
  onPreview,
}: {
  count: number;
  images?: string[];
  title: string;
  setImageRef: (el: HTMLDivElement | null) => void;
  onPreview: (images: string[], startIndex: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(count - 1, next)));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    const threshold = 50;
    if (delta > threshold) goTo(index - 1);
    else if (delta < -threshold) goTo(index + 1);
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const validImages = images && images.length > 0 ? images : [];

  return (
    <div
      ref={setImageRef}
      className="project-image-reveal aspect-video rounded-[16px] bg-gradient-to-br from-softpink/50 via-accent/30 to-softyellow/50 transition-transform duration-400 ease-out hover:scale-[1.02] overflow-hidden"
    >
      <div
        className="relative w-full h-full overflow-hidden cursor-zoom-in"
        onClick={() => {
          if (validImages.length > 0) onPreview(validImages, index);
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: count }).map((_, i) => {
            const imgSrc = images?.[i];
            return (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex items-center justify-center"
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={`${title} ${i + 1}`}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                ) : (
                  <span className="font-mono text-xs text-ink/40 tracking-wider uppercase">
                    IMAGE PLACEHOLDER {i + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                aria-label={`切换到第 ${i + 1} 张图片`}
                className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id: slug } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const imageObserverRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [preview, setPreview] = useState<{
    images: string[];
    title: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of project?.sections || []) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [project]);

  useEffect(() => {
    imageRefs.current = [];
    imageObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            imageObserverRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    return () => {
      imageObserverRef.current?.disconnect();
      imageObserverRef.current = null;
    };
  }, [project]);

  const setImageRef = (el: HTMLDivElement | null) => {
    if (el) {
      imageRefs.current.push(el);
      if (imageObserverRef.current) {
        imageObserverRef.current.observe(el);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!project) {
    return (
      <main className="pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-6xl">Project not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-8 btn-pill inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          返回
        </button>
      </main>
    );
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);

  return (
    <main className="pt-28 md:pt-32 pb-24">
      {/* 返回按钮 */}
      <div className="px-6 md:px-12 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 hover:text-ink transition-colors"
        >
          <span className="w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          返回
        </button>
      </div>

      {/* 项目封面 */}
      <div className="px-6 md:px-12 mb-12">
        <div
          className="relative w-full rounded-[28px] overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/7]"
          style={{ background: project.coverGradient }}
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

          <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex items-start justify-between text-white">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase opacity-80">
              {project.number ?? String(projectIndex + 1).padStart(2, "0")} · {project.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <h1 className="font-display text-2xl sm:text-3xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.15]">
              {project.title}
            </h1>
            <p className="mt-2 sm:mt-3 text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-snug">
              {project.subtitle}
            </p>
            <div className="mt-2 sm:mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] sm:text-[10px] font-medium px-2 sm:px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主内容区域 - 左侧目录 + 右侧内容 */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* 左侧目录导航 - 桌面端固定 */}
        <aside className="lg:w-[220px] lg:sticky lg:top-32 lg:self-start px-6 md:px-12 pb-8 lg:pb-0">
          {/* 移动端水平标签栏 */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-2">
              {project.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? "bg-ink text-cream"
                      : "bg-ink/5 text-ink/70 hover:bg-ink/10"
                  }`}
                >
                  {section.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          </div>

          {/* 桌面端垂直目录 */}
          <nav className="hidden lg:block">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-4">CONTENTS</h3>
            {project.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left py-3 text-[14px] font-medium tracking-wide whitespace-nowrap capitalize border-b border-ink/10 transition-colors ${
                  activeSection === section.id
                    ? "text-ink"
                    : "text-ink/50 hover:text-ink"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* 右侧滚动内容区 */}
        <div className="flex-1 px-6 md:px-12 lg:pl-10">
          <div className="space-y-20">
            {project.sections.map((section) => (
              <section
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="animate-fade-in-up"
              >
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4 text-ink/70 text-base md:text-lg leading-relaxed">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                {section.imageCount && section.imageCount > 0 && (
                  <div className="mt-8">
                    {section.imageCount === 1 ? (
                      <div
                        ref={setImageRef}
                        onClick={() => {
                          if (section.images?.[0]) {
                            setPreview({
                              images: section.images,
                              title: section.title,
                              index: 0,
                            });
                          }
                        }}
                        className="project-image-reveal aspect-video rounded-[16px] bg-gradient-to-br from-softpink/50 via-accent/30 to-softyellow/50 flex items-center justify-center transition-transform duration-400 ease-out hover:scale-[1.02] overflow-hidden cursor-zoom-in"
                      >
                        {section.images?.[0] ? (
                          <img
                            src={section.images[0]}
                            alt={section.title}
                            className="w-full h-full object-contain pointer-events-none"
                          />
                        ) : (
                          <span className="font-mono text-xs text-ink/40 tracking-wider uppercase">
                            IMAGE PLACEHOLDER
                          </span>
                        )}
                      </div>
                    ) : (
                      <ImageCarousel
                        count={section.imageCount}
                        images={section.images}
                        title={section.title}
                        setImageRef={setImageRef}
                        onPreview={(imgs, i) =>
                          setPreview({ images: imgs, title: section.title, index: i })
                        }
                      />
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>

      {preview && (
        <Lightbox
          images={preview.images}
          title={preview.title}
          initialIndex={preview.index}
          onClose={() => setPreview(null)}
        />
      )}
    </main>
  );
}
