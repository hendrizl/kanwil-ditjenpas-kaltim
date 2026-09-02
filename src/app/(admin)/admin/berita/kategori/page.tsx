"use client";

import { useState } from "react";
import {
  FolderTree,
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  Save,
} from "lucide-react";

type CategoryItem = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

const INITIAL_CATEGORIES: CategoryItem[] = [
  { id: 1, name: "Berita Wilayah", slug: "berita-wilayah", count: 24 },
  { id: 2, name: "Pembinaan", slug: "pembinaan", count: 18 },
  { id: 3, name: "Layanan Publik", slug: "layanan-publik", count: 12 },
  { id: 4, name: "Siaran Pers", slug: "siaran-pers", count: 5 },
];

export default function AdminKategoriPage() {
  const [categories, setCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryItem | null>(null);
  const [formData, setFormData] = useState({ name: "" });

  const filtered = categories.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  const handleOpenModal = (category?: CategoryItem) => {
    if (category) {
      setEditingCategory(category);
      setFormData({ name: category.name });
    } else {
      setEditingCategory(null);
      setFormData({ name: "" });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingCategory) {
      // Edit
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id
            ? { ...cat, name: formData.name, slug: formData.name.toLowerCase().replace(/\s+/g, "-") }
            : cat
        )
      );
    } else {
      // Add
      const newCategory: CategoryItem = {
        id: Date.now(),
        name: formData.name,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
        count: 0,
      };
      setCategories([...categories, newCategory]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Kategori Berita</h1>
          <p className="admin-page-subtitle">
            Kelola kategori untuk berita dan publikasi
          </p>
        </div>
        <button
          className="admin-btn admin-btn--primary"
          onClick={() => handleOpenModal()}
        >
          <Plus size={18} />
          Tambah Kategori
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
                placeholder="Cari kategori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-box__input"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>NAMA KATEGORI</th>
                <th>SLUG</th>
                <th>JUMLAH BERITA</th>
                <th style={{ width: "120px", textAlign: "right" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "40px" }}>
                    <FolderTree size={48} style={{ color: "#cbd5e1", margin: "0 auto 16px" }} />
                    <p style={{ color: "#64748b", margin: 0 }}>Tidak ada kategori ditemukan</p>
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ color: "#94a3b8" }}>{index + 1}</td>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td style={{ color: "#64748b" }}>{item.slug}</td>
                    <td>
                      <span className="admin-badge" style={{ backgroundColor: "#f1f5f9", color: "#475569" }}>
                        {item.count} Artikel
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div className="admin-table-actions">
                        <button
                          className="admin-action-btn"
                          title="Edit"
                          onClick={() => handleOpenModal(item)}
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          className="admin-action-btn admin-action-btn--danger"
                          title="Hapus"
                          onClick={() => handleDelete(item.id)}
                          disabled={item.count > 0} // Can't delete if has articles
                          style={item.count > 0 ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
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
              <h3>{editingCategory ? "Edit Kategori" : "Tambah Kategori Baru"}</h3>
              <button className="admin-modal__close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal__body">
                <div className="admin-form__group">
                  <label className="admin-form__label">Nama Kategori</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    placeholder="Contoh: Pembinaan Kepegawaian"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    autoFocus
                  />
                </div>
              </div>
              <div className="admin-modal__footer">
                <button
                  type="button"
                  className="admin-btn admin-btn--outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Batal
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={16} />
                  Simpan Kategori
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
