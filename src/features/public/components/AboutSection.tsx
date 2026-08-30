"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import useScrollReveal from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className={`section-padding ${isVisible ? "section-visible" : ""}`}
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container about-grid">
        {/* Header */}
        <div className="scroll-hidden about-header">
          <p className="section-label">Tentang Kami</p>
          <h2 className="section-title" style={{ color: "var(--color-primary-navy)" }}>
            Sejarah Kanwil Ditjenpas
            <br />
            Kaltim
          </h2>
        </div>

        {/* Left Content */}
        <div className="scroll-hidden about-text">

          <p className="body-text">
            Kantor Wilayah Direktorat Jenderal Pemasyarakatan Kalimantan Timur
            merupakan instansi vertikal di daerah yang berada di bawah
            Direktorat Jenderal Pemasyarakatan yang merupakan bagian dari
            Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia.
            Keberadaan kantor wilayah ini merupakan bagian dari upaya pemerintah
            dalam menyelenggarakan sistem pemasyarakatan yang efektif,
            terkoordinasi, dan sesuai dengan kebijakan nasional di bidang
            pemasyarakatan.
          </p>

          {/* <p className="body-text">
            Dalam menjalankan tugas dan fungsinya, Kantor Wilayah Direktorat
            Jenderal Pemasyarakatan Kalimantan Timur memiliki peran strategis
            dalam pembinaan, pengamanan, serta peningkatan kualitas pelayanan
            pemasyarakatan di wilayah Kalimantan Timur. Melalui berbagai program
            pembinaan dan pengawasan, kantor wilayah ini terus berupaya
            mewujudkan sistem pemasyarakatan yang humanis dan berkeadilan.
          </p> */}

          <Link href="/tentang" className="btn-gold">
            Lihat Selengkapnya &gt;
          </Link>
        </div>

        {/* Right - Profil Card */}
        <div className="scroll-hidden about-card-wrapper">
          <div className="about-card">
            <div className="about-card-logo">
              <Image
                src="/kanwil-ditjenpas-kaltim/assets/logo_pas.png"
                alt="Logo Pemasyarakatan"
                width={220}
                height={220}
                style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }}
              />
            </div>

            <div className="about-card-info">
              <h3
                style={{
                  fontSize: "var(--font-18)",
                  fontWeight: 700,
                  color: "#E8C84A",
                  marginBottom: "4px",
                }}
              >
                Nama Kepala Kantor Wilayah
              </h3>
              <p
                style={{
                  fontSize: "var(--font-16)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                Kepala Kantor Wilayah
              </p>
              <p
                style={{
                  fontSize: "var(--font-14)",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.5,
                }}
              >
                Direktorat Jenderal Pemasyarakatan <br />
                Kalimantan Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
