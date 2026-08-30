"use client";

import { useRef } from "react";
import Image from "next/image";

import useScrollReveal from "@/hooks/useScrollReveal";

const UPT_LIST = [
  "Lapas Kelas IIA Samarinda",
  "Lapas Kelas IIB Balikpapan",
  "Lapas Kelas IIB Tenggarong",
  "Lapas Kelas IIB Bontang",
  "Lapas Kelas IIB Tanah Grogot",
  "Lapas Narkotika Kelas IIA Samarinda",
  "Rutan Kelas IIA Samarinda",
  "Rutan Kelas IIB Balikpapan",
  "Rutan Kelas IIB Sangatta",
  "Rutan Kelas IIB Tanjung Redeb",
  "Bapas Kelas II Samarinda",
  "Bapas Kelas II Balikpapan",
  "LPKA Kelas II Samarinda",
  "Rupbasan Kelas I Samarinda",
  "Rupbasan Kelas I Balikpapan",
  "Cabang Rutan Tanjung Selor",
];

export default function UPTSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section
      id="upt"
      ref={sectionRef}
      className={`section-padding ${isVisible ? "section-visible" : ""}`}
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="upt-grid">
          {/* Header */}
          <div className="scroll-hidden upt-header">
            <p className="section-label">Unit Pelaksana Teknis</p>
            <h2 className="section-title" style={{ color: "var(--color-primary-navy)" }}>
              Peta Wilayah Kerja
            </h2>
          </div>

          <div className="scroll-hidden upt-text">
            <p className="body-text">
              Kantor Wilayah Direktorat Jenderal Pemasyarakatan Kalimantan Timur
              membawahi 16 Unit Pelaksana Teknis yang tersebar di seluruh wilayah
              Provinsi Kalimantan Timur. Unit-unit ini meliputi Lembaga
              Pemasyarakatan (Lapas), Rumah Tahanan Negara (Rutan), Balai
              Pemasyarakatan (Bapas), Lembaga Pembinaan Khusus Anak (LPKA), dan
              Rumah Penyimpanan Benda Sitaan Negara (Rupbasan).
            </p>
            <a href="#" className="btn-gold">
              Lihat Selengkapnya &gt;
            </a>

            {/* <div className="upt-list">
              <p className="upt-list-title">Unit pelaksana teknis wilayah</p>
              <div className="upt-list-grid">
                {UPT_LIST.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div> */}
          </div>

          <div className="scroll-hidden upt-map">
            <Image
              src="/kanwil-ditjenpas-kaltim/assets/maps.png"
              alt="Peta Wilayah Kerja Kanwil Ditjenpas Kaltim"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
