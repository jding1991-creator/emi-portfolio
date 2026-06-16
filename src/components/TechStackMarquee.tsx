const ITEMS = [
  "UI&UX Design",
  "Agentic Design",
  "AIGC",
  "Creative Design",
  "Animation Design",
];

export function TechStackMarquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="w-full overflow-hidden border-y border-ink/10 py-5 bg-cream/60 backdrop-blur-sm">
      <div className="flex gap-10 md:gap-16 whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-ink font-display text-2xl md:text-4xl italic"
          >
            {item}
            <span className="text-accent text-3xl md:text-4xl not-italic leading-none">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
