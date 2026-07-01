// Ikon SVG sederhana (abstrak, bukan reproduksi kain asli) yang mewakili
// pola khas tiap motif batik untuk kebutuhan tampilan UI.
const PATHS = {
  kawung: (
    <>
      <circle cx="12" cy="6" r="3.2" />
      <circle cx="18" cy="12" r="3.2" />
      <circle cx="12" cy="18" r="3.2" />
      <circle cx="6" cy="12" r="3.2" />
    </>
  ),
  megamendung: (
    <>
      <path d="M3 13c1.5-3 4-3 5.5-1s3.5 2 5-1 4-3 5.5 0" />
      <path d="M3 17c1.5-3 4-3 5.5-1s3.5 2 5-1 4-3 5.5 0" />
    </>
  ),
  parang: (
    <>
      <path d="M2 4l6 6-6 6" />
      <path d="M9 4l6 6-6 6" />
      <path d="M16 4l6 6-6 6" />
    </>
  ),
  sidomukti: (
    <>
      <rect x="8" y="2" width="8" height="8" transform="rotate(45 12 6)" />
      <rect x="8" y="14" width="8" height="8" transform="rotate(45 12 18)" />
    </>
  ),
  truntum: (
    <>
      <path d="M12 3l1.2 3.4L17 7.6l-3.8 1.2L12 12l-1.2-3.2L7 7.6l3.8-1.2z" />
      <circle cx="5" cy="18" r="1.3" />
      <circle cx="19" cy="18" r="1.3" />
    </>
  ),
};

export default function MotifIcon({ id, className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[id]}
    </svg>
  );
}
