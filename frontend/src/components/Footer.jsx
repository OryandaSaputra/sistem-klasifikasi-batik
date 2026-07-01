export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-batik-100/10 bg-batik-950/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-bold text-batik-50">SI-KATIK</p>
            <p className="mt-1 max-w-xs text-xs text-batik-200/60">
              Sistem Identifikasi Motif Batik berbasis Computer Vision — Proyek
              Ujian Akhir Semester.
            </p>
          </div>

          <nav className="flex gap-6 text-xs text-batik-200/70">
            <a
              href="#beranda"
              className="transition-colors hover:text-batik-50"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="transition-colors hover:text-batik-50"
            >
              Cara Kerja
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-batik-100/10 pt-6 text-center text-[11px] text-batik-200/50">
          © {year} SI-KATIK. Oryanda Saputra - 4 TI KID
        </div>
      </div>
    </footer>
  );
}
