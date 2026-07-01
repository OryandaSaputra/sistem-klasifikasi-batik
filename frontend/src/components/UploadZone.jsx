import { useState } from "react";

export default function UploadZone({ preview, onSelectFile }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) onSelectFile(droppedFile);
  };

  return (
    <label
      htmlFor="dropzone-file"
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative flex h-56 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-colors ${
        isDragging
          ? "border-batik-300 bg-batik-300/10"
          : "border-batik-200/30 bg-white/5 hover:bg-white/10"
      }`}
    >
      {preview ? (
        <img
          src={preview}
          alt="Pratinjau gambar batik"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center px-6 text-center">
          <svg
            className="mb-3 h-9 w-9 text-batik-200/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 7.5m0 0L7.5 12m4.5-4.5v13.5"
            />
          </svg>
          <p className="text-sm font-medium text-batik-50">
            Klik atau seret gambar ke sini
          </p>
          <p className="mt-1 text-xs text-batik-200/50">
            PNG, JPG, atau WEBP · Maks 5MB
          </p>
        </div>
      )}
      <input
        id="dropzone-file"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
        onChange={(event) => {
          const selected = event.target.files?.[0];
          if (selected) onSelectFile(selected);
        }}
      />
    </label>
  );
}
