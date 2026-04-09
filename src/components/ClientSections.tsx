"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

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
          ? "header-blur bg-warm-white/80 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-serif text-lg md:text-xl font-semibold text-charcoal tracking-tight"
        >
          I&rsquo;m Frustrated{" "}
          <Image src="/logo.svg" alt="I'm Frustrated dot Org logo" width={28} height={28} className="w-7 h-7 inline-block align-middle" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#mission" className="hover:text-coral transition-colors duration-300">
            What We Do
          </a>
          <a href="#how-it-works" className="hover:text-coral transition-colors duration-300">
            How It Works
          </a>
          <a href="#testimonials" className="hover:text-coral transition-colors duration-300">
            Testimonials
          </a>
        </nav>

        <a
          href="mailto:info@imfrustrated.org"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-coral text-white text-sm font-medium rounded-full hover:bg-coral-dark transition-colors duration-300"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Email Us
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
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className ?? ""}`}
      data-visible={visible}
    >
      {children}
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
