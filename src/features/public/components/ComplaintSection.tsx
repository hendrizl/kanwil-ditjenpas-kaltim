"use client";

import { useRef } from "react";
import Image from "next/image";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function ComplaintSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section
      id="informasi"
      ref={sectionRef}
      className={`section-padding ${isVisible ? "section-visible" : ""}`}
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container">
        <div className="scroll-hidden" style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-label" style={{ fontStyle: "italic", textAlign: "center" }}>
            Layanan Pengaduan
          </p>
          <h2 className="section-title" style={{ color: "var(--color-primary-navy)", textAlign: "center" }}>
            Layanan Pengaduan
          </h2>
        </div>

        <div className="complaint-grid">
          <div className="scroll-hidden complaint-card">
            <Image
              src="/assets/logo_lapor.png"
              alt="LAPOR!"
              width={180}
              height={54}
              style={{ objectFit: "contain", height: "auto" }}
            />
            <p className="complaint-card-text">
              Layanan Aspirasi dan
              <br />
              Pengaduan Online Rakyat
            </p>
          </div>

          <div className="scroll-hidden complaint-card">
            <Image
              src="/assets/logo_wbs.png"
              alt="WBS - Whistleblowing System"
              width={90}
              height={77}
              style={{ objectFit: "contain", height: "auto" }}
            />
            <p className="complaint-card-text">
              Whistleblowing System
              <br />
              Kemenimipas
            </p>
          </div>

          <div className="scroll-hidden complaint-card">
            <Image
              src="/assets/logo_wa.png"
              alt="WhatsApp"
              width={80}
              height={80}
              style={{ objectFit: "contain", height: "auto" }}
            />
            <p className="complaint-card-text">
              WhatsApp Pengaduan
              <br />
              Kanwil Ditjenpas Kaltim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
