"use client";

import Image from "next/image";
import { CheckCircle2, Target, Eye, Users, ChevronRight } from "lucide-react";


export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-24">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#00223D] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10 text-center">
          <p className="text-[#E8C84A] font-semibold text-lg mb-4">Profil Instansi</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Tentang Kanwil Ditjenpas<br className="hidden md:block" /> Kalimantan Timur
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Mewujudkan penegakan hukum dan pemajuan hak asasi manusia melalui penyelenggaraan pemasyarakatan yang profesional, akuntabel, dan transparan di wilayah Kalimantan Timur.
          </p>
        </div>
      </section>

      <div className="container mt-10 md:mt-16 space-y-16 md:space-y-24">
        {/* Sejarah Singkat */}
        <section>
          <div className="text-center mt-8 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00223D]">Sejarah & Profil Singkat</h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#E8C84A] mx-auto mt-4 rounded-full" />
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-4">
            <p>
              Kantor Wilayah Direktorat Jenderal Pemasyarakatan Kalimantan Timur
              merupakan instansi vertikal di daerah yang berada di bawah
              Direktorat Jenderal Pemasyarakatan yang merupakan bagian dari
              Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia.
              Keberadaan kantor wilayah ini merupakan bagian dari upaya pemerintah
              dalam menyelenggarakan sistem pemasyarakatan yang efektif,
              terkoordinasi, dan sesuai dengan kebijakan nasional di bidang
              pemasyarakatan.
            </p>
            <p>
              Dalam menjalankan tugas dan fungsinya, Kantor Wilayah Direktorat
              Jenderal Pemasyarakatan Kalimantan Timur memiliki peran strategis
              dalam pembinaan, pengamanan, serta peningkatan kualitas pelayanan
              pemasyarakatan di wilayah Kalimantan Timur. Melalui berbagai program
              pembinaan dan pengawasan, kantor wilayah ini terus berupaya
              mewujudkan sistem pemasyarakatan yang humanis dan berkeadilan.
            </p>
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00223D]">Visi & Misi</h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#E8C84A] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border-t-4 border-[#E8C84A] shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#082D4B] rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-[#E8C84A]" size={28} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00223D] mb-4">Visi</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                "Terwujudnya Pemasyarakatan yang Profesional dalam Mendukung Penegakan Hukum Berbasis Hak Asasi Manusia yang Berkeadilan untuk Mewujudkan Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian, berlandaskan Gotong Royong."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border-t-4 border-[#E8C84A] shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#082D4B] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-[#E8C84A]" size={28} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#00223D] mb-4">Misi</h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Mendukung Penegakan Hukum di Bidang Penyelenggaraan Pemasyarakatan yang Bebas dari Korupsi, Bermartabat dan Terpercaya",
                  "Ikut Serta dalam Menjaga Stabilitas Kemanan Melalui Peran Pemasyarakatan",
                  "Mewujudkan Penyelenggaraan Pemasyarakatan yang Profesional dalam Mendukung Penegakan Hukum Berbasis Hak Asasi Manusia yang Berkeadilan",
                  "Melaksanakan Tata Laksana Pemerintahan yang Baik Melalui Reformasi Birokrasi"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#E8C84A]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-bold text-sm text-[#00223D]">{idx + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Tugas dan Fungsi */}
        <section>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00223D]">Tugas dan Fungsi</h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#E8C84A] mx-auto mt-4 rounded-full" />
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Berdasarkan Pasal 4 Undang-Undang Nomor 22 Tahun 2022 tentang Pemasyarakatan, penyelenggaraan sistem pemasyarakatan mencakup 6 fungsi utama:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-4 md:gap-6">
              {[
                "Pelayanan: Pemenuhan hak dasar dan perlindungan bagi tahanan dan anak pada proses peradilan.",
                "Pembinaan: Kegiatan untuk memulihkan kesadaran, mengembangkan potensi, dan memperbaiki kualitas warga binaan.",
                "Pembimbingan Kemasyarakatan: Pendampingan dan pengawasan terhadap klien pemasyarakatan yang menjalani integrasi sosial.",
                "Perawatan: Pemeliharaan kesehatan fisik dan mental bagi tahanan dan narapidana.",
                "Pengamanan: Menjaga keamanan, ketertiban, dan pencegahan gangguan di dalam maupun luar fasilitas pemasyarakatan.",
                "Pengamatan: Pengamatan dan penilaian berkala terhadap perilaku dan perkembangan warga binaan."
              ].map((tugas, idx) => {
                const [title, ...descArr] = tugas.split(':');
                const desc = descArr.join(':');
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#E8C84A]/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-[#00223D]">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700">
                      {desc ? <><span className="font-bold text-[#00223D]">{title}:</span>{desc}</> : title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00223D]">Struktur Organisasi</h2>
            <div className="w-16 md:w-20 h-1.5 bg-[#E8C84A] mx-auto mt-4 rounded-full" />
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col items-center">
            {/* Background Pattern */}
            <Users className="absolute -bottom-10 -right-10 text-gray-50 opacity-50" size={200} />

            <div className="relative z-10 w-full max-w-4xl">
              {/* Level 1 */}
              <div className="flex justify-center mb-8 md:mb-10">
                <div className="bg-[#00223D] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-md border-b-4 border-[#E8C84A] text-center w-56 sm:w-64">
                  <p className="font-bold text-sm md:text-base">Kepala Kantor Wilayah</p>
                </div>
              </div>

              {/* Connector line vertically */}
              <div className="w-0.5 h-8 md:h-10 bg-gray-300 mx-auto -mt-8 md:-mt-10 mb-0" />

              {/* Level 2 */}
              <div className="flex justify-center mb-8 md:mb-10">
                <div className="bg-[#082D4B] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-md border-b-4 border-[#E8C84A] text-center w-56 sm:w-64">
                  <p className="font-bold text-sm md:text-base">Kepala Bagian Tata Usaha dan Umum</p>
                </div>
              </div>

              {/* Connector line horizontally & vertically */}
              <div className="w-0.5 h-8 md:h-10 bg-gray-300 mx-auto -mt-8 md:-mt-10 mb-0" />
              <div className="w-full max-w-2xl h-0.5 bg-gray-300 mx-auto hidden md:block" />

              {/* Level 3 */}
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-0 md:pt-6">
                <div className="relative flex flex-col items-center w-full md:w-auto">
                  <div className="w-0.5 h-6 bg-gray-300 absolute -top-6 hidden md:block" />
                  <div className="w-0.5 h-4 bg-gray-300 absolute -top-4 md:hidden" />
                  <div className="bg-white border-2 border-[#00223D] text-[#00223D] px-4 py-3 rounded-lg shadow-sm text-center w-full sm:w-56 hover:bg-gray-50 transition">
                    <p className="font-semibold text-sm">Bidang Pelayanan dan Pembinaan</p>
                  </div>
                </div>
                <div className="relative flex flex-col items-center w-full md:w-auto">
                  <div className="w-0.5 h-6 bg-gray-300 absolute -top-6 hidden md:block" />
                  <div className="w-0.5 h-4 bg-gray-300 absolute -top-4 md:hidden" />
                  <div className="bg-white border-2 border-[#00223D] text-[#00223D] px-4 py-3 rounded-lg shadow-sm text-center w-full sm:w-56 hover:bg-gray-50 transition">
                    <p className="font-semibold text-sm">Bidang Pembimbingan Kemasyarakatan</p>
                  </div>
                </div>
                <div className="relative flex flex-col items-center w-full md:w-auto">
                  <div className="w-0.5 h-6 bg-gray-300 absolute -top-6 hidden md:block" />
                  <div className="w-0.5 h-4 bg-gray-300 absolute -top-4 md:hidden" />
                  <div className="bg-white border-2 border-[#00223D] text-[#00223D] px-4 py-3 rounded-lg shadow-sm text-center w-full sm:w-56 hover:bg-gray-50 transition">
                    <p className="font-semibold text-sm">Bidang Perawatan, Pengamanan, dan Kepatuhan Internal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profil Pimpinan */}
        <section className="bg-[#082D4B] rounded-3xl overflow-hidden shadow-2xl text-white mt-12 md:mt-16 mx-auto">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-4 lg:col-span-4 bg-gray-100 flex items-center justify-center p-6 sm:p-8 relative">
              <div className="absolute top-0 left-0 w-full h-2 md:w-2 md:h-full bg-[#E8C84A]" />
              <Image
                src="/kanwil-ditjenpas-kaltim/assets/logo_pas.png"
                alt="Logo Pas"
                width={200}
                height={200}
                className="opacity-20 absolute inset-0 m-auto"
              />
              <div className="w-40 h-56 md:w-48 md:h-64 bg-gray-300 rounded-xl border-4 border-white shadow-xl flex items-center justify-center relative z-10 overflow-hidden">
                <span className="text-gray-500 font-medium text-sm md:text-base">Foto Pimpinan</span>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-8 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-[#E8C84A] font-semibold tracking-wider text-xs md:text-sm mb-2 uppercase">Profil Pimpinan</h3>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Nama Kepala Kantor Wilayah</h2>
              <p className="text-white/70 font-medium mb-4 md:mb-6 text-sm md:text-base">NIP. 1970XXXX XXXX XX X</p>

              <div className="space-y-4 text-white/80 leading-relaxed text-justify">
                <p>
                  Lahir di (Nama Kota), beliau telah mendedikasikan sebagian besar karirnya untuk Kementerian Imigrasi dan Pemasyarakatan Republik Indonesia, khususnya pada Direktorat Jenderal Pemasyarakatan.
                </p>
                <p>
                  Berkomitmen kuat untuk mewujudkan birokrasi yang bersih dan melayani, serta berfokus pada pendekatan humanis dalam proses pemasyarakatan dan reintegrasi sosial warga binaan pemasyarakatan di wilayah Kalimantan Timur.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
