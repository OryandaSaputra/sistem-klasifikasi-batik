export default function ResultCard({ result }) {
  return (
    <div className="mt-6 rounded-2xl border border-batik-300/20 bg-gradient-to-br from-batik-300/10 to-batik-600/10 p-5 backdrop-blur-md">
      <p className="text-xs font-medium uppercase tracking-wide text-batik-200/70">
        Hasil Prediksi
      </p>
      <p className="mt-1 text-2xl font-bold capitalize text-batik-50">
        {result.label}
      </p>

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
  );
}
