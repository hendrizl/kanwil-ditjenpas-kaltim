"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquareWarning, FileText, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";


export default function InformasiPage() {
  const [activeTab, setActiveTab] = useState("maklumat");

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
            <MessageSquareWarning size={36} className="text-[#00223D]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Layanan Publik & Pengaduan
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan pelayanan terbaik dan transparan. Sampaikan aspirasi, permintaan informasi, atau pengaduan Anda melalui kanal resmi yang tersedia.
          </p>
        </div>
      </section>

      <div className="container mt-12 space-y-20">
        {/* Kanal Layanan */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#00223D]">Kanal Layanan Pengaduan</h2>
            <div className="w-16 h-1 bg-[#E8C84A] mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a href="#" className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100 flex flex-col items-center justify-center gap-6 group">
              <div className="h-20 flex items-center justify-center">
                <Image src="/kanwil-ditjenpas-kaltim/assets/logo_lapor.png" alt="LAPOR" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" width={180} height={54} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#00223D] mb-1">SP4N LAPOR!</h3>
                <p className="text-sm text-gray-500">Layanan Aspirasi dan Pengaduan Online Rakyat</p>
              </div>
            </a>
            <a href="#" className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100 flex flex-col items-center justify-center gap-6 group">
              <div className="h-20 flex items-center justify-center">
                <Image src="/kanwil-ditjenpas-kaltim/assets/logo_wbs.png" alt="WBS" className="h-20 w-auto object-contain group-hover:scale-105 transition-transform" width={90} height={77} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#00223D] mb-1">Whistleblowing System</h3>
                <p className="text-sm text-gray-500">Pelaporan pelanggaran Kemenimipas</p>
              </div>
            </a>
            <a href="#" className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100 flex flex-col items-center justify-center gap-6 group">
              <div className="h-20 flex items-center justify-center">
                <Image src="/kanwil-ditjenpas-kaltim/assets/logo_wa.png" alt="WhatsApp" className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" width={80} height={80} />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[#00223D] mb-1">WhatsApp Pengaduan</h3>
                <p className="text-sm text-gray-500">Layanan chat interaktif Kanwil Kaltim</p>
              </div>
            </a>
          </div>
        </section>

        {/* Tabbed Info Section */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row border-b border-gray-100">
            <button 
              onClick={() => setActiveTab("maklumat")}
              className={`flex-1 py-5 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === "maklumat" ? "bg-[#082D4B] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <ShieldCheck size={20} />
              Maklumat Pelayanan
            </button>
            <button 
              onClick={() => setActiveTab("standar")}
              className={`flex-1 py-5 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === "standar" ? "bg-[#082D4B] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <FileText size={20} />
              Standar Pelayanan
            </button>
            <button 
              onClick={() => setActiveTab("kinerja")}
              className={`flex-1 py-5 px-6 font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === "kinerja" ? "bg-[#082D4B] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <Activity size={20} />
              Laporan Kinerja
            </button>
          </div>

          <div className="p-8 md:p-12 min-h-[400px]">
            {activeTab === "maklumat" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-[#00223D] mb-6 text-center">Maklumat Pelayanan</h3>
                <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#E8C84A]">
                  <p className="text-lg text-gray-800 italic leading-relaxed text-center font-medium">
                    "Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundang-undangan yang berlaku."
                  </p>
                  <p className="text-right font-bold text-[#00223D] mt-6">— Kepala Divisi Pemasyarakatan</p>
                </div>
              </div>
            )}

            {activeTab === "standar" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-[#00223D] mb-6">Daftar Standar Pelayanan</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Pelayanan Pengaduan Masyarakat",
                    "Pelayanan Informasi Publik",
                    "Layanan Izin Penelitian dan Riset",
                    "Layanan Bantuan Hukum (Bankum)",
                    "Layanan Konsultasi Pemasyarakatan",
                    "Layanan Pengajuan Cuti Bersyarat"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#E8C84A] hover:bg-yellow-50/30 cursor-pointer transition-colors">
                      <CheckCircle2 className="text-[#E8C84A] shrink-0" size={24} />
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button className="text-[#082D4B] font-bold underline hover:text-blue-700">Unduh Dokumen Lengkap Standar Pelayanan (PDF)</button>
                </div>
              </div>
            )}

            {activeTab === "kinerja" && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-[#00223D] mb-6">Laporan Kinerja & Akuntabilitas</h3>
                <p className="text-gray-600 mb-6">Sebagai bentuk transparansi, kami mempublikasikan laporan kinerja tahunan dan triwulanan yang dapat diakses oleh publik.</p>
                <div className="space-y-4">
                  {[
                    "Laporan Kinerja Instansi Pemerintah (LKjIP) Tahun 2025",
                    "Rencana Kerja Tahunan (RKT) 2026",
                    "Laporan Realisasi Anggaran Triwulan II",
                    "Perjanjian Kinerja Tahun 2026"
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100">
                      <div className="flex items-center gap-3">
                        <FileText className="text-gray-400" size={20} />
                        <span className="font-medium text-[#00223D]">{item}</span>
                      </div>
                      <button className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-bold text-[#082D4B] hover:bg-[#E8C84A] transition-colors border border-gray-200">
                        Unduh
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
