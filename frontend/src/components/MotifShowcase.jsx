import MotifIcon from "./MotifIcon";
import { BATIK_MOTIFS } from "../data/motifs";

const STEPS = [
  {
    title: "Unggah Gambar",
    desc: "Pilih atau seret foto kain batik yang ingin diidentifikasi motifnya.",
  },
  {
    title: "Analisis AI",
    desc: "Model MobileNetV2 memproses citra dan mengekstrak pola visual motif.",
  },
  {
    title: "Hasil Klasifikasi",
    desc: "Sistem menampilkan nama motif beserta tingkat keyakinan prediksi.",
  },
];

export default function MotifShowcase() {
  return (
    <section id="tentang" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cara kerja */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-batik-300">
            Cara Kerja
          </span>
          <h2 className="mt-3 text-3xl font-bold text-batik-50 sm:text-4xl">
            Tiga Langkah Sederhana
          </h2>
          <p className="mt-4 text-batik-200/70">
            SI-KATIK dirancang agar siapa pun dapat mengenali motif batik tanpa
            keahlian khusus.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-batik-100/10 bg-white/5 p-6 backdrop-blur-md transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-batik-400 to-batik-600 text-sm font-bold text-batik-950">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-batik-50">{step.title}</h3>
              <p className="mt-2 text-sm text-batik-200/60">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Motif yang dikenali */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-batik-300">
            Motif Dikenali
          </span>
          <h2 className="mt-3 text-3xl font-bold text-batik-50 sm:text-4xl">
            5 Motif Batik Nusantara
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {BATIK_MOTIFS.map((motif) => (
            <div
              key={motif.id}
              className="group rounded-2xl border border-batik-100/10 bg-white/5 p-5 text-center backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-batik-300/20 to-batik-600/20 text-batik-200 transition-colors group-hover:text-batik-100">
                <MotifIcon id={motif.id} />
              </div>
              <h3 className="mt-4 font-semibold text-batik-50">{motif.name}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-batik-300/70">
                {motif.origin}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-batik-200/60">
                {motif.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
