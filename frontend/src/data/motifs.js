// Daftar motif batik yang dikenali oleh model.
// Urutan `id` harus selaras dengan CLASS_NAMES pada backend (app.py).
export const BATIK_MOTIFS = [
  {
    id: "kawung",
    name: "Kawung",
    origin: "Yogyakarta & Surakarta",
    description:
      "Motif geometris berbentuk bulatan lonjong menyerupai buah kolang-kaling, melambangkan kesucian dan keadilan.",
    usageEthics:
      "Secara tradisi, Kawung dikaitkan dengan lingkungan keraton dan melambangkan kesucian serta pengendalian diri. Meski kini bebas dipakai sehari-hari, gunakan dengan rasa hormat terhadap makna filosofisnya dan hindari menjadikannya bahan parodi atau kostum yang merendahkan nilai budayanya.",
  },
  {
    id: "megamendung",
    name: "Mega Mendung",
    origin: "Cirebon",
    description:
      "Motif awan bergaris gradasi warna yang melambangkan kesabaran dan pengendalian diri dalam menghadapi masalah.",
    usageEthics:
      "Mega Mendung lahir dari akulturasi budaya Cirebon dan relatif bebas dipakai dalam berbagai suasana. Etika utamanya adalah mengapresiasi makna kesabaran di baliknya serta mengutamakan produk batik asli (tulis/cap) karya perajin lokal agar warisan budaya ini tetap lestari.",
  },
  {
    id: "parang",
    name: "Parang",
    origin: "Jawa Tengah & Yogyakarta",
    description:
      "Motif diagonal menyerupai ombak laut yang melambangkan semangat pantang menyerah dan kekuatan.",
    usageEthics:
      "Beberapa varian Parang, terutama Parang Rusak Barong, secara historis merupakan motif larangan yang hanya dikenakan raja dan keluarga keraton Yogyakarta-Surakarta pada upacara tertentu. Untuk motif Parang pada umumnya penggunaannya lebih longgar, namun tetap bijak menghindari pemakaian pada forum resmi kenegaraan/keraton tanpa memahami konteks kehormatannya.",
  },
  {
    id: "sidomukti",
    name: "Sido Mukti",
    origin: "Surakarta",
    description:
      "Motif klasik sarat makna filosofis, melambangkan harapan hidup mulia, sejahtera, dan bahagia.",
    usageEthics:
      "Dalam adat Jawa, Sido Mukti umum dikenakan pengantin saat resepsi pernikahan sebagai doa harapan hidup mulia dan sejahtera. Bila dipakai di luar konteks pernikahan, tetap hormati nilai sakralnya, misalnya tidak menjadikannya busana untuk acara yang berkesan main-main.",
  },
  {
    id: "truntum",
    name: "Truntum",
    origin: "Surakarta",
    description:
      "Motif bertabur bunga kecil yang melambangkan cinta yang tumbuh kembali dan tulus tanpa pamrih.",
    usageEthics:
      "Truntum tradisinya dikenakan orang tua pengantin sebagai simbol cinta tulus yang tumbuh kembali, sehingga sarat makna kekeluargaan. Hargai konteks tersebut, dan bila dipakai di luar acara pernikahan, tetap jaga kepatutan sesuai norma berbusana yang berlaku.",
  },
];

// Pesan etika umum yang selalu ditampilkan bersama hasil prediksi apa pun,
// sebagai pengingat bahwa batik adalah warisan budaya, bukan sekadar motif visual.
export const GENERAL_BATIK_ETHICS = [
  "Batik telah diakui UNESCO sebagai Warisan Budaya Tak Benda sejak 2 Oktober 2009 — gunakan dan perkenalkan dengan bangga, bukan sekadar tren sesaat.",
  "Utamakan membeli batik tulis/cap asli dari perajin lokal untuk mendukung pelestarian budaya dan ekonomi kerajinan batik.",
  "Hasil deteksi pada aplikasi ini bersifat edukatif berbasis AI dan bukan sertifikasi resmi atas keaslian maupun nilai budaya suatu kain batik.",
];
