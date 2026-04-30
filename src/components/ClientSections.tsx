"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* Site logo: the speech-bubble glyph used in the browser favicon.
 * `behavior` toggles motion personas — geometry stays in sync with /public/glyph.svg
 * for static and header/hero personas; "success" softens brows + flips the frown
 * to a gentle smile to read as relief. CSS keyframes live in globals.css under
 * `.wordmark-glyph--*` and respect prefers-reduced-motion. */
export function Wordmark({
  size = "md",
  color = "ink",
  behavior = "static",
}: {
  size?: "sm" | "md" | "lg";
  color?: "ink" | "paper";
  behavior?: "static" | "header" | "hero" | "success";
}) {
  const glyphSize = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10 md:h-12 md:w-12",
  } as const;
  const bubbleFill = color === "paper" ? "#faf6ef" : "#2d4a3e";
  const accent = "#c08a3e";

  const relieved = behavior === "success";
  const browLeft = relieved ? "M13.5 18 L20 19" : "M13.5 16 L20 20";
  const browRight = relieved ? "M34.5 18 L28 19" : "M34.5 16 L28 20";
  const mouth = relieved
    ? "M18.5 30 Q24 33.5 29.5 30"
    : "M18.5 32 Q24 28 29.5 32";
  const eyeRadius = relieved ? 2 : 1.8;

  return (
    <span className={`wordmark-glyph wordmark-glyph--${behavior} inline-flex items-center`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={glyphSize[size]}
        aria-hidden="true"
      >
        <path
          className="wm-bubble"
          d="M24 5.5c10.493 0 19 7.387 19 16.5 0 9.113-8.507 16.5-19 16.5-1.866 0-3.668-.234-5.372-.67L9.6 42.5l2.658-8.02C8.136 31.44 5 26.98 5 22 5 12.887 13.507 5.5 24 5.5Z"
          fill={bubbleFill}
        />
        <path className="wm-brow wm-brow--l" d={browLeft} stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
        <path className="wm-brow wm-brow--r" d={browRight} stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
        <circle className="wm-eye wm-eye--l" cx="18" cy="24" r={eyeRadius} fill={accent} />
        <circle className="wm-eye wm-eye--r" cx="30" cy="24" r={eyeRadius} fill={accent} />
        <path
          className="wm-mouth"
          d={mouth}
          stroke={accent}
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "header-blur bg-paper/85 border-b border-rule shadow-[0_1px_0_rgba(31,26,20,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="shrink-0" aria-label="I'm Frustrated dot Org — home">
          <Wordmark size="md" behavior="header" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[0.9rem] font-medium text-muted-warm">
          <a href="#mission" className="hover:text-forest transition-colors duration-300">
            What We Do
          </a>
          <a href="#how-it-works" className="hover:text-forest transition-colors duration-300">
            How It Works
          </a>
          <Link href="/free-tools" className="hover:text-forest transition-colors duration-300">
            Free Tools
          </Link>
          <a href="#testimonials" className="hover:text-forest transition-colors duration-300">
            Testimonials
          </a>
        </nav>

        <a
          href="mailto:info@imfrustrated.org"
          aria-label="Email info@imfrustrated.org"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-forest text-paper text-[0.85rem] font-medium rounded-full hover:bg-forest-deep transition-colors duration-300"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="hidden sm:inline">Email Us</span>
        </a>
      </div>
    </header>
  );
}

export function FadeInSection({
  children,
  className,
  threshold,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, visible } = useInView(threshold);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className ?? ""}`}
      data-visible={visible}
    >
      {children}
    </div>
  );
}

/* Hero atmosphere — oversized glyph at low opacity drifting behind the homepage hero,
 * breathes (~2.5px max) toward the cursor. Touch / no-cursor / reduced-motion = still. */
export function HeroAtmosphere() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf: number | null = null;
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;

    function loop() {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      const el = svgRef.current;
      if (el) {
        el.style.setProperty("--hero-cursor-x", currentX.toFixed(2) + "px");
        el.style.setProperty("--hero-cursor-y", currentY.toFixed(2) + "px");
      }
      if (
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }

    function onMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = nx * 2.5;
      targetY = ny * 2.5;
      if (!raf) raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 48 48" fill="none">
        <path
          d="M24 5.5c10.493 0 19 7.387 19 16.5 0 9.113-8.507 16.5-19 16.5-1.866 0-3.668-.234-5.372-.67L9.6 42.5l2.658-8.02C8.136 31.44 5 26.98 5 22 5 12.887 13.507 5.5 24 5.5Z"
          fill="#2d4a3e"
          opacity="0.035"
        />
        <path d="M13.5 16 L20 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" opacity="0.07" />
        <path d="M34.5 16 L28 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" opacity="0.07" />
        <circle cx="18" cy="24" r="1.8" fill="#c08a3e" opacity="0.07" />
        <circle cx="30" cy="24" r="1.8" fill="#c08a3e" opacity="0.07" />
        <path
          d="M18.5 32 Q24 28 29.5 32"
          stroke="#c08a3e"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.07"
        />
      </svg>
    </div>
  );
}

export function StaggeredCards({
  children,
  threshold,
}: {
  children: ReactNode[];
  threshold?: number;
}) {
  const { ref, visible } = useInView(threshold);
  return (
    <div ref={ref}>
      {children.map((child, i) => (
        <div
          key={i}
          className={`transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: visible ? `${200 + i * 150}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
