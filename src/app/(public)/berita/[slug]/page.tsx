import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft, Share2, Link2, MessageCircle, Mail } from "lucide-react";
import { DUMMY_NEWS } from "@/data/news";

export function generateStaticParams() {
  return DUMMY_NEWS.map((news) => ({
    slug: news.slug,
  }));
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  if (!news) {
    notFound();
  }

  const relatedNews = DUMMY_NEWS.filter((n) => n.slug !== news.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-24">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#00223D] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container relative z-10">
          <Link href="/berita" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> Kembali ke Berita
          </Link>

          <div className="max-w-4xl">
            <span className="px-4 py-1.5 bg-[#E8C84A] text-[#00223D] font-bold text-sm uppercase tracking-wider rounded-lg mb-6 inline-block">
              {news.category}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-[#E8C84A]" /> {news.date}
              </span>
              <span className="flex items-center gap-2">
                Oleh <span className="font-bold text-white">Humas Kanwil Kaltim</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-[-20px] md:mt-[-40px] relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100">
              <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-8 md:mb-10 relative overflow-hidden flex items-center justify-center">
                {/* Replace with actual Image when available */}
                <div className="absolute inset-0 bg-[#05284E] flex items-center justify-center opacity-90">
                  <span className="text-white/40 text-lg font-medium">Gambar Utama Berita</span>
                </div>
              </div>

              <div
                className="text-gray-700 leading-relaxed text-lg text-justify [&>p]:mb-6 [&>p]:text-gray-700"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700 flex items-center gap-2">
                    <Share2 size={18} /> Bagikan:
                  </span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Link2 size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                      <MessageCircle size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 sticky top-24 md:top-32">
              <h3 className="text-xl font-bold text-[#00223D] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#E8C84A] rounded-full inline-block" />
                Berita Terkait
              </h3>

              <div className="space-y-6">
                {relatedNews.map((relNews) => (
                  <Link href={`/berita/${relNews.slug}`} key={relNews.slug} className="group block">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-xl bg-gray-200 shrink-0 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#05284E] flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-500">
                          <span className="text-white/30 text-[10px]">Ilustrasi</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[11px] text-[#E8C84A] font-bold uppercase tracking-wider mb-1">
                          {relNews.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#00223D] leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                          {relNews.title}
                        </h4>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Calendar size={10} /> {relNews.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/berita" className="mt-8 w-full py-3 rounded-xl border-2 border-[#00223D] text-[#00223D] font-bold flex items-center justify-center gap-2 hover:bg-[#00223D] hover:text-white transition-colors">
                Lihat Semua Berita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
