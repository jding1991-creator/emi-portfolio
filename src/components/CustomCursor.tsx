import { useEffect, useState, useCallback } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInHero, setIsInHero] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    const heroSection = document.querySelector('section.gradient-mesh');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const isInside = e.clientX >= rect.left && 
                       e.clientX <= rect.right && 
                       e.clientY >= rect.top && 
                       e.clientY <= rect.bottom;
      setIsInHero(isInside);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop && isInHero) {
      document.body.style.cursor = 'none';
      setIsVisible(true);
    } else {
      document.body.style.cursor = 'default';
      setIsVisible(false);
    }
  }, [isInHero]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-200"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {/* + Icon */}
      <div 
        className="absolute"
        style={{ marginTop: '-28px' }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
          className="text-accent"
        >
          <line 
            x1="12" 
            y1="4" 
            x2="12" 
            y2="20" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <line 
            x1="4" 
            y1="12" 
            x2="20" 
            y2="12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* Text */}
      <div 
        className="absolute whitespace-nowrap"
        style={{
          marginTop: '-4px',
          fontFamily: "'Instrument Serif', serif",
          fontSize: '1rem',
          fontWeight: 400,
          fontStyle: 'normal',
          color: '#1A1A1A',
          background: 'linear-gradient(to right, #EDB4A0, #F6F1EC)',
          padding: '8px 24px',
          borderRadius: '9999px',
        }}
      >
        Welcome to Emi's Design World
      </div>
    </div>
  );
}