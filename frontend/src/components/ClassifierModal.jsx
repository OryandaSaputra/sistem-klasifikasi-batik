import { useEffect } from "react";
import { useClassifier } from "../hooks/useClassifier";
import UploadZone from "./UploadZone";
import ResultCard from "./ResultCard";

export default function ClassifierModal({ isOpen, onClose }) {
  const { preview, loading, result, error, selectFile, classify, reset } =
    useClassifier();

  // Kunci scroll body & tutup modal dengan tombol Escape saat modal terbuka.
  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    classify();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-batik-950/70 p-4 backdrop-blur-sm"
      onClick={(event) => event.target === event.currentTarget && handleClose()}
    >
      <div className="w-full max-w-md animate-fade-in-up rounded-3xl border border-batik-100/15 bg-batik-900/70 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-batik-50">
              Klasifikasi Motif Batik
            </h2>
            <p className="mt-1 text-sm text-batik-200/60">
              Unggah gambar untuk dianalisis oleh sistem
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup"
            className="rounded-full p-1.5 text-batik-200/70 transition-colors hover:bg-white/10 hover:text-batik-50"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <UploadZone preview={preview} onSelectFile={selectFile} />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-batik-400 to-batik-600 py-3 font-semibold text-batik-950 transition-transform hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Menganalisis...
              </span>
            ) : (
              "Deteksi Motif"
            )}
          </button>
        </form>

        {error && (
          <div className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {result && (
          <>
            <ResultCard result={result} />
            <button
              type="button"
              onClick={reset}
              className="mt-3 w-full text-center text-xs text-batik-200/60 underline underline-offset-2 hover:text-batik-50"
            >
              Coba gambar lain
            </button>
          </>
        )}
      </div>
    </div>
  );
}
