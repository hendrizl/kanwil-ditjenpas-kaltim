"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Building2,
  Info,
  Settings,
  LogOut,
  Globe,
  ChevronDown,
  ChevronRight,
  List,
  FolderTree,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Berita & Publikasi",
    icon: Newspaper,
    subItems: [
      { label: "Semua Berita", href: "/admin/berita", icon: List },
      { label: "Kategori", href: "/admin/berita/kategori", icon: FolderTree },
    ],
  },
  {
    label: "Data UPT",
    href: "/admin/upt",
    icon: Building2,
  },
  {
    label: "Layanan Publik",
    href: "/admin/layanan",
    icon: Globe,
  },
  {
    label: "Informasi Instansi",
    href: "/admin/instansi",
    icon: Info,
  },
  {
    label: "Pengaturan",
    href: "/admin/pengaturan",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  // State for sub-menu accordion
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    "Berita & Publikasi": true,
  });

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className="admin-sidebar">
      {/* Brand / Logo */}
      <div className="admin-sidebar__brand">
        <div className="admin-sidebar__logo">
          <Building2 size={24} />
        </div>
        <div className="admin-sidebar__brand-text">
          <span className="admin-sidebar__brand-title">Kanwil Ditjenpas</span>
          <span className="admin-sidebar__brand-subtitle">Kalimantan Timur</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="admin-sidebar__nav">
        <ul className="admin-sidebar__menu">
          {menuItems.map((item) => {
            const hasSub = !!item.subItems;
            let isActive = false;
            
            if (item.href) {
              isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            } else if (hasSub) {
              isActive = item.subItems!.some(
                (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/")
              );
            }

            const Icon = item.icon;
            const isOpen = openMenus[item.label];

            return (
              <li key={item.label}>
                {hasSub ? (
                  <button
                    className={`admin-sidebar__link ${isActive ? "admin-sidebar__link--active" : ""}`}
                    onClick={() => toggleMenu(item.label)}
                  >
                    <Icon size={20} className="admin-sidebar__icon" />
                    <span className="admin-sidebar__label">{item.label}</span>
                    {isOpen ? (
                      <ChevronDown size={16} className="admin-sidebar__chevron" style={{ marginLeft: "auto" }} />
                    ) : (
                      <ChevronRight size={16} className="admin-sidebar__chevron" style={{ marginLeft: "auto" }} />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={`admin-sidebar__link ${isActive ? "admin-sidebar__link--active" : ""}`}
                  >
                    <Icon size={20} className="admin-sidebar__icon" />
                    <span className="admin-sidebar__label">{item.label}</span>
                  </Link>
                )}

                {/* Submenu Items */}
                {hasSub && isOpen && (
                  <ul className="admin-sidebar__submenu">
                    {item.subItems!.map((sub) => {
                      // Fix: Exact match for parent pages to prevent false positives for child pages
                      const isSubActive =
                        sub.href === "/admin/berita"
                          ? pathname === "/admin/berita"
                          : pathname === sub.href || pathname.startsWith(sub.href + "/");
                      const SubIcon = sub.icon;
                      return (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => {
                              // Close dropdown when a submenu is clicked
                              setOpenMenus((prev) => ({
                                ...prev,
                                [item.label]: false,
                              }));
                            }}
                            className={`admin-sidebar__sublink ${
                              isSubActive ? "admin-sidebar__sublink--active" : ""
                            }`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              textDecoration: "none",
                              padding: "10px 16px 10px 44px",
                              borderRadius: "12px",
                              color: isSubActive ? "#fff" : "rgba(255, 255, 255, 0.5)",
                              backgroundColor: isSubActive ? "rgba(255, 255, 255, 0.05)" : "transparent",
                              marginBottom: "4px",
                            }}
                          >
                            <SubIcon size={16} />
                            <span style={{ fontSize: "13px", fontWeight: isSubActive ? 500 : 400 }}>{sub.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="admin-sidebar__footer">
        <button
          className="admin-sidebar__link"
          onClick={() => {
            // TODO: logout logic
          }}
        >
          <LogOut size={20} className="admin-sidebar__icon" />
          <span className="admin-sidebar__label">Keluar</span>
        </button>
      </div>
    </aside>
  );
}
