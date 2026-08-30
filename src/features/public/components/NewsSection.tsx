"use client";

import { useRef } from "react";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

type NewsItem = {
  meta: string;
  title: string;
  excerpt: string;
  image?: string;
};

const NEWS_DATA: NewsItem[] = [
  {
    meta: "Berita Wilayah",
    title: "Penguatan layanan pemasyarakatan di Kalimantan Timur",
    excerpt:
      "Kanwil Ditjenpas Kalimantan Timur terus memperkuat koordinasi layanan, pembinaan, dan pengawasan pada satuan kerja pemasyarakatan.",
    image: "/kanwil-ditjenpas-kaltim/assets/-.jpeg",
  },
  {
    meta: "Pembinaan",
    title: "Program pembinaan mendukung reintegrasi sosial warga binaan",
    excerpt:
      "Kegiatan pembinaan diarahkan untuk meningkatkan kemandirian, disiplin, dan kesiapan kembali ke masyarakat.",
  },
  {
    meta: "Layanan Publik",
    title: "Akses informasi publik dan pengaduan dibuat lebih mudah",
    excerpt:
      "Masyarakat dapat mengakses kanal informasi, aspirasi, dan pengaduan melalui layanan resmi yang tersedia.",
  },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const scrollNews = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".news-card") as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="berita"
      ref={sectionRef}
      className={`section-padding ${isVisible ? "section-visible" : ""}`}
      style={{
        position: "relative",
        backgroundColor: "#082D4B",
        overflow: "hidden",
      }}
    >
      {/* Dotted pattern background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="scroll-hidden" style={{ marginBottom: "48px" }}>
          <p className="news-section-label">
            Berita
          </p>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Kegiatan Kantor Wilayah
          </h2>
        </div>

        <div className="news-grid" ref={scrollRef}>
          {NEWS_DATA.map((news) => (
            <article
              key={news.title}
              className="scroll-hidden news-card"
            >
              <div className="news-card-img">
                <Image
                  src={news.image ?? "/kanwil-ditjenpas-kaltim/assets/logo_pas_outline.png"}
                  alt={news.image ? news.title : ""}
                  width={news.image ? 640 : 80}
                  height={news.image ? 360 : 80}
                  className={news.image ? "news-card-photo" : "news-card-logo"}
                />
              </div>

              <div className="news-card-content">
                <span className="news-date-badge">{news.meta}</span>
                <h3 className="news-card-title">{news.title}</h3>
                <p className="news-card-excerpt">{news.excerpt}</p>
                <a href="#berita" className="btn-gold-sm">
                  Lihat Selengkapnya &gt;
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Buttons (visible on tablet/mobile) */}
        <div className="news-nav-buttons">
          <button
            className="news-nav-btn"
            onClick={() => scrollNews("left")}
            aria-label="Sebelumnya"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="news-nav-btn"
            onClick={() => scrollNews("right")}
            aria-label="Selanjutnya"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
