"use client";

import { useState } from "react";
import {
  Settings,
  Save,
  Globe,
  Bell,
  Lock,
  User,
  Shield,
  CheckCircle2,
} from "lucide-react";

export default function AdminPengaturanPage() {
  const [activeTab, setActiveTab] = useState("umum");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const [settings, setSettings] = useState({
    siteName: "Kanwil Ditjenpas Kalimantan Timur",
    siteUrl: "https://kaltim.ditjenpas.go.id",
    contactEmail: "admin@kaltim.ditjenpas.go.id",
    maintenanceMode: false,
    publicRegistration: false,
    emailNotifications: true,
  });

  const handleSimpan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage("");
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage("Pengaturan berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    }, 1000);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Pengaturan Sistem</h1>
          <p className="admin-page-subtitle">
            Konfigurasi preferensi dan pengaturan global website
          </p>
        </div>
        {saveMessage && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#16a34a", backgroundColor: "#dcfce7", padding: "8px 16px", borderRadius: "8px", fontWeight: 500 }}>
            <CheckCircle2 size={18} />
            {saveMessage}
          </div>
        )}
      </div>

      <div className="admin-layout-grid" style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "24px" }}>
        {/* Sidebar Tabs */}
        <div className="admin-card" style={{ height: "fit-content" }}>
          <div className="admin-sidebar__menu" style={{ padding: "12px" }}>
            <button
              className={`admin-sidebar__link ${activeTab === "umum" ? "admin-sidebar__link--active" : ""}`}
              onClick={() => setActiveTab("umum")}
              style={{ width: "100%", justifyContent: "flex-start", background: "none", border: "none" }}
            >
              <Globe size={18} className="admin-sidebar__icon" />
              <span className="admin-sidebar__label">Umum</span>
            </button>
            <button
              className={`admin-sidebar__link ${activeTab === "akun" ? "admin-sidebar__link--active" : ""}`}
              onClick={() => setActiveTab("akun")}
              style={{ width: "100%", justifyContent: "flex-start", background: "none", border: "none" }}
            >
              <User size={18} className="admin-sidebar__icon" />
              <span className="admin-sidebar__label">Akun Admin</span>
            </button>
            <button
              className={`admin-sidebar__link ${activeTab === "keamanan" ? "admin-sidebar__link--active" : ""}`}
              onClick={() => setActiveTab("keamanan")}
              style={{ width: "100%", justifyContent: "flex-start", background: "none", border: "none" }}
            >
              <Shield size={18} className="admin-sidebar__icon" />
              <span className="admin-sidebar__label">Keamanan</span>
            </button>
            <button
              className={`admin-sidebar__link ${activeTab === "notifikasi" ? "admin-sidebar__link--active" : ""}`}
              onClick={() => setActiveTab("notifikasi")}
              style={{ width: "100%", justifyContent: "flex-start", background: "none", border: "none" }}
            >
              <Bell size={18} className="admin-sidebar__icon" />
              <span className="admin-sidebar__label">Notifikasi</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="admin-card">
          <div className="admin-card__header" style={{ borderBottom: "1px solid #e2e8f0" }}>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "#0f172a", textTransform: "capitalize" }}>
              Pengaturan {activeTab}
            </h3>
          </div>
          <div className="admin-card__body" style={{ padding: "32px" }}>
            
            {/* TAB UMUM */}
            {activeTab === "umum" && (
              <form className="admin-form" onSubmit={handleSimpan}>
                <div className="admin-form__group">
                  <label className="admin-form__label">Nama Website</label>
                  <input 
                    type="text" 
                    className="admin-form__input" 
                    value={settings.siteName}
                    onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                  />
                  <p className="admin-form__hint">Nama ini akan muncul di title tag browser dan header situs.</p>
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">URL Utama</label>
                  <input 
                    type="url" 
                    className="admin-form__input" 
                    value={settings.siteUrl}
                    onChange={(e) => setSettings({...settings, siteUrl: e.target.value})}
                  />
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Email Kontak Publik</label>
                  <input 
                    type="email" 
                    className="admin-form__input" 
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                  />
                </div>

                <div className="admin-form__group" style={{ marginTop: "32px", borderTop: "1px solid #e2e8f0", paddingTop: "24px" }}>
                  <label className="admin-form__label" style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                    <input 
                      type="checkbox" 
                      style={{ width: "18px", height: "18px", accentColor: "#00223D" }} 
                      checked={settings.maintenanceMode}
                      onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                    />
                    <div>
                      <div style={{ fontWeight: 600, color: "#0f172a" }}>Mode Perbaikan (Maintenance Mode)</div>
                      <div style={{ fontWeight: 400, color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
                        Aktifkan ini untuk menutup akses publik sementara waktu (hanya admin yang bisa login).
                      </div>
                    </div>
                  </label>
                </div>

                <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" className="admin-btn admin-btn--primary" disabled={isSaving}>
                    <Save size={18} />
                    {isSaving ? "Menyimpan..." : "Simpan Pengaturan"}
                  </button>
                </div>
              </form>
            )}

            {/* TAB AKUN */}
            {activeTab === "akun" && (
              <form className="admin-form" onSubmit={handleSimpan}>
                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Nama Lengkap</label>
                    <input type="text" className="admin-form__input" defaultValue="Admin Super" />
                  </div>
                  <div className="admin-form__group">
                    <label className="admin-form__label">Username</label>
                    <input type="text" className="admin-form__input" defaultValue="admin.kaltim" />
                  </div>
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Email</label>
                  <input type="email" className="admin-form__input" defaultValue="admin@kaltim.ditjenpas.go.id" />
                </div>

                <div className="admin-form__section" style={{ marginTop: "32px" }}>
                  <h3 className="admin-form__section-title">Ubah Password</h3>
                  <div className="admin-form__group">
                    <label className="admin-form__label">Password Saat Ini</label>
                    <input type="password" className="admin-form__input" />
                  </div>
                  <div className="admin-form__row">
                    <div className="admin-form__group">
                      <label className="admin-form__label">Password Baru</label>
                      <input type="password" className="admin-form__input" />
                    </div>
                    <div className="admin-form__group">
                      <label className="admin-form__label">Konfirmasi Password</label>
                      <input type="password" className="admin-form__input" />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" className="admin-btn admin-btn--primary" disabled={isSaving}>
                    <Save size={18} />
                    {isSaving ? "Menyimpan..." : "Perbarui Akun"}
                  </button>
                </div>
              </form>
            )}

            {/* TAB KEAMANAN & NOTIF (Placeholders) */}
            {(activeTab === "keamanan" || activeTab === "notifikasi") && (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
                <Settings size={48} style={{ opacity: 0.2, margin: "0 auto 16px" }} />
                <h3>Fitur Sedang Dikembangkan</h3>
                <p>Pengaturan {activeTab} akan tersedia pada versi rilis berikutnya.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
