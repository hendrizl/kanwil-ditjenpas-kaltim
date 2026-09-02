"use client";

import { useState } from "react";
import {
  MessageSquareWarning,
  Search,
  Clock,
  CheckCircle2,
  TrendingUp,
  Eye,
  Mail,
  User,
  Calendar,
} from "lucide-react";

type ComplaintItem = {
  id: number;
  subject: string;
  sender: string;
  email: string;
  channel: "LAPOR!" | "WBS" | "WhatsApp";
  date: string;
  status: "menunggu" | "diproses" | "selesai";
  priority: "tinggi" | "sedang" | "rendah";
};

const DUMMY_COMPLAINTS: ComplaintItem[] = [
  { id: 1, subject: "Jadwal Kunjungan Lapas Samarinda Tidak Jelas", sender: "Ahmad Fauzi", email: "ahmad@email.com", channel: "LAPOR!", date: "30 Agustus 2026", status: "menunggu", priority: "tinggi" },
  { id: 2, subject: "Permintaan Informasi Prosedur Bebas Bersyarat", sender: "Siti Rahmah", email: "siti@email.com", channel: "WhatsApp", date: "28 Agustus 2026", status: "diproses", priority: "sedang" },
  { id: 3, subject: "Laporan Kondisi Fasilitas Rutan Tenggarong", sender: "Budi Santoso", email: "budi@email.com", channel: "LAPOR!", date: "26 Agustus 2026", status: "selesai", priority: "tinggi" },
  { id: 4, subject: "Permohonan Izin Kunjungan Khusus", sender: "Maria Ulfa", email: "maria@email.com", channel: "WhatsApp", date: "25 Agustus 2026", status: "menunggu", priority: "sedang" },
  { id: 5, subject: "Pelaporan Dugaan Pungli di Rutan Balikpapan", sender: "Anonim", email: "-", channel: "WBS", date: "22 Agustus 2026", status: "diproses", priority: "tinggi" },
  { id: 6, subject: "Pertanyaan Terkait Program Asimilasi", sender: "Dewi Lestari", email: "dewi@email.com", channel: "WhatsApp", date: "20 Agustus 2026", status: "selesai", priority: "rendah" },
  { id: 7, subject: "Permintaan Data Statistik WBP", sender: "Rizki Pratama", email: "rizki@email.com", channel: "LAPOR!", date: "18 Agustus 2026", status: "selesai", priority: "rendah" },
];

const statusConfig = {
  menunggu: { label: "Menunggu", color: "#f97316", icon: Clock },
  diproses: { label: "Diproses", color: "#3b82f6", icon: TrendingUp },
  selesai: { label: "Selesai", color: "#22c55e", icon: CheckCircle2 },
};

const priorityConfig = {
  tinggi: { label: "Tinggi", color: "#ef4444" },
  sedang: { label: "Sedang", color: "#f59e0b" },
  rendah: { label: "Rendah", color: "#22c55e" },
};

const channelColors: Record<string, string> = {
  "LAPOR!": "#3b82f6",
  WBS: "#8b5cf6",
  WhatsApp: "#22c55e",
};

export default function AdminPengaduanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<"all" | "menunggu" | "diproses" | "selesai">("all");

  const filtered = DUMMY_COMPLAINTS.filter((item) => {
    const matchSearch = item.subject.toLowerCase().includes(searchQuery.toLowerCase()) || item.sender.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = activeStatus === "all" || item.status === activeStatus;
    return matchSearch && matchStatus;
  });

  const countByStatus = (s: string) => DUMMY_COMPLAINTS.filter((c) => c.status === s).length;

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Pengaduan Masyarakat</h1>
          <p className="admin-page-subtitle">
            Kelola pengaduan, aspirasi, dan laporan dari masyarakat
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="admin-stats-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-card__header">
            <div className="stat-card__info">
              <p className="stat-card__title">Total Pengaduan</p>
              <h3 className="stat-card__value">{DUMMY_COMPLAINTS.length}</h3>
            </div>
            <div className="stat-card__icon-wrapper" style={{ backgroundColor: "#3b82f618", color: "#3b82f6" }}>
              <MessageSquareWarning size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: "pointer" }} onClick={() => setActiveStatus("menunggu")}>
          <div className="stat-card__header">
            <div className="stat-card__info">
              <p className="stat-card__title">Menunggu</p>
              <h3 className="stat-card__value" style={{ color: "#f97316" }}>{countByStatus("menunggu")}</h3>
            </div>
            <div className="stat-card__icon-wrapper" style={{ backgroundColor: "#f9731618", color: "#f97316" }}>
              <Clock size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: "pointer" }} onClick={() => setActiveStatus("diproses")}>
          <div className="stat-card__header">
            <div className="stat-card__info">
              <p className="stat-card__title">Diproses</p>
              <h3 className="stat-card__value" style={{ color: "#3b82f6" }}>{countByStatus("diproses")}</h3>
            </div>
            <div className="stat-card__icon-wrapper" style={{ backgroundColor: "#3b82f618", color: "#3b82f6" }}>
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
        <div className="stat-card" style={{ cursor: "pointer" }} onClick={() => setActiveStatus("selesai")}>
          <div className="stat-card__header">
            <div className="stat-card__info">
              <p className="stat-card__title">Selesai</p>
              <h3 className="stat-card__value" style={{ color: "#22c55e" }}>{countByStatus("selesai")}</h3>
            </div>
            <div className="stat-card__icon-wrapper" style={{ backgroundColor: "#22c55e18", color: "#22c55e" }}>
              <CheckCircle2 size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-card">
        <div className="admin-card__body" style={{ padding: "20px 24px" }}>
          <div className="admin-filters">
            <div className="admin-search-box">
              <Search size={16} className="admin-search-box__icon" />
              <input
                type="text"
                placeholder="Cari pengaduan atau nama pengirim..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-search-box__input"
              />
            </div>
            <div className="admin-filter-group">
              {(["all", "menunggu", "diproses", "selesai"] as const).map((s) => (
                <button
                  key={s}
                  className={`admin-filter-chip ${activeStatus === s ? "admin-filter-chip--active" : ""}`}
                  onClick={() => setActiveStatus(s)}
                >
                  {s === "all" ? "Semua" : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Complaint List */}
      <div className="admin-card">
        <div className="admin-card__header">
          <h2 className="admin-card__title">
            <MessageSquareWarning size={18} />
            Daftar Pengaduan ({filtered.length})
          </h2>
        </div>
        <div className="admin-card__body">
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>#</th>
                  <th>Perihal</th>
                  <th>Pengirim</th>
                  <th>Kanal</th>
                  <th>Tanggal</th>
                  <th>Prioritas</th>
                  <th>Status</th>
                  <th style={{ width: 80 }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, idx) => {
                  const status = statusConfig[item.status];
                  const priority = priorityConfig[item.priority];
                  const StatusIcon = status.icon;
                  return (
                    <tr key={item.id}>
                      <td style={{ color: "#94a3b8" }}>{idx + 1}</td>
                      <td className="admin-table__title-cell">{item.subject}</td>
                      <td>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 500, color: "#00223D" }}>
                            <User size={12} /> {item.sender}
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}>
                            <Mail size={10} /> {item.email}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="admin-badge" style={{ backgroundColor: `${channelColors[item.channel]}18`, color: channelColors[item.channel] }}>
                          {item.channel}
                        </span>
                      </td>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#94a3b8" }}>
                          <Calendar size={12} /> {item.date}
                        </span>
                      </td>
                      <td>
                        <span className="admin-badge" style={{ backgroundColor: `${priority.color}18`, color: priority.color }}>
                          {priority.label}
                        </span>
                      </td>
                      <td>
                        <span className="admin-badge" style={{ backgroundColor: `${status.color}18`, color: status.color }}>
                          <StatusIcon size={12} />
                          {status.label}
                        </span>
                      </td>
                      <td>
                        <div className="admin-actions">
                          <button className="admin-action-btn" title="Lihat Detail"><Eye size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
