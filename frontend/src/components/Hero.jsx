import MotifIcon from "./MotifIcon";

const STATS = [
  ["5", "Motif Dikenali"],
  ["300px", "Resolusi Input"],
  ["MobileNetV2", "Arsitektur Model"],
];

const PREVIEW_ICONS = [
  "kawung",
  "megamendung",
  "parang",
  "sidomukti",
  "truntum",
  "kawung",
];

export default function Hero({ onOpenClassifier }) {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center pb-20 pt-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Kolom kiri: teks & CTA */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-batik-200/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-batik-100 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-batik-300 animate-pulse" />
              Computer Vision
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-batik-50 sm:text-5xl lg:text-6xl">
              Kenali Motif Batik{" "}
              <span className="bg-gradient-to-r from-batik-200 via-batik-300 to-batik-500 bg-clip-text text-transparent">
                Nusantara
              </span>{" "}
              dalam Sekejap
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base text-batik-100/70 sm:text-lg lg:mx-0">
              SI-KATIK memanfaatkan model deep learning untuk mengenali lima
              motif batik khas Indonesia hanya dari sebuah foto. Unggah gambar,
              dan biarkan sistem bekerja untuk Anda.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={onOpenClassifier}
                className="w-full rounded-xl bg-gradient-to-r from-batik-400 to-batik-600 px-7 py-3.5 font-semibold text-batik-950 shadow-lg shadow-batik-900/30 transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
              >
                Mulai Klasifikasi
              </button>
              <a
                href="#tentang"
                className="w-full rounded-xl border border-batik-100/20 bg-white/5 px-7 py-3.5 text-center font-semibold text-batik-50 backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto"
              >
                Pelajari Cara Kerja
              </a>
            </div>

            <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0">
              {STATS.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-batik-100/10 bg-white/5 px-3 py-4 text-center backdrop-blur-md"
                >
                  <p className="text-lg font-bold text-batik-50">{value}</p>
                  <p className="mt-1 text-[11px] text-batik-200/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom kanan: panel dekoratif kaca */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md rounded-[2.5rem] border border-batik-100/10 bg-gradient-to-br from-white/10 to-white/0 p-10 shadow-2xl backdrop-blur-xl">
              <div className="grid h-full grid-cols-3 place-items-center gap-4">
                {PREVIEW_ICONS.map((id, index) => (
                  <div
                    key={`${id}-${index}`}
                    className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 text-batik-300"
                  >
                    <MotifIcon id={id} className="h-8 w-8" />
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl border border-batik-100/15 bg-batik-900/80 p-4 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-wide text-batik-200/60">
                  Hasil Prediksi
                </p>
                <p className="mt-1 font-bold text-batik-50">Kawung</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-batik-950/50">
                  <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-batik-300 to-batik-500" />
                </div>
                <p className="mt-1 text-right text-[10px] text-batik-200/50">
                  97% yakin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
