import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <nav
        className={`flex items-center justify-between px-6 md:px-12 py-5 ${
          isScrolled ? "navbar-scrolled" : "navbar"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl md:text-[1.6rem] tracking-tight group"
        >
          <span className="relative inline-block w-5 h-5">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-softpink animate-pulse-soft" />
            <span className="absolute inset-[3px] rounded-full bg-cream" />
          </span>
          <span className="text-ink group-hover:italic transition-all">
            Elimi<span className="italic">Design</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <NavLink
            to="/works"
            className={({ isActive }) =>
              `btn-pill ${isActive ? "active" : ""}`
            }
          >
            我的作品
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `btn-pill ${isActive ? "active" : ""}`
            }
          >
            我的简历
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
