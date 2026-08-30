"use client";

import Image from "next/image";
import { Calendar, ChevronRight, Newspaper, ArrowRight } from "lucide-react";

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-24">
      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-[#00223D] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="w-16 h-16 bg-[#E8C84A] rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg">
            <Newspaper size={36} className="text-[#00223D]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Berita & Publikasi
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Dapatkan informasi terbaru mengenai kegiatan, program unggulan, serta liputan seputar Kantor Wilayah Direktorat Jenderal Pemasyarakatan Kalimantan Timur.
          </p>
        </div>
      </section>

      <div className="container mt-12 space-y-16">
        {/* Featured Article */}
        <section>
          <div className="flex items-center justify-between mb-8 mt-16">
            <h2 className="text-2xl font-bold text-[#00223D] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#E8C84A] rounded-full inline-block" />
              Sorotan Utama
            </h2>
          </div>

          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row cursor-pointer hover:shadow-2xl transition-all">
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden" />
              <div className="w-full h-full bg-[#082D4B] flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform duration-700">
                <span className="text-lg font-medium">Gambar Utama Berita</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#E8C84A]/20 text-[#00223D] font-bold text-xs rounded-full">Kegiatan Wilayah</span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar size={14} /> 24 Agustus 2026
                </span>
              </div>
              <h3 className="text-3xl font-extrabold text-[#00223D] leading-tight mb-4 group-hover:text-blue-700 transition-colors">
                Rapat Koordinasi Evaluasi Kinerja Pemasyarakatan se-Kalimantan Timur
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-justify line-clamp-3">
                Dalam rangka mewujudkan target kinerja yang optimal, Kantor Wilayah Ditjenpas Kalimantan Timur mengadakan rapat koordinasi evaluasi triwulan. Kegiatan ini dihadiri oleh seluruh Kepala UPT di wilayah Kaltim dan berfokus pada peningkatkan kualitas pelayanan.
              </p>

              <button className="flex items-center gap-2 text-[#00223D] font-bold hover:text-blue-700 transition-colors w-fit group/btn">
                Baca Selengkapnya
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#00223D] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#E8C84A] rounded-full inline-block" />
              Berita Terbaru
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sosialisasi Pemenuhan Hak Asasi Manusia bagi Warga Binaan",
                category: "Pembinaan",
                date: "20 Agustus 2026",
                excerpt: "Langkah konkrit kanwil dalam memastikan seluruh UPT menerapkan standar HAM yang ketat dalam pembinaan sehari-hari."
              },
              {
                title: "Kunjungan Kerja Kakanwil ke Lapas Kelas IIA Samarinda",
                category: "Kunjungan",
                date: "18 Agustus 2026",
                excerpt: "Meninjau langsung sarana prasarana serta fasilitas kesehatan yang ada di dalam Lapas guna memastikan kelayakan operasional."
              },
              {
                title: "Sinergitas Aparat Penegak Hukum dalam Pengamanan UPT",
                category: "Keamanan",
                date: "15 Agustus 2026",
                excerpt: "Kerjasama strategis antara Ditjenpas dengan Kepolisian daerah Kalimantan Timur resmi diperkuat melalui MoU terbaru."
              },
              {
                title: "Pelatihan Kemandirian Bersertifikat bagi Narapidana",
                category: "Pelatihan",
                date: "10 Agustus 2026",
                excerpt: "Warga binaan diberikan bekal keterampilan mulai dari perbengkelan hingga tata boga agar siap kembali ke masyarakat."
              },
              {
                title: "Deklarasi Janji Kinerja Tahun 2026",
                category: "Internal",
                date: "05 Agustus 2026",
                excerpt: "Seluruh jajaran pegawai Kemenkumham Kaltim menandatangani pakta integritas guna mewujudkan WBK/WBBM."
              },
              {
                title: "Pemusnahan Barang Bukti Hasil Penggeledahan",
                category: "Keamanan",
                date: "01 Agustus 2026",
                excerpt: "Transparansi hasil razia rutin dibuktikan dengan pemusnahan barang-barang terlarang yang ditemukan di kamar hunian."
              }
            ].map((news, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group flex flex-col">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="w-full h-full bg-[#05284E] flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white/30 text-sm">Ilustrasi Berita</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#E8C84A] text-[#00223D] font-bold text-[10px] uppercase tracking-wider rounded-md">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <Calendar size={12} /> {news.date}
                  </span>
                  <h3 className="text-lg font-bold text-[#00223D] leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#082D4B] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca Berita <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-xl bg-gray-100 text-[#00223D] font-bold hover:bg-gray-200 transition-colors shadow-sm">
              Muat Lebih Banyak
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
