import { resume } from "../data/resume";
import { Mail, MapPin, Clipboard, Check, Phone } from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    // 使用 fallback 方案，兼容更多环境
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
    <main className="pt-28 md:pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="animate-fade-in-up">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50">· CURRICULUM VITAE</div>
        <h1 className="font-display text-5xl md:text-8xl mt-4 leading-[0.95]">
          {resume.name}
          <span className="italic text-ink/40"> · </span>
        </h1>
        <p className="mt-3 text-2xl md:text-3xl font-display italic text-ink/80">
          {resume.title}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-ink/70 text-sm">
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            {resume.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {resume.location}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-10 mt-16">
        {/* Left column */}
        <div className="md:col-span-2 space-y-12">
          <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-4">ABOUT</h2>
            <p className="mt-2 text-base md:text-lg leading-relaxed text-ink/80">
              {resume.summary}
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-5">
              Skills
            </h2>
            <div className="space-y-4">
              {resume.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-ink text-sm font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-ink/50">{s.level}</span>
                  </div>
                  <div className="h-1 bg-ink/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-softpink rounded-full transition-all duration-[1200ms]"
                      style={{
                        width: `${s.level}%`,
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-5">
              Education
            </h2>
            {resume.education.map((e) => (
              <div key={e.school} className="mb-4">
                <div className="font-display text-xl">{e.school}</div>
                <div className="text-ink/70 text-sm mt-1">{e.degree}</div>
                <div className="font-mono text-xs text-ink/50 mt-1">{e.period}</div>
              </div>
            ))}
          </section>
        </div>

        {/* Right column - experience timeline */}
        <div className="md:col-span-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-6">EXPERIENCE</h2>
          <div className="relative pl-6">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15" />
            {resume.experience.map((exp, i) => (
              <div key={exp.company} className="relative mb-10">
                <span className="absolute -left-[22px] top-2 w-3.5 h-3.5 rounded-full bg-cream border-2 border-ink" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl md:text-3xl">{exp.role}</h3>
                  <span className="font-mono text-xs text-ink/50">{exp.period}</span>
                </div>
                <div className="text-accent font-medium mt-1">{exp.company}</div>
                <p className="mt-3 text-ink/75 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
                {i < resume.experience.length - 1 && (
                  <div className="mt-2 text-4xl font-display italic text-ink/10 leading-none">·</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-[28px] bg-ink text-cream p-8 md:p-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(240,124,76,0.4) 0%, transparent 50%)",
          }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            想合作？<span className="italic">来聊聊吧。</span>
          </h2>
          <p className="mt-4 text-cream/70 max-w-lg">
            不论是产品界面、品牌视觉、还是一场临时头脑风暴 — 我都乐于参与。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
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
          </div>
        </div>
      </div>
    </main>
  );
}