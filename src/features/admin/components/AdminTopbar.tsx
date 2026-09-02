"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const breadcrumbMap: Record<string, string> = {
  admin: "Admin",
  dashboard: "Dashboard",
  berita: "Berita & Publikasi",
  upt: "Data UPT",
  pengaduan: "Pengaduan",
  layanan: "Layanan Publik",
  instansi: "Informasi Instansi",
  pengaturan: "Pengaturan",
};

interface AdminTopbarProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function AdminTopbar({
  onMobileMenuToggle,
  isMobileMenuOpen,
}: AdminTopbarProps) {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  // Generate breadcrumbs from pathname
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((seg, i) => ({
    label: breadcrumbMap[seg] || seg,
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <header className="admin-topbar">
      <div className="admin-topbar__left">
        {/* Mobile menu button */}
        <button
          className="admin-topbar__mobile-btn"
          onClick={onMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Breadcrumbs */}
        <nav className="admin-topbar__breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="admin-topbar__breadcrumb-item">
              {i > 0 && (
                <ChevronRight
                  size={14}
                  className="admin-topbar__breadcrumb-sep"
                />
              )}
              <span
                className={
                  crumb.isLast
                    ? "admin-topbar__breadcrumb--active"
                    : "admin-topbar__breadcrumb--muted"
                }
              >
                {crumb.label}
              </span>
            </span>
          ))}
        </nav>
      </div>

      <div className="admin-topbar__right">
        {/* Search */}
        <div className={`admin-topbar__search ${showSearch ? "admin-topbar__search--open" : ""}`}>
          <button
            className="admin-topbar__icon-btn"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          {showSearch && (
            <input
              className="admin-topbar__search-input"
              type="text"
              placeholder="Cari..."
              autoFocus
            />
          )}
        </div>

        {/* Notifications */}
        <button className="admin-topbar__icon-btn" aria-label="Notifications">
          <Bell size={18} />
          <span className="admin-topbar__badge">3</span>
        </button>

        {/* User avatar */}
        <div className="admin-topbar__user">
          <div className="admin-topbar__avatar">
            <span>A</span>
          </div>
          <div className="admin-topbar__user-info">
            <span className="admin-topbar__user-name">Admin</span>
            <span className="admin-topbar__user-role">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
