import os
import io
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

app = Flask(__name__)

# Izinkan CORS agar frontend (React) dapat mengakses API ini.
# Set env var FRONTEND_URL di Railway (mis. https://nama-app-kamu.vercel.app)
# agar hanya domain tersebut yang diizinkan. Jika tidak diset, semua origin
# diizinkan (cocok untuk development lokal).
FRONTEND_URL = os.environ.get("FRONTEND_URL")
if FRONTEND_URL:
    CORS(app, resources={r"/*": {"origins": [FRONTEND_URL, "http://localhost:5173"]}})
else:
    CORS(app)

# Konfigurasi berdasarkan Notebook
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'model_batik_terbaik.h5')
IMG_SIZE = (300, 300)
CLASS_NAMES = ['kawung', 'megamendung', 'parang', 'sidomukti', 'truntum']

# Load model secara global agar hanya di-load sekali saat server menyala
print("Memuat model...")
try:
    # compile=False digunakan karena kita hanya butuh model untuk inferensi
    model = tf.keras.models.load_model(MODEL_PATH, compile=False)
    print("Model berhasil dimuat!")
except Exception as e:
    print(f"Gagal memuat model: {e}")
    model = None

def preprocess_image(image_bytes):
    """
    Menerima byte gambar, melakukan resize, konversi ke array,
    dan mengaplikasikan preprocessing bawaan MobileNetV2.
    """
    # Buka gambar menggunakan Pillow
    img = Image.open(io.BytesIO(image_bytes))
    
    # Konversi ke RGB jika gambar memiliki channel alpha (RGBA)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Resize sesuai IMG_SIZE di notebook
    img = img.resize(IMG_SIZE)
    
    # Konversi ke numpy array
    img_array = tf.keras.utils.img_to_array(img)
    
    # Tambahkan dimensi batch menjadi (1, 300, 300, 3)
    img_array = np.expand_dims(img_array, axis=0)
    
    # Aplikasikan preprocess_input khusus MobileNetV2
    img_array = preprocess_input(img_array)
    
    return img_array

@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint untuk memastikan server backend berjalan."""
    if model is None:
        return jsonify({"status": "error", "message": "Model tidak dimuat"}), 500
    return jsonify({"status": "ok", "message": "Server siap menerima request."}), 200

@app.route('/predict', methods=['POST'])
def predict():
    """Endpoint utama untuk inferensi gambar."""
    if model is None:
        return jsonify({"error": "Model internal server error"}), 500

    if 'file' not in request.files:
        return jsonify({"error": "Tidak ada file gambar yang dikirim"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "Nama file kosong"}), 400

    try:
        # Membaca byte dari file
        image_bytes = file.read()
        
        # Preprocessing gambar
        processed_img = preprocess_image(image_bytes)
        
        # Inferensi model
        predictions = model.predict(processed_img)
        
        # Mengambil nilai probabilitas tertinggi
        predicted_index = np.argmax(predictions[0])
        confidence = float(predictions[0][predicted_index]) * 100
        predicted_class = CLASS_NAMES[predicted_index]
        
        return jsonify({
            "success": True,
            "prediction": predicted_class,
            "confidence": round(confidence, 2)
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Jalankan di port 5000
    app.run(host='0.0.0.0', port=5000, debug=True)