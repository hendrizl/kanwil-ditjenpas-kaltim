"use client";

import { useState } from "react";
import {
  Newspaper,
  Plus,
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  X,
  Save,
} from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  status: "published" | "draft";
  image: boolean;
  views: number;
};

const INITIAL_NEWS: NewsItem[] = [
  { id: 1, title: "Kunjungan Kerja Kakanwil ke Lapas Kelas IIA Samarinda", category: "Berita Wilayah", date: "28 Agustus 2026", status: "published", image: true, views: 234 },
  { id: 2, title: "Pelatihan Keterampilan WBP di Rutan Balikpapan", category: "Pembinaan", date: "25 Agustus 2026", status: "published", image: true, views: 189 },
  { id: 3, title: "Program Asimilasi Warga Binaan Semester II 2026", category: "Pembinaan", date: "22 Agustus 2026", status: "draft", image: false, views: 0 },
  { id: 4, title: "Sosialisasi Anti Narkoba di Lapas Narkotika Samarinda", category: "Berita Wilayah", date: "20 Agustus 2026", status: "published", image: true, views: 312 },
  { id: 5, title: "Penguatan Layanan Pemasyarakatan di Kalimantan Timur", category: "Layanan Publik", date: "18 Agustus 2026", status: "published", image: true, views: 156 },
  { id: 6, title: "Rapat Koordinasi Pengamanan Lapas se-Kaltim", category: "Berita Wilayah", date: "15 Agustus 2026", status: "published", image: false, views: 98 },
  { id: 7, title: "Workshop Peningkatan Kapasitas Petugas Pemasyarakatan", category: "Pembinaan", date: "12 Agustus 2026", status: "draft", image: false, views: 0 },
  { id: 8, title: "Akses Informasi Publik dan Pengaduan Dibuat Lebih Mudah", category: "Layanan Publik", date: "10 Agustus 2026", status: "published", image: true, views: 445 },
];

const categories = ["Semua", "Berita Wilayah", "Pembinaan", "Layanan Publik"];

const statusConfig = {
  published: { label: "Terbit", color: "#22c55e", icon: CheckCircle2 },
  draft: { label: "Draft", color: "#eab308", icon: FileText },
};

export default function AdminBeritaPage() {
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeStatus, setActiveStatus] = useState<"all" | "published" | "draft">("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Berita Wilayah",
    status: "draft" as "published" | "draft",
  });

  const filtered = news.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchStatus = activeStatus === "all" || item.status === activeStatus;
    return matchSearch && matchCategory && matchStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      setNews(news.filter(n => n.id !== id));
    }
  };

  const handleOpenModal = (item?: NewsItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        category: item.category,
        status: item.status,
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: "",
        category: "Berita Wilayah",
        status: "draft",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingItem) {
      setNews(news.map(n => 
        n.id === editingItem.id 
          ? { ...n, title: formData.title, category: formData.category, status: formData.status }
          : n
      ));
    } else {
      const newItem: NewsItem = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        status: formData.status,
        date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
        image: false,
        views: 0,
      };
      setNews([newItem, ...news]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Berita & Publikasi</h1>
          <p className="admin-page-subtitle">
            Kelola berita dan publikasi kegiatan Kanwil Ditjenpas Kaltim
          </p>
        </div>
        <button className="admin-btn admin-btn--primary" onClick={() => handleOpenModal()}>
          <Plus size={18} />
          Tambah Berita
        </button>
      </div>

      {/* Filters */}
      <div className="admin-card">
        <div className="admin-card__body" style={{ padding: "20px 24px" }}>
          <div className="admin-filters">
            {/* Search */}
            <div className="admin-search-box">
              <Search size={16} className="admin-search-box__icon" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-box__input"
              />
            </div>

            {/* Category Filter */}
            <div className="admin-filter-group">
              <Filter size={16} />
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

            {/* Status Filter */}
            <div className="admin-filter-group">
              <select
                className="admin-form__input"
                style={{ width: "150px" }}
                value={activeStatus}
                onChange={(e) => setActiveStatus(e.target.value as any)}
              >
                <option value="all">Semua Status</option>
                <option value="published">Terbit</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>JUDUL</th>
                <th>TANGGAL</th>
                <th>STATUS</th>
                <th>KATEGORI</th>
                <th>VIEWS</th>
                <th style={{ width: "120px", textAlign: "right" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const StatusIcon = statusConfig[item.status].icon;
                return (
                  <tr key={item.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "8px",
                            background: "#f1f5f9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {item.image ? (
                            <ImageIcon size={20} color="#94a3b8" />
                          ) : (
                            <FileText size={20} color="#94a3b8" />
                          )}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontWeight: 600, color: "#0f172a" }}>
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: "#64748b" }}>{item.date}</td>
                    <td>
                      <span
                        className="admin-badge"
                        style={{
                          backgroundColor: `${statusConfig[item.status].color}15`,
                          color: statusConfig[item.status].color,
                        }}
                      >
                        <StatusIcon size={14} />
                        {statusConfig[item.status].label}
                      </span>
                    </td>
                    <td>
                      <span className="admin-badge">{item.category}</span>
                    </td>
                    <td style={{ color: "#64748b" }}>
                      {item.views.toLocaleString()}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div className="admin-table-actions">
                        <button className="admin-action-btn" title="Preview" onClick={() => window.open(`/berita/${item.id}`, '_blank')}>
                          <Eye size={16} />
                        </button>
                        <button className="admin-action-btn" title="Edit" onClick={() => handleOpenModal(item)}>
                          <Pencil size={16} />
                        </button>
                        <button className="admin-action-btn admin-action-btn--danger" title="Hapus" onClick={() => handleDelete(item.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div style={{ padding: "40px", textAlign: "center", color: "#94a3b8" }}>
              Tidak ada berita ditemukan
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: "600px" }}>
            <div className="admin-modal__header">
              <h3>{editingItem ? "Edit Berita" : "Tambah Berita"}</h3>
              <button className="admin-modal__close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal__body" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="admin-form__group">
                  <label className="admin-form__label">Judul Berita</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Kategori</label>
                    <select
                      className="admin-form__input"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Berita Wilayah">Berita Wilayah</option>
                      <option value="Pembinaan">Pembinaan</option>
                      <option value="Layanan Publik">Layanan Publik</option>
                    </select>
                  </div>
                  
                  <div className="admin-form__group">
                    <label className="admin-form__label">Status</label>
                    <select
                      className="admin-form__input"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as "published" | "draft" })}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Terbit</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--outline" onClick={() => setIsModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={16} />
                  Simpan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
