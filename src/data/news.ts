export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  thumb_image?: string;
  content_image?: string;
  author?: string;
}

export const DUMMY_NEWS: NewsItem[] = [
  {
    slug: "sosialisasi-pemenuhan-ham",
    title: "Sosialisasi Pemenuhan Hak Asasi Manusia bagi Warga Binaan",
    category: "Pembinaan",
    date: "20 Agustus 2026",
    excerpt: "Langkah konkrit kanwil dalam memastikan seluruh UPT menerapkan standar HAM yang ketat dalam pembinaan sehari-hari.",
    content: `
      <p>Kantor Wilayah Kementerian Hukum dan HAM (sekarang Kementerian Imigrasi dan Pemasyarakatan) Kalimantan Timur terus berupaya memastikan seluruh Unit Pelaksana Teknis (UPT) Pemasyarakatan di wilayahnya menerapkan standar Hak Asasi Manusia (HAM) secara ketat dan konsisten.</p>
      <br/>
      <p>Pada hari ini, diselenggarakan kegiatan sosialisasi yang dihadiri oleh seluruh Kepala UPT dan perwakilan petugas pengamanan serta pembinaan. Kegiatan ini difokuskan pada pemberian pemahaman mendalam terkait pemenuhan hak-hak dasar Warga Binaan Pemasyarakatan (WBP).</p>
      <br/>
      <p>Kepala Kantor Wilayah menekankan bahwa pemasyarakatan tidak lagi tentang penghukuman semata, melainkan sistem pembinaan yang memanusiakan manusia. "Setiap warga binaan berhak atas perlakuan yang bermartabat, pelayanan kesehatan yang layak, serta akses terhadap pembinaan kemandirian," ujarnya.</p>
    `
  },
  {
    slug: "kunjungan-kerja-kakanwil-lapas-samarinda",
    title: "Kunjungan Kerja Kakanwil ke Lapas Kelas IIA Samarinda",
    category: "Kunjungan",
    date: "18 Agustus 2026",
    excerpt: "Meninjau langsung sarana prasarana serta fasilitas kesehatan yang ada di dalam Lapas guna memastikan kelayakan operasional.",
    content: `
      <p>Dalam rangka memastikan operasional berjalan sesuai SOP, Kepala Kantor Wilayah melakukan kunjungan kerja mendadak (Sidak) ke Lembaga Pemasyarakatan (Lapas) Kelas IIA Samarinda pagi ini.</p>
      <br/>
      <p>Kunjungan difokuskan pada peninjauan fasilitas dapur sehat, poliklinik, dan area blok hunian. Kakanwil mengapresiasi kebersihan dapur yang dikelola dengan sangat baik dan telah mendapatkan sertifikat laik higiene dari dinas kesehatan setempat.</p>
    `
  },
  {
    slug: "sinergitas-aparat-penegak-hukum",
    title: "Sinergitas Aparat Penegak Hukum dalam Pengamanan UPT",
    category: "Keamanan",
    date: "15 Agustus 2026",
    excerpt: "Kerjasama strategis antara Ditjenpas dengan Kepolisian daerah Kalimantan Timur resmi diperkuat melalui MoU terbaru.",
    content: `
      <p>Kantor Wilayah menguatkan komitmen menjaga stabilitas keamanan di dalam Lapas dan Rutan melalui penandatanganan Memorandum of Understanding (MoU) bersama Kepolisian Daerah Kalimantan Timur.</p>
      <br/>
      <p>Fokus kerja sama ini mencakup patroli sambang rutin oleh pihak kepolisian, pertukaran informasi intelijen, serta bantuan personel pengamanan dalam kondisi kontinjensi (darurat).</p>
    `
  },
  {
    slug: "pelatihan-kemandirian-bersertifikat",
    title: "Pelatihan Kemandirian Bersertifikat bagi Narapidana",
    category: "Pelatihan",
    date: "10 Agustus 2026",
    excerpt: "Warga binaan diberikan bekal keterampilan mulai dari perbengkelan hingga tata boga agar siap kembali ke masyarakat.",
    content: `
      <p>Program pembinaan kemandirian terus digenjot oleh Kanwil Ditjenpas Kaltim. Kali ini, bekerja sama dengan Balai Latihan Kerja (BLK) provinsi, dilaksanakan pelatihan bersertifikat bagi ratusan narapidana di berbagai Lapas dan Rutan.</p>
      <br/>
      <p>Jenis pelatihan mencakup perbengkelan otomotif, pengelasan, pertukangan kayu, hingga tata boga dan barista. Sertifikat keahlian ini diharapkan menjadi modal penting bagi warga binaan setelah bebas.</p>
    `
  },
  {
    slug: "deklarasi-janji-kinerja-2026",
    title: "Deklarasi Janji Kinerja Tahun 2026",
    category: "Internal",
    date: "05 Agustus 2026",
    excerpt: "Seluruh jajaran pegawai Kemenkumham Kaltim menandatangani pakta integritas guna mewujudkan WBK/WBBM.",
    content: `
      <p>Sebagai bentuk komitmen terhadap reformasi birokrasi, seluruh Kepala UPT dan jajaran pegawai mengikuti apel Deklarasi Janji Kinerja Tahun 2026 di halaman Kantor Wilayah.</p>
      <br/>
      <p>Deklarasi ini menjadi pijakan awal dalam upaya meraih predikat Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM) untuk seluruh unit kerja di wilayah Kaltim.</p>
    `
  },
  {
    slug: "pemusnahan-barang-bukti-razia",
    title: "Pemusnahan Barang Bukti Hasil Penggeledahan",
    category: "Keamanan",
    date: "01 Agustus 2026",
    excerpt: "Transparansi hasil razia rutin dibuktikan dengan pemusnahan barang-barang terlarang yang ditemukan di kamar hunian.",
    content: `
      <p>Sebagai wujud Zero Halinar (Handphone, Pungli, dan Narkoba), jajaran Divisi Pemasyarakatan Kaltim memusnahkan ratusan barang sitaan hasil penggeledahan rutin di berbagai Lapas dan Rutan selama satu semester terakhir.</p>
      <br/>
      <p>Barang bukti yang dimusnahkan meliputi ponsel rakitan, charger, kabel-kabel liar, hingga senjata tajam buatan sendiri. Pemusnahan ini disaksikan oleh aparat kepolisian dan perwakilan masyarakat.</p>
    `
  }
];

/**
 * Mengkonversi URL Google Drive sharing link menjadi direct image URL.
 * Menggunakan beberapa endpoint untuk kompatibilitas maksimal.
 * Format input:  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Format output: https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
 */
function convertGDriveUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  
  // Match Google Drive file links
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // Use thumbnail endpoint with large size — most reliable for embedding
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  // Also handle ?id= format
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
  }

  // If it's already a direct image URL, return as-is
  return url;
}

export async function getNewsAPI(): Promise<NewsItem[]> {
  const apiUrl = process.env.NEXT_PUBLIC_GAS_API_URL;
  if (!apiUrl) {
    console.warn("NEXT_PUBLIC_GAS_API_URL is not set. Using DUMMY_NEWS.");
    return DUMMY_NEWS;
  }

  try {
    // Matikan cache saat development (npm run dev) agar perubahan di Google Sheets langsung terlihat.
    // Saat build/produksi (npm run build), gunakan 'force-cache' karena static export membutuhkan ini.
    const isDev = process.env.NODE_ENV === 'development';
    const res = await fetch(apiUrl, { 
      cache: isDev ? 'no-store' : 'force-cache' 
    });
    if (!res.ok) throw new Error(`Failed to fetch news API (HTTP ${res.status})`);
    
    const responseData = await res.json();

    // Handle API-level errors (e.g. sheet not found)
    if (responseData.status === "error") {
      console.error("GAS API error:", responseData.message);
      return DUMMY_NEWS;
    }

    // Validate response structure
    if (!Array.isArray(responseData.data)) {
      console.error("GAS API returned unexpected format:", JSON.stringify(responseData).slice(0, 200));
      return DUMMY_NEWS;
    }

    // If empty data, fallback
    if (responseData.data.length === 0) {
      console.warn("GAS API returned empty data. Using DUMMY_NEWS.");
      return DUMMY_NEWS;
    }

    // Sort by published_at descending (newest first)
    const sortedData = responseData.data.sort((a: any, b: any) => {
      const dateA = a.published_at ? new Date(a.published_at).getTime() : 0;
      const dateB = b.published_at ? new Date(b.published_at).getTime() : 0;
      return dateB - dateA;
    });

    // Map Google Sheet columns to NewsItem interface
    return sortedData.map((item: any) => {
      let formattedDate = "Tidak ada tanggal";
      if (item.published_at) {
        try {
          const d = new Date(item.published_at);
          if (!isNaN(d.getTime())) {
            formattedDate = d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
          }
        } catch {
          // ignore date parse error
        }
      }

      return {
        slug: item.slug || "",
        title: item.title || "Tanpa Judul",
        category: item.category_name || "Berita",
        date: formattedDate,
        excerpt: item.excerpt || "",
        content: item.content || "",
        thumb_image: convertGDriveUrl(item.thumb_image),
        content_image: convertGDriveUrl(item.content_image),
        author: item.author_name || "Admin",
      };
    });
  } catch (error) {
    console.error("Error fetching news from API:", error);
    return DUMMY_NEWS;
  }
}

