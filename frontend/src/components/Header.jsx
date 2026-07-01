import { useEffect, useState } from "react";

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
      <circle cx="20" cy="12" r="3.2" fill="#E6C9A0" />
      <circle cx="27" cy="20" r="3.2" fill="#C08A4E" />
      <circle cx="20" cy="28" r="3.2" fill="#8A5830" />
      <circle cx="13" cy="20" r="3.2" fill="#C08A4E" />
      <circle cx="20" cy="20" r="3.6" fill="#F3E4CE" />
    </svg>
  );
}

export default function Header({ onOpenClassifier }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-batik-100/10 bg-batik-950/50 px-4 py-3 shadow-lg shadow-batik-950/30 backdrop-blur-xl">
          <a href="#beranda" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="leading-tight">
              <p className="font-bold tracking-wide text-batik-50">SI-KATIK</p>
              <p className="hidden text-[11px] text-batik-200/70 sm:block">
                Sistem Identifikasi Motif Batik
              </p>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-batik-100/80 md:flex">
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

          <button
            type="button"
            onClick={onOpenClassifier}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-batik-400 to-batik-600 px-4 py-2.5 text-sm font-semibold text-batik-950 shadow-md shadow-batik-900/30 transition-transform hover:scale-[1.03] active:scale-95"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Klasifikasi</span>
          </button>
        </div>
      </div>
    </header>
  );
}
