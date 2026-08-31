"use client";

import { MapPin } from "lucide-react";

export default function UPTPage() {
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
          <div className="w-16 h-16 bg-[#E8C84A] rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg">
            <MapPin size={36} className="text-[#00223D]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Peta Unit Pelaksana Teknis
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Membawahi 16 Unit Pelaksana Teknis (Lapas, Rutan, dan Bapas) yang tersebar di seluruh wilayah kerja Provinsi Kalimantan Timur dan Utara.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 mt-8 md:mt-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="w-full aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/3] lg:aspect-[16/9] bg-gray-100 relative">
            <iframe
              src="https://kanwilditjenpaskaltim.github.io/peta-wilayah/"
              title="Peta Pemasyarakatan Kaltim"
              className="w-full h-full absolute inset-0 border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
