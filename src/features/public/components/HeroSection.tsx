"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
const SLIDES: string[] = ["/kanwil-ditjenpas-kaltim/assets/banner_1.png", "/kanwil-ditjenpas-kaltim/assets/banner_2.png", "/kanwil-ditjenpas-kaltim/assets/Banner_3.png"];
const SLIDE_DURATION = 5000;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Parallax scroll effect on active slide
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const imgs = sectionRef.current.querySelectorAll(
        ".hero-slide-img"
      ) as NodeListOf<HTMLElement>;
      imgs.forEach((img) => {
        img.style.transform = `translateY(${scrollY * 0.25}px) scale(1.1)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startTimer();
  };

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="hero-section"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${currentSlide === i ? "hero-slide-active" : ""}`}
        >
          <Image
            src={slide}
            alt={`Banner ${i + 1}`}
            fill
            priority={i === 0}
            className="hero-slide-img"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: "scale(1.1)",
            }}
          />
        </div>
      ))}

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="animate-fade-in-up hero-greeting">
          Halo, Selamat datang
        </p>

        <h1 className="animate-fade-in-up delay-100 hero-title" style={{ maxWidth: "100%", fontSize: "clamp(1.5rem, 3.5vw, 44px)" }}>
          KANTOR WILAYAH
          <br />
          DIREKTORAT JENDERAL PEMASYARAKATAN
          <br />
          KALIMANTAN TIMUR
        </h1>

        <p className="animate-fade-in-up delay-200 hero-tagline">
          Bergerak PRIMA, Pelayanan Luar Biasa
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 hero-cta-row">
          <Link
            href="/upt"
            className="hero-btn-primary"
          >
            Wilayah Kerja
          </Link>
          <Link
            href="/informasi"
            className="hero-btn-outline"
          >
            Info Layanan
          </Link>
        </div>
      </div>

      <div className="hero-indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={currentSlide === i ? "true" : undefined}
            className={`hero-indicator ${currentSlide === i ? "hero-indicator-active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
