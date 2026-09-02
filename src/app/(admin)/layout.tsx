"use client";

import { useState } from "react";
import AdminSidebar from "@/features/admin/components/AdminSidebar";
import AdminTopbar from "@/features/admin/components/AdminTopbar";
import "../admin.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="admin-layout__overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`admin-layout__sidebar ${mobileMenuOpen ? "admin-layout__sidebar--open" : ""}`}>
        <AdminSidebar />
      </div>

      {/* Main area */}
      <div className="admin-layout__main">
        <AdminTopbar
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          isMobileMenuOpen={mobileMenuOpen}
        />
        <main className="admin-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
}
