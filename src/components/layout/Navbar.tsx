"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Unit Pelaksana Teknis", href: "/upt" },
  { label: "Berita", href: "/berita" },
  { label: "Informasi Publik", href: "/informasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div
        className={`navbar-inner ${scrolled ? "navbar-inner-scrolled" : ""}`}
      >
        <Link href="/" className="navbar-brand">
          <span className="navbar-logos" aria-hidden="true">
            <Image
              src="/assets/logo_imipas.png"
              alt=""
              width={38}
              height={38}
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/assets/logo_pas_outline.png"
              alt=""
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </span>
          <span className="navbar-brand-text">
            {"Kanwil Ditjenpas\nKalimantan Timur"}
          </span>
        </Link>

        <div className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`nav-mobile-btn ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="nav-mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-mobile-link ${pathname === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
