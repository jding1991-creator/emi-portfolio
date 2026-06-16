import { HeroArtwork } from "../components/HeroArtwork";
import { TechStackMarquee } from "../components/TechStackMarquee";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { CustomCursor } from "../components/CustomCursor";
import { ArrowUpRight, Clipboard, Check, Phone } from "lucide-react";
import { useState } from "react";
import { resume } from "../data/resume";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = resume.email;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <main className="pt-20">
      <CustomCursor />
      {/* HERO */}
      <section className="relative min-h-[90vh] gradient-mesh noise-overlay overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 animate-fade-in-up">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-5">· PORTFOLIO 2026</div>
            <h1 className="font-display text-[14vw] md:text-[9rem] leading-[0.9] tracking-tight text-ink">
              Make it
              <br />
              <span className="italic">
                happen.
                <span className="inline-block ml-3 w-3 h-3 rounded-full bg-accent animate-pulse-soft align-middle" />
              </span>
            </h1>
            <p className="mt-8 max-w-md text-ink/70 text-base md:text-lg leading-relaxed">共情、逻辑、审美。这3点底层能力令我坚信：好的设计一定是受众、受用且充满温度的。我是 Emi，专注打造成功商业化案例的产品设计师。</p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#works"
                className="btn-pill !bg-ink !text-cream hover:!bg-accent hover:!text-white transition-colors"
              >
                查看作品
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#about"
                className="btn-pill"
              >联系我</a>
            </div>
          </div>

          <div className="relative min-h-[440px] md:min-h-[520px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <HeroArtwork />
          </div>
        </div>

        <TechStackMarquee />
      </section>

      {/* WORKS */}
      <section id="works">
        <ProjectCarousel />
      </section>

      {/* ABOUT / CTA */}
      <section
        id="about"
        className="relative px-6 md:px-12 py-20 md:py-32 bg-ink text-cream overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(240,124,76,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(245,201,185,0.2) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-cream/50 mb-5">
            · Let's collaborate
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] mb-10">
            有一个想法？
            <br />
            <span className="italic">让我们一起实现它。</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream text-ink font-medium hover:bg-accent hover:text-white transition-colors"
              style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
            >
              +86 19921182156
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream text-ink font-medium hover:bg-accent hover:text-white transition-colors"
              style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}
            >
              {resume.email}
              <span className="relative">
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Clipboard className="w-4 h-4" />
                )}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs bg-ink text-cream rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {copied ? "已复制!" : "可复制"}
                </span>
              </span>
            </button>
            <span className="font-mono text-sm text-cream/60">Shanghai · Remote</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-ink/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/60">
          <div className="font-display text-lg text-ink">
            Elimi<span className="italic">Design</span>
          </div>
          <div className="font-mono text-xs">© 2026 Emi Ding · Crafted with care.</div>
        </div>
      </footer>
    </main>
  );
}
