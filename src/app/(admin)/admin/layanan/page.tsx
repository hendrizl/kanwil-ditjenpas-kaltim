"use client";

import { useState } from "react";
import {
  Globe,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Save,
  CheckCircle2,
  XCircle,
  ExternalLink,
} from "lucide-react";

type LayananItem = {
  id: number;
  name: string;
  description: string;
  category: "Layanan Masyarakat" | "WBP" | "Pengaduan" | "Sistem Informasi";
  url: string;
  isActive: boolean;
};

const INITIAL_LAYANAN: LayananItem[] = [
  { id: 1, name: "Sistem Database Pemasyarakatan (SDP)", description: "Integrasi data WBP dan manajemen lapas/rutan se-Indonesia.", category: "Sistem Informasi", url: "https://sdp.ditjenpas.go.id", isActive: true },
  { id: 2, name: "Layanan Kunjungan Online", description: "Pendaftaran kunjungan virtual/tatap muka bagi keluarga WBP.", category: "Layanan Masyarakat", url: "#", isActive: true },
  { id: 3, name: "E-Remisi & Integrasi", description: "Cek status pengusulan remisi, PB, CB, dan CMB secara transparan.", category: "WBP", url: "#", isActive: true },
  { id: 4, name: "LAPOR!", description: "Layanan Aspirasi dan Pengaduan Online Rakyat terintegrasi nasional.", category: "Pengaduan", url: "https://lapor.go.id", isActive: true },
  { id: 5, name: "Whistleblowing System (WBS)", description: "Pelaporan pelanggaran atau tindak pidana korupsi secara anonim.", category: "Pengaduan", url: "https://wbs.kemenkumham.go.id", isActive: true },
  { id: 6, name: "Informasi Kapasitas Hunian", description: "Data real-time tingkat hunian dan overcrowding UPT se-Kaltim.", category: "Sistem Informasi", url: "#", isActive: true },
  { id: 7, name: "Layanan Izin Penelitian", description: "Permohonan izin penelitian mahasiswa/umum di UPT Kaltim.", category: "Layanan Masyarakat", url: "#", isActive: false },
  { id: 8, name: "Layanan Pindah Pidana (WBP)", description: "Prosedur pengajuan pemindahan WBP antar Lapas/Rutan.", category: "WBP", url: "#", isActive: true },
  { id: 9, name: "Klinik Hukum & HAM", description: "Konsultasi hukum gratis bagi masyarakat kurang mampu.", category: "Layanan Masyarakat", url: "#", isActive: true },
  { id: 10, name: "Pusat Layanan Terpadu", description: "Informasi jam buka dan standar operasional layanan terpadu.", category: "Layanan Masyarakat", url: "#", isActive: true },
  { id: 11, name: "Sistem Penilaian Pembinaan Narapidana", description: "SPPN online untuk memantau perkembangan perilaku WBP.", category: "Sistem Informasi", url: "#", isActive: true },
  { id: 12, name: "Toko Karya WBP (E-Katalog)", description: "Katalog produk kerajinan tangan hasil karya Warga Binaan.", category: "Layanan Masyarakat", url: "#", isActive: true },
];

export default function AdminLayananPage() {
  const [layananData, setLayananData] = useState<LayananItem[]>(INITIAL_LAYANAN);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<LayananItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Layanan Masyarakat" as LayananItem["category"],
    url: "",
    isActive: true,
  });

  const categories = ["Semua", "Layanan Masyarakat", "WBP", "Pengaduan", "Sistem Informasi"];

  const filtered = layananData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus layanan ini?")) {
      setLayananData(layananData.filter(item => item.id !== id));
    }
  };

  const handleToggleStatus = (id: number) => {
    setLayananData(layananData.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const handleOpenModal = (item?: LayananItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name,
        description: item.description,
        category: item.category,
        url: item.url,
        isActive: item.isActive,
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: "",
        description: "",
        category: "Layanan Masyarakat",
        url: "",
        isActive: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingItem) {
      setLayananData(layananData.map(item => 
        item.id === editingItem.id ? { ...item, ...formData } as LayananItem : item
      ));
    } else {
      const newItem: LayananItem = {
        id: Date.now(),
        ...formData,
      };
      setLayananData([newItem, ...layananData]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Layanan Publik</h1>
          <p className="admin-page-subtitle">
            Kelola tautan dan informasi layanan publik eksternal maupun internal
          </p>
        </div>
        <button className="admin-btn admin-btn--primary" onClick={() => handleOpenModal()}>
          <Plus size={18} />
          Tambah Layanan
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-card__body" style={{ padding: "20px 24px" }}>
          <div className="admin-filters">
            {/* Search */}
            <div className="admin-search-box">
              <Search size={16} className="admin-search-box__icon" />
              <input
                type="text"
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-box__input"
              />
            </div>

            {/* Filters */}
            <div className="admin-filter-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`admin-filter-chip ${activeCategory === cat ? "admin-filter-chip--active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>INFORMASI LAYANAN</th>
                <th>KATEGORI</th>
                <th>LINK TAUTAN</th>
                <th>STATUS</th>
                <th style={{ width: "120px", textAlign: "right" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr key={item.id} style={{ opacity: item.isActive ? 1 : 0.6 }}>
                  <td style={{ color: "#94a3b8" }}>{index + 1}</td>
                  <td>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontWeight: 600, color: "#0f172a" }}>{item.name}</span>
                      <span style={{ fontSize: "13px", color: "#64748b" }}>{item.description}</span>
                    </div>
                  </td>
                  <td>
                    <span className="admin-badge">{item.category}</span>
                  </td>
                  <td>
                    {item.url !== "#" && item.url !== "" ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#3b82f6", fontSize: "13px", textDecoration: "none" }}
                      >
                        <ExternalLink size={14} />
                        Kunjungi
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "13px" }}>Tidak ada URL</span>
                    )}
                  </td>
                  <td>
                    <button 
                      onClick={() => handleToggleStatus(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <span
                        className="admin-badge"
                        style={{
                          backgroundColor: item.isActive ? "#dcfce7" : "#f1f5f9",
                          color: item.isActive ? "#16a34a" : "#64748b",
                          cursor: "pointer"
                        }}
                      >
                        {item.isActive ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        {item.isActive ? "Aktif" : "Nonaktif"}
                      </span>
                    </button>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div className="admin-table-actions">
                      <button className="admin-action-btn" title="Edit" onClick={() => handleOpenModal(item)}>
                        <Pencil size={16} />
                      </button>
                      <button className="admin-action-btn admin-action-btn--danger" title="Hapus" onClick={() => handleDelete(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
                    Tidak ada layanan publik ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal__header">
              <h3>{editingItem ? "Edit Layanan Publik" : "Tambah Layanan Publik"}</h3>
              <button className="admin-modal__close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal__body" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                <div className="admin-form__group">
                  <label className="admin-form__label">Nama Layanan</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Sistem Database Pemasyarakatan (SDP)"
                    required
                  />
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Deskripsi Singkat</label>
                  <textarea
                    className="admin-form__input"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Deskripsi layanan untuk pengunjung website..."
                    rows={3}
                    required
                  />
                </div>

                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Kategori</label>
                    <select
                      className="admin-form__input"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    >
                      <option value="Layanan Masyarakat">Layanan Masyarakat</option>
                      <option value="WBP">WBP</option>
                      <option value="Pengaduan">Pengaduan</option>
                      <option value="Sistem Informasi">Sistem Informasi</option>
                    </select>
                  </div>
                  
                  <div className="admin-form__group">
                    <label className="admin-form__label">Status Awal</label>
                    <select
                      className="admin-form__input"
                      value={formData.isActive ? "true" : "false"}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.value === "true" })}
                    >
                      <option value="true">Aktif</option>
                      <option value="false">Nonaktif</option>
                    </select>
                  </div>
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">URL Tautan (Opsional)</label>
                  <input
                    type="url"
                    className="admin-form__input"
                    value={formData.url === "#" ? "" : formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value || "#" })}
                    placeholder="https://..."
                  />
                  <p className="admin-form__hint">Biarkan kosong jika layanan tidak memiliki portal eksternal.</p>
                </div>

              </div>
              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--outline" onClick={() => setIsModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={16} />
                  Simpan Layanan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
