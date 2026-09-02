"use client";

import { useState } from "react";
import {
  Info,
  Save,
  Image as ImageIcon,
  Plus,
  Trash2,
  GripVertical,
  CheckCircle2,
} from "lucide-react";

type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  active: boolean;
};

const INITIAL_SLIDES: HeroSlide[] = [
  { id: 1, title: "Layanan Pemasyarakatan Berbasis HAM", subtitle: "Mewujudkan pelayanan prima bagi masyarakat dan Warga Binaan di wilayah Kalimantan Timur.", image: "/hero-1.jpg", active: true },
  { id: 2, title: "Zero Halinar di Seluruh UPT", subtitle: "Komitmen memberantas Handphone, Pungli, dan Narkoba di seluruh Lapas dan Rutan.", image: "/hero-2.jpg", active: true },
  { id: 3, title: "Program Pembinaan Kemandirian", subtitle: "Membekali WBP dengan keterampilan bersertifikat untuk bekal kembali ke masyarakat.", image: "/hero-3.jpg", active: false },
];

export default function AdminInstansiPage() {
  const [activeTab, setActiveTab] = useState("profil");
  const [slides, setSlides] = useState<HeroSlide[]>(INITIAL_SLIDES);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const [profilData, setProfilData] = useState({
    name: "Kanwil Kemenkumham Kalimantan Timur",
    division: "Divisi Pemasyarakatan",
    address: "Jl. Letjend MT. Haryono No.36, Samarinda, Kalimantan Timur 75124",
    phone: "(0541) 732352",
    email: "pas.kaltim@kemenkumham.go.id",
    history: "Sejarah Divisi Pemasyarakatan Kanwil Kemenkumham Kaltim bermula dari...",
  });

  const [visiMisi, setVisiMisi] = useState({
    tagline: "Bergerak PRIMA (Profesional, Responsif, Inovatif, Melayani, Akuntabel)",
    visi: "Masyarakat Memperoleh Kepastian Hukum.",
    misi: "Mewujudkan Peraturan Perundang-undangan yang Berkualitas; Mewujudkan Pelayanan Hukum yang Prima...",
  });

  const handleSimpan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage("");
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage("Perubahan berhasil disimpan!");
      setTimeout(() => setSaveMessage(""), 3000);
    }, 1000);
  };

  const handleToggleSlide = (id: number) => {
    setSlides(slides.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const handleDeleteSlide = (id: number) => {
    if (confirm("Hapus slide ini?")) {
      setSlides(slides.filter(s => s.id !== id));
    }
  };

  const handleAddSlide = () => {
    const newSlide: HeroSlide = {
      id: Date.now(),
      title: "Slide Baru",
      subtitle: "Deskripsi slide baru",
      image: "",
      active: true,
    };
    setSlides([...slides, newSlide]);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Informasi Instansi</h1>
          <p className="admin-page-subtitle">
            Kelola profil, sejarah, visi misi, dan banner utama website
          </p>
        </div>
        {saveMessage && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#16a34a", backgroundColor: "#dcfce7", padding: "8px 16px", borderRadius: "8px", fontWeight: 500 }}>
            <CheckCircle2 size={18} />
            {saveMessage}
          </div>
        )}
      </div>

      <div className="admin-card">
        <div className="admin-card__header" style={{ borderBottom: "1px solid #e2e8f0" }}>
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === "profil" ? "admin-tab--active" : ""}`}
              onClick={() => setActiveTab("profil")}
            >
              Profil & Sejarah
            </button>
            <button
              className={`admin-tab ${activeTab === "hero" ? "admin-tab--active" : ""}`}
              onClick={() => setActiveTab("hero")}
            >
              Hero Slider (Banner)
            </button>
            <button
              className={`admin-tab ${activeTab === "visimisi" ? "admin-tab--active" : ""}`}
              onClick={() => setActiveTab("visimisi")}
            >
              Visi & Misi
            </button>
          </div>
        </div>

        <div className="admin-card__body" style={{ padding: "32px" }}>
          {/* TAB PROFIL */}
          {activeTab === "profil" && (
            <form className="admin-form" onSubmit={handleSimpan}>
              <div className="admin-form__section">
                <h3 className="admin-form__section-title">Informasi Dasar</h3>
                
                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Nama Instansi</label>
                    <input 
                      type="text" 
                      className="admin-form__input" 
                      value={profilData.name}
                      onChange={(e) => setProfilData({...profilData, name: e.target.value})}
                    />
                  </div>
                  <div className="admin-form__group">
                    <label className="admin-form__label">Divisi</label>
                    <input 
                      type="text" 
                      className="admin-form__input" 
                      value={profilData.division}
                      onChange={(e) => setProfilData({...profilData, division: e.target.value})}
                    />
                  </div>
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Alamat Lengkap</label>
                  <textarea 
                    className="admin-form__input" 
                    rows={3} 
                    value={profilData.address}
                    onChange={(e) => setProfilData({...profilData, address: e.target.value})}
                  />
                </div>

                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Nomor Telepon</label>
                    <input 
                      type="text" 
                      className="admin-form__input" 
                      value={profilData.phone}
                      onChange={(e) => setProfilData({...profilData, phone: e.target.value})}
                    />
                  </div>
                  <div className="admin-form__group">
                    <label className="admin-form__label">Email Resmi</label>
                    <input 
                      type="email" 
                      className="admin-form__input" 
                      value={profilData.email}
                      onChange={(e) => setProfilData({...profilData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="admin-form__section" style={{ marginTop: "32px" }}>
                <h3 className="admin-form__section-title">Sejarah Instansi</h3>
                <div className="admin-form__group">
                  <label className="admin-form__label">Teks Sejarah</label>
                  <textarea 
                    className="admin-form__input" 
                    rows={8} 
                    value={profilData.history}
                    onChange={(e) => setProfilData({...profilData, history: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="admin-btn admin-btn--primary" disabled={isSaving}>
                  <Save size={18} />
                  {isSaving ? "Menyimpan..." : "Simpan Profil"}
                </button>
              </div>
            </form>
          )}

          {/* TAB HERO SLIDER */}
          {activeTab === "hero" && (
            <div className="admin-form">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h3 className="admin-form__section-title" style={{ margin: 0 }}>Daftar Slider Utama</h3>
                <button className="admin-btn admin-btn--outline" onClick={handleAddSlide}>
                  <Plus size={16} /> Tambah Slide
                </button>
              </div>

              <div className="admin-slide-list">
                {slides.map((slide, index) => (
                  <div key={slide.id} className="admin-slide-item" style={{ opacity: slide.active ? 1 : 0.6 }}>
                    <div className="admin-slide-item__drag">
                      <GripVertical size={20} color="#cbd5e1" />
                    </div>
                    
                    <div className="admin-slide-item__preview">
                      <div className="admin-slide-item__img-placeholder">
                        <ImageIcon size={24} color="#cbd5e1" />
                        <span>Upload Gambar</span>
                      </div>
                    </div>

                    <div className="admin-slide-item__info">
                      <div className="admin-form__group" style={{ marginBottom: "12px" }}>
                        <input 
                          type="text" 
                          className="admin-form__input" 
                          value={slide.title}
                          onChange={(e) => setSlides(slides.map(s => s.id === slide.id ? {...s, title: e.target.value} : s))}
                          style={{ fontWeight: 600 }}
                        />
                      </div>
                      <div className="admin-form__group" style={{ marginBottom: 0 }}>
                        <input 
                          type="text" 
                          className="admin-form__input" 
                          value={slide.subtitle}
                          onChange={(e) => setSlides(slides.map(s => s.id === slide.id ? {...s, subtitle: e.target.value} : s))}
                          style={{ fontSize: "13px" }}
                        />
                      </div>
                    </div>

                    <div className="admin-slide-item__actions">
                      <button 
                        className={`admin-toggle ${slide.active ? "admin-toggle--on" : "admin-toggle--off"}`}
                        onClick={() => handleToggleSlide(slide.id)}
                      >
                        {slide.active ? "Aktif" : "Nonaktif"}
                      </button>
                      <button className="admin-action-btn admin-action-btn--danger" onClick={() => handleDeleteSlide(slide.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                <button className="admin-btn admin-btn--primary" onClick={handleSimpan} disabled={isSaving}>
                  <Save size={18} />
                  {isSaving ? "Menyimpan..." : "Simpan Slider"}
                </button>
              </div>
            </div>
          )}

          {/* TAB VISI MISI */}
          {activeTab === "visimisi" && (
            <form className="admin-form" onSubmit={handleSimpan}>
              <div className="admin-form__group">
                <label className="admin-form__label">Slogan / Tagline</label>
                <input 
                  type="text" 
                  className="admin-form__input" 
                  value={visiMisi.tagline}
                  onChange={(e) => setVisiMisi({...visiMisi, tagline: e.target.value})}
                  style={{ fontWeight: 600 }}
                />
              </div>

              <div className="admin-form__group">
                <label className="admin-form__label">Visi</label>
                <textarea 
                  className="admin-form__input" 
                  rows={3} 
                  value={visiMisi.visi}
                  onChange={(e) => setVisiMisi({...visiMisi, visi: e.target.value})}
                />
              </div>

              <div className="admin-form__group">
                <label className="admin-form__label">Misi</label>
                <textarea 
                  className="admin-form__input" 
                  rows={8} 
                  value={visiMisi.misi}
                  onChange={(e) => setVisiMisi({...visiMisi, misi: e.target.value})}
                />
                <p className="admin-form__hint">Pisahkan tiap poin misi dengan enter/baris baru.</p>
              </div>

              <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="admin-btn admin-btn--primary" disabled={isSaving}>
                  <Save size={18} />
                  {isSaving ? "Menyimpan..." : "Simpan Visi Misi"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
