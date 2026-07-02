import { BATIK_MOTIFS, GENERAL_BATIK_ETHICS } from "../data/motifs";

// Mencocokkan label hasil prediksi backend (mis. "sidomukti")
// dengan data motif di src/data/motifs.js.
function findMotif(label) {
  if (!label) return null;
  const normalized = label.toLowerCase().replace(/\s+/g, "");
  return (
    BATIK_MOTIFS.find((motif) => motif.id.toLowerCase() === normalized) || null
  );
}

export default function ResultCard({ result }) {
  const motif = findMotif(result.label);

  return (
    <div className="mt-6 space-y-4">
      {/* Kartu hasil prediksi */}
      <div className="rounded-2xl border border-batik-300/20 bg-gradient-to-br from-batik-300/10 to-batik-600/10 p-5 backdrop-blur-md">
        <p className="text-xs font-medium uppercase tracking-wide text-batik-200/70">
          Hasil Prediksi
        </p>
        <p className="mt-1 text-2xl font-bold capitalize text-batik-50">
          {motif?.name || result.label}
        </p>
        {motif?.origin && (
          <p className="mt-0.5 text-xs text-batik-200/60">
            Asal daerah: {motif.origin}
          </p>
        )}

        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-batik-950/40">
          <div
            className="h-full rounded-full bg-gradient-to-r from-batik-300 to-batik-500 transition-all duration-700"
            style={{ width: `${result.confidence}%` }}
          />
        </div>
        <p className="mt-2 text-right text-xs text-batik-200/60">
          Tingkat keyakinan: {result.confidence}%
        </p>
      </div>

      {/* Kartu etika penggunaan batik */}
      <div className="rounded-2xl border border-amber-300/20 bg-amber-500/5 p-5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 flex-shrink-0 text-amber-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200/80">
            Etika Penggunaan Batik
          </p>
        </div>

        {motif?.usageEthics && (
          <p className="mt-2 text-sm leading-relaxed text-batik-100/80">
            {motif.usageEthics}
          </p>
        )}

        <ul className="mt-3 space-y-1.5 border-t border-amber-300/10 pt-3">
          {GENERAL_BATIK_ETHICS.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 text-xs leading-relaxed text-batik-200/60"
            >
              <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-300/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
