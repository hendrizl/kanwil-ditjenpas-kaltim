"use client";

import { useState } from "react";
import {
  Building2,
  Plus,
  Search,
  MapPin,
  Pencil,
  Trash2,
  X,
  Save,
  Clock,
  Globe,
} from "lucide-react";

type UPTItem = {
  id: number;
  name: string;
  type: "Lapas" | "Rutan" | "Bapas" | "LPKA" | "Rupbasan";
  class: string;
  location: string;
  address: string;
  serviceHours: string;
  socialMedia: string;
};

const INITIAL_UPT: UPTItem[] = [
  { id: 1, name: "Lapas Kelas IIA Samarinda", type: "Lapas", class: "IIA", location: "Samarinda", address: "Jl. Pemuda No. 12, Samarinda", serviceHours: "08:00 - 15:00", socialMedia: "@lapassamarinda" },
  { id: 2, name: "Lapas Kelas IIB Balikpapan", type: "Lapas", class: "IIB", location: "Balikpapan", address: "Jl. Jenderal Sudirman, Balikpapan", serviceHours: "08:00 - 15:00", socialMedia: "@lapasbpn" },
  { id: 3, name: "Lapas Kelas IIB Tenggarong", type: "Lapas", class: "IIB", location: "Kutai Kartanegara", address: "Jl. Pesut No. 5, Tenggarong", serviceHours: "08:30 - 15:30", socialMedia: "@lapastgr" },
  { id: 4, name: "Lapas Narkotika Kelas IIA Samarinda", type: "Lapas", class: "IIA", location: "Samarinda", address: "Jl. Bayur, Sempaja, Samarinda", serviceHours: "08:00 - 15:00", socialMedia: "@lapasnarkotikasmd" },
  { id: 5, name: "Lapas Kelas IIA Bontang", type: "Lapas", class: "IIA", location: "Bontang", address: "Jl. Bhayangkara, Bontang", serviceHours: "08:00 - 15:30", socialMedia: "@lapasbontang" },
  { id: 6, name: "Lapas Perempuan Kelas IIA Tenggarong", type: "Lapas", class: "IIA", location: "Kutai Kartanegara", address: "Jl. Wolter Monginsidi, Tenggarong", serviceHours: "08:00 - 15:00", socialMedia: "@lpp_tgr" },
  { id: 7, name: "LPKA Kelas II Samarinda", type: "LPKA", class: "II", location: "Samarinda", address: "Jl. MT Haryono, Samarinda", serviceHours: "08:30 - 14:30", socialMedia: "@lpkasamarinda" },
  { id: 8, name: "Rutan Kelas IIA Samarinda", type: "Rutan", class: "IIA", location: "Samarinda", address: "Jl. Wahid Hasyim, Samarinda", serviceHours: "08:00 - 15:00", socialMedia: "@rutansmd" },
  { id: 9, name: "Rutan Kelas IIB Balikpapan", type: "Rutan", class: "IIB", location: "Balikpapan", address: "Jl. Mayjen Sutoyo, Balikpapan", serviceHours: "08:00 - 15:00", socialMedia: "@rutan_bpn" },
  { id: 10, name: "Rutan Kelas IIB Tanah Grogot", type: "Rutan", class: "IIB", location: "Paser", address: "Jl. Kusuma Bangsa, Tanah Grogot", serviceHours: "08:30 - 15:30", socialMedia: "@rutan_tg" },
  { id: 11, name: "Rutan Kelas IIB Tanjung Redeb", type: "Rutan", class: "IIB", location: "Berau", address: "Jl. Dr. Murjani II, Tanjung Redeb", serviceHours: "08:00 - 15:00", socialMedia: "@rutanberau" },
  { id: 12, name: "Bapas Kelas II Samarinda", type: "Bapas", class: "II", location: "Samarinda", address: "Jl. M. Yamin, Samarinda", serviceHours: "07:30 - 16:00", socialMedia: "@bapassmd" },
  { id: 13, name: "Bapas Kelas II Balikpapan", type: "Bapas", class: "II", location: "Balikpapan", address: "Jl. Ruhui Rahayu, Balikpapan", serviceHours: "07:30 - 16:00", socialMedia: "@bapasbpn" },
  { id: 14, name: "Bapas Kelas II Tarakan", type: "Bapas", class: "II", location: "Tarakan", address: "Jl. Diponegoro, Tarakan", serviceHours: "07:30 - 16:00", socialMedia: "@bapastarakan" },
  { id: 15, name: "Rupbasan Kelas I Samarinda", type: "Rupbasan", class: "I", location: "Samarinda", address: "Jl. PM Noor, Samarinda", serviceHours: "08:00 - 16:00", socialMedia: "@rupbasansmd" },
  { id: 16, name: "Rupbasan Kelas II Balikpapan", type: "Rupbasan", class: "II", location: "Balikpapan", address: "Jl. RE Martadinata, Balikpapan", serviceHours: "08:00 - 16:00", socialMedia: "@rupbasan_bpn" },
];

export default function AdminUPTPage() {
  const [uptData, setUptData] = useState<UPTItem[]>(INITIAL_UPT);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState<string>("Semua");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<UPTItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "Lapas",
    class: "",
    location: "",
    address: "",
    serviceHours: "08:00 - 15:00",
    socialMedia: "",
  });

  const types = ["Semua", "Lapas", "Rutan", "Bapas", "LPKA", "Rupbasan"];

  const filtered = uptData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchType = activeType === "Semua" || item.type === activeType;
    return matchSearch && matchType;
  });

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus UPT ini?")) {
      setUptData(uptData.filter((item) => item.id !== id));
    }
  };

  const handleOpenModal = (item?: UPTItem) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name,
        type: item.type,
        class: item.class,
        location: item.location,
        address: item.address,
        serviceHours: item.serviceHours,
        socialMedia: item.socialMedia,
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: "",
        type: "Lapas",
        class: "",
        location: "",
        address: "",
        serviceHours: "08:00 - 15:00",
        socialMedia: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (editingItem) {
      setUptData(
        uptData.map((u) =>
          u.id === editingItem.id ? { ...u, ...formData } as UPTItem : u
        )
      );
    } else {
      const newItem: UPTItem = {
        id: Date.now(),
        ...(formData as Omit<UPTItem, "id">),
      };
      setUptData([...uptData, newItem]);
    }
    setIsModalOpen(false);
  };

  // Summaries
  const lapasCount = uptData.filter(u => u.type === "Lapas").length;
  const rutanCount = uptData.filter(u => u.type === "Rutan").length;
  const bapasCount = uptData.filter(u => u.type === "Bapas").length;
  const otherCount = uptData.length - lapasCount - rutanCount - bapasCount;

  return (
    <div className="admin-dashboard">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Data UPT</h1>
          <p className="admin-page-subtitle">
            Kelola data Unit Pelaksana Teknis di lingkungan Kanwil Ditjenpas Kaltim
          </p>
        </div>
        <button className="admin-btn admin-btn--primary" onClick={() => handleOpenModal()}>
          <Plus size={18} />
          Tambah UPT
        </button>
      </div>

      {/* Stats Summary */}
      <div className="admin-stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-card__icon" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
            <Building2 size={24} />
          </div>
          <div className="stat-card__content">
            <h3 className="stat-card__title">TOTAL UPT</h3>
            <p className="stat-card__value">{uptData.length}</p>
            <p className="stat-card__desc">Total seluruh satuan kerja</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ backgroundColor: "#f0fdf4", color: "#22c55e" }}>
            <Building2 size={24} />
          </div>
          <div className="stat-card__content">
            <h3 className="stat-card__title">TOTAL LAPAS</h3>
            <p className="stat-card__value">{lapasCount}</p>
            <p className="stat-card__desc">Lembaga Pemasyarakatan</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ backgroundColor: "#fefce8", color: "#eab308" }}>
            <Building2 size={24} />
          </div>
          <div className="stat-card__content">
            <h3 className="stat-card__title">TOTAL RUTAN</h3>
            <p className="stat-card__value">{rutanCount}</p>
            <p className="stat-card__desc">Rumah Tahanan Negara</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ backgroundColor: "#faf5ff", color: "#a855f7" }}>
            <Building2 size={24} />
          </div>
          <div className="stat-card__content">
            <h3 className="stat-card__title">BAPAS & LAINNYA</h3>
            <p className="stat-card__value">{bapasCount + otherCount}</p>
            <p className="stat-card__desc">Bapas, Rupbasan, LPKA</p>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card__body" style={{ padding: "20px 24px" }}>
          <div className="admin-filters">
            <div className="admin-search-box">
              <Search size={16} className="admin-search-box__icon" />
              <input
                type="text"
                placeholder="Cari UPT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-box__input"
              />
            </div>

            <div className="admin-filter-group">
              {types.map((type) => (
                <button
                  key={type}
                  className={`admin-filter-chip ${activeType === type ? "admin-filter-chip--active" : ""}`}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>NAMA UPT</th>
                <th>JENIS</th>
                <th>ALAMAT & LOKASI</th>
                <th>JAM LAYANAN</th>
                <th>KONTAK/SOSMED</th>
                <th style={{ width: "120px", textAlign: "right" }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr key={item.id}>
                  <td style={{ color: "#94a3b8" }}>{index + 1}</td>
                  <td>
                    <div style={{ fontWeight: 600, color: "#0f172a", marginBottom: "4px" }}>
                      {item.name}
                    </div>
                  </td>
                  <td>
                    <span className="admin-badge" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      {item.type}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#64748b", fontSize: "13px" }}>
                        <MapPin size={14} />
                        {item.location}
                      </div>
                      <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                        {item.address}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#475569" }}>
                      <Clock size={14} color="#94a3b8" />
                      {item.serviceHours}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#475569" }}>
                      <Globe size={14} color="#94a3b8" />
                      {item.socialMedia}
                    </div>
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
                  <td colSpan={7} style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
                    Tidak ada UPT ditemukan
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
          <div className="admin-modal" style={{ maxWidth: "700px" }}>
            <div className="admin-modal__header">
              <h3>{editingItem ? "Edit Data UPT" : "Tambah Data UPT"}</h3>
              <button className="admin-modal__close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal__body" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                
                <div className="admin-form__group">
                  <label className="admin-form__label">Nama UPT</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Jenis UPT</label>
                    <select
                      className="admin-form__input"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="Lapas">Lapas</option>
                      <option value="Rutan">Rutan</option>
                      <option value="Bapas">Bapas</option>
                      <option value="LPKA">LPKA</option>
                      <option value="Rupbasan">Rupbasan</option>
                    </select>
                  </div>
                  
                  <div className="admin-form__group">
                    <label className="admin-form__label">Kelas UPT</label>
                    <input
                      type="text"
                      className="admin-form__input"
                      value={formData.class}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      placeholder="Contoh: IIA"
                      required
                    />
                  </div>
                </div>

                <div className="admin-form__row">
                  <div className="admin-form__group">
                    <label className="admin-form__label">Kota/Kabupaten</label>
                    <input
                      type="text"
                      className="admin-form__input"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="admin-form__group">
                    <label className="admin-form__label">Jam Layanan</label>
                    <input
                      type="text"
                      className="admin-form__input"
                      value={formData.serviceHours}
                      onChange={(e) => setFormData({ ...formData, serviceHours: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Alamat Lengkap</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form__group">
                  <label className="admin-form__label">Sosial Media / Kontak</label>
                  <input
                    type="text"
                    className="admin-form__input"
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                    placeholder="Contoh: @lapassamarinda / 0812-3456-7890"
                    required
                  />
                </div>

              </div>
              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--outline" onClick={() => setIsModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={16} />
                  Simpan UPT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
