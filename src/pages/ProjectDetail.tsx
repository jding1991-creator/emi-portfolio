import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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

  const projectIndex = projects.findIndex((p) => p.id === id);

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
          className="relative w-full rounded-[28px] overflow-hidden"
          style={{ aspectRatio: "21 / 7", background: project.coverGradient }}
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

          <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-start justify-between text-white">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-80">
              0{projectIndex + 1} · {project.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-white/85 text-base md:text-lg max-w-xl leading-snug">
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
                {section.hasImage && (
                  <div className="mt-8 w-full aspect-video rounded-[16px] bg-gradient-to-br from-softpink/50 via-accent/30 to-softyellow/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-ink/40 tracking-wider uppercase">
                      Image Placeholder
                    </span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
