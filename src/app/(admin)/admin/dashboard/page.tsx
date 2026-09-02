import {
  Building2,
  Users,
  Newspaper,
  MessageSquareWarning,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";
import StatCard from "@/features/admin/components/StatCard";

// Data statis untuk demo
const recentNews = [
  {
    id: 1,
    title: "Kunjungan Kerja Kakanwil ke Lapas Kelas IIA Samarinda",
    date: "28 Agustus 2026",
    status: "published",
  },
  {
    id: 2,
    title: "Pelatihan Keterampilan WBP di Rutan Balikpapan",
    date: "25 Agustus 2026",
    status: "published",
  },
  {
    id: 3,
    title: "Program Asimilasi Warga Binaan Semester II 2026",
    date: "22 Agustus 2026",
    status: "draft",
  },
  {
    id: 4,
    title: "Sosialisasi Anti Narkoba di Lapas Narkotika Samarinda",
    date: "20 Agustus 2026",
    status: "published",
  },
];

const recentComplaints = [
  {
    id: 1,
    subject: "Jadwal Kunjungan Lapas Samarinda",
    date: "30 Agustus 2026",
    status: "menunggu",
  },
  {
    id: 2,
    subject: "Permintaan Informasi Prosedur Bebas Bersyarat",
    date: "28 Agustus 2026",
    status: "diproses",
  },
  {
    id: 3,
    subject: "Laporan Kondisi Fasilitas Rutan Tenggarong",
    date: "26 Agustus 2026",
    status: "selesai",
  },
  {
    id: 4,
    subject: "Permohonan Izin Kunjungan Khusus",
    date: "25 Agustus 2026",
    status: "menunggu",
  },
];

const statusColors: Record<string, string> = {
  published: "#22c55e",
  draft: "#eab308",
  menunggu: "#f97316",
  diproses: "#3b82f6",
  selesai: "#22c55e",
};

const statusIcons: Record<string, React.ReactNode> = {
  menunggu: <Clock size={14} />,
  diproses: <TrendingUp size={14} />,
  selesai: <CheckCircle2 size={14} />,
};

export default function AdminDashboardPage() {
  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-subtitle">
            Selamat datang di Panel Admin Kanwil Ditjenpas Kalimantan Timur
          </p>
        </div>
        <p className="admin-page-date">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Stat Cards */}
      <div className="admin-stats-grid">
        <StatCard
          title="Total UPT"
          value={16}
          icon={Building2}
          description="Unit Pelaksana Teknis"
          accentColor="#3b82f6"
        />
        <StatCard
          title="Total WBP"
          value="8.432"
          icon={Users}
          trend={{ value: "+2.4%", isPositive: true }}
          description="Warga Binaan Pemasyarakatan"
          accentColor="#22c55e"
        />
        <StatCard
          title="Berita Terbit"
          value={47}
          icon={Newspaper}
          trend={{ value: "+12", isPositive: true }}
          description="Bulan ini"
          accentColor="#E8C84A"
        />
        <StatCard
          title="Pengaduan"
          value={23}
          icon={MessageSquareWarning}
          trend={{ value: "-8%", isPositive: false }}
          description="Belum ditanggapi"
          accentColor="#f97316"
        />
        <StatCard
          title="Layanan Publik"
          value={12}
          icon={Globe}
          description="Informasi layanan aktif"
          accentColor="#8b5cf6"
        />
        <StatCard
          title="Overcrowding"
          value="127%"
          icon={AlertTriangle}
          description="Rata-rata kapasitas"
          accentColor="#ef4444"
        />
      </div>

      {/* Content Grid: News + Complaints */}
      <div className="admin-content-grid">
        {/* Recent News */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">
              <Newspaper size={18} />
              Berita Terbaru
            </h2>
            <a href="/admin/berita" className="admin-card__action">
              Lihat Semua →
            </a>
          </div>
          <div className="admin-card__body">
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Judul</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentNews.map((news) => (
                    <tr key={news.id}>
                      <td className="admin-table__title-cell">{news.title}</td>
                      <td className="admin-table__date-cell">{news.date}</td>
                      <td>
                        <span
                          className="admin-badge"
                          style={{
                            backgroundColor: `${statusColors[news.status]}18`,
                            color: statusColors[news.status],
                          }}
                        >
                          {news.status === "published" ? (
                            <CheckCircle2 size={12} />
                          ) : (
                            <FileText size={12} />
                          )}
                          {news.status === "published" ? "Terbit" : "Draft"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Complaints */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">
              <MessageSquareWarning size={18} />
              Pengaduan Terbaru
            </h2>
            <a href="/admin/pengaduan" className="admin-card__action">
              Lihat Semua →
            </a>
          </div>
          <div className="admin-card__body">
            <ul className="admin-complaint-list">
              {recentComplaints.map((complaint) => (
                <li key={complaint.id} className="admin-complaint-item">
                  <div className="admin-complaint-item__info">
                    <p className="admin-complaint-item__subject">
                      {complaint.subject}
                    </p>
                    <p className="admin-complaint-item__date">{complaint.date}</p>
                  </div>
                  <span
                    className="admin-badge"
                    style={{
                      backgroundColor: `${statusColors[complaint.status]}18`,
                      color: statusColors[complaint.status],
                    }}
                  >
                    {statusIcons[complaint.status]}
                    {complaint.status.charAt(0).toUpperCase() +
                      complaint.status.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
