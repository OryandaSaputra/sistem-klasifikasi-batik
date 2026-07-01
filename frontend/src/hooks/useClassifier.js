import { useCallback, useState } from "react";
import axios from "axios";

// Ganti sesuai alamat backend Flask kamu. Bisa juga di-override lewat
// file .env pada folder frontend dengan variabel VITE_API_URL.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

function validateFile(file) {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return "Format file tidak didukung. Gunakan PNG, JPG, atau WEBP.";
  }
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return `Ukuran file maksimal ${MAX_FILE_SIZE_MB}MB.`;
  }
  return null;
}

/**
 * Mengelola seluruh state & logika alur klasifikasi gambar batik:
 * pemilihan file, validasi, pengiriman ke API, dan hasil prediksi.
 */
export function useClassifier() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const selectFile = useCallback((selected) => {
    if (!selected) return;

    const validationError = validateFile(selected);
    if (validationError) {
      setError(validationError);
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  }, []);

  const classify = useCallback(async () => {
    if (!file) {
      setError("Silakan pilih gambar terlebih dahulu.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(`${API_URL}/predict`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        setResult({ label: data.prediction, confidence: data.confidence });
      } else {
        setError("Gagal memproses gambar.");
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Terjadi kesalahan saat terhubung ke server. Pastikan backend berjalan.",
      );
    } finally {
      setLoading(false);
    }
  }, [file]);

  return { preview, loading, result, error, selectFile, classify, reset };
}
