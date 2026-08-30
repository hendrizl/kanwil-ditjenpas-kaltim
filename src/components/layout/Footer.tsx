"use client";

import Image from "next/image";


const FOOTER_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Unit Pelaksana Teknis", href: "#upt" },
  { label: "Berita", href: "#berita" },
  { label: "Informasi Publik", href: "#informasi" },
];

function IconBuilding() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.59-3.06 19.3 19.3 0 0 1-6-6A19.72 19.72 0 0 1 2.17 4.18 2 2 0 0 1 4.16 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.68a16 16 0 0 0 6.23 6.23l1.24-1.24a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,4 12,13 2,4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Image
              src="/kanwil-ditjenpas-kaltim/assets/logo_imipas.png"
              alt="Logo IMIPAS"
              width={56}
              height={56}
              className="footer-logo"
              style={{ objectFit: "contain", height: "auto" }}
            />
            <Image
              src="/kanwil-ditjenpas-kaltim/assets/logo_pas_outline.png"
              alt="Logo PAS"
              width={64}
              height={64}
              className="footer-logo"
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
          <div>
            <p className="footer-brand-title">Kantor Wilayah</p>
            <p className="footer-brand-title">Direktorat Jenderal Pemasyarakatan</p>
            <p className="footer-brand-title">Kalimantan Timur</p>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <IconBuilding />
              <p>
                Jl. MT. Haryono No.22, Karang Anyar, Kec. Sungai
                Kunjang, Kota Samarinda, Kalimantan Timur 75127
              </p>
            </div>
            <div className="footer-contact-item">
              <IconPhone />
              <p>Kanal layanan dan pengaduan resmi</p>
            </div>
            <div className="footer-contact-item">
              <IconEmail />
              <p>kanwilditjenpaskalimantantimur@gmail.com</p>
            </div>
          </div>

          <div className="footer-socmed">
            <p className="footer-subtitle">Sosial Media</p>
            <Image
              src="/kanwil-ditjenpas-kaltim/assets/ic_sosmed.png"
              alt="Sosial Media"
              width={200}
              height={40}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-copyright">
          <p>
            Copyright &copy; 2026 Kantor Wilayah Direktorat Jenderal Pemasyarakatan
            Kalimantan Timur
          </p>
        </div>
      </div>
    </footer>
  );
}
