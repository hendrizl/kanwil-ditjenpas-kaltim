import Link from "next/link";
import { Calendar, ChevronRight, Newspaper, ArrowRight } from "lucide-react";
import { getNewsAPI } from "@/data/news";

export default async function BeritaPage() {
  const newsList = await getNewsAPI();

  // Berita pertama (terbaru) untuk Sorotan Utama
  const featured = newsList[0];
  // Sisanya untuk grid Berita Terbaru
  const remainingNews = newsList.slice(1);

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
            <Newspaper size={36} className="text-[#00223D]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Berita &amp; Publikasi
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Dapatkan informasi terbaru mengenai kegiatan, program unggulan, serta liputan seputar Kantor Wilayah Direktorat Jenderal Pemasyarakatan Kalimantan Timur.
          </p>
        </div>
      </section>

      <div className="container mt-8 md:mt-12 space-y-12 md:space-y-16">
        {/* Featured Article - Sorotan Utama (Berita Terbaru) */}
        {featured && (
          <section>
            <div className="flex items-center justify-between mb-8 mt-16">
              <h2 className="text-2xl font-bold text-[#00223D] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#E8C84A] rounded-full inline-block" />
                Sorotan Utama
              </h2>
            </div>

            <Link href={`/berita/${featured.slug}`} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row cursor-pointer hover:shadow-2xl transition-all">
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 md:hidden" />
                {featured.thumb_image ? (
                  <img src={featured.thumb_image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-[#082D4B] flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform duration-700">
                    <span className="text-lg font-medium">Gambar Utama Berita</span>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#E8C84A]/20 text-[#00223D] font-bold text-xs rounded-full">{featured.category}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} /> {featured.date}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#00223D] leading-tight mb-4 group-hover:text-blue-700 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-justify line-clamp-3">
                  {featured.excerpt}
                </p>

                <span className="flex items-center gap-2 text-[#00223D] font-bold hover:text-blue-700 transition-colors w-fit group/btn">
                  Baca Selengkapnya
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Latest News Grid - Berita Terbaru */}
        {remainingNews.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#00223D] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#E8C84A] rounded-full inline-block" />
                Berita Terbaru
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {remainingNews.map((news, idx) => (
                <Link href={`/berita/${news.slug}`} key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group flex flex-col">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    {news.thumb_image ? (
                      <img src={news.thumb_image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-[#05284E] flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
                        <span className="text-white/30 text-sm">Ilustrasi Berita</span>
                      </div>
                    )}
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
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 rounded-xl bg-gray-100 text-[#00223D] font-bold hover:bg-gray-200 transition-colors shadow-sm">
                Muat Lebih Banyak
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
