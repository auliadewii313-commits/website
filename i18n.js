// ============================================
// ADough — i18n.js
// Toggle bahasa Indonesia (ID) <-> Inggris (EN)
// ============================================

const kamus = {
  id: {
    "nav.beranda": "Beranda",
    "nav.menu": "Menu",
    "nav.lokasi": "Lokasi",
    "nav.cerita": "Cerita Kami",

    "hero.label": "🍩 Baru dipanggang setiap hari",
    "hero.judul1": "Donat Handmade,",
    "hero.judul2": "Segar Setiap Hari",
    "hero.deskripsi": "Dibuat dari bahan pilihan dengan resep rumahan yang diproofing perlahan. Lembut di dalam, manis pas di luar — cocok untuk teman ngopi atau hadiah spesial.",
    "hero.belanja": "Belanja Sekarang",
    "hero.lihatmenu": "Lihat Menu",
    "hero.stat1": "Donat terjual/minggu",
    "hero.stat2": "Rating pelanggan",
    "hero.stat3": "Varian rasa",
    "hero.koleksibaru": "Koleksi Baru",
    "hero.truffleberry": "Truffle Berry Delight",

    "kategori.judul": "Koleksi Artisan",
    "kategori.subjudul": "Jelajahi perjalanan rasa pilihan kami",
    "kategori.coklat": "Cokelat",
    "kategori.coklat.sub": "Keunggulan cokelat premium",
    "kategori.matcha": "Matcha",
    "kategori.stroberi": "Stroberi",
    "kategori.premium": "Kotak Premium",

    "produk.judul": "Menu Favorit Kami",
    "produk.subjudul": "Pilih rasa kesukaanmu, tambahkan ke keranjang",
    "produk.tambah": "Tambah ke Keranjang",

    "filter.semua": "Semua",
    "filter.klasik": "Klasik",
    "filter.premium": "Premium",
    "filter.segar": "Segar & Fruity",

    "promo.tag": "Promo Terbatas",
    "promo.judul": "Beli 6 Gratis 1",
    "promo.deskripsi": "Campur bebas semua rasa favoritmu, donat klasik ke-7 gratis untukmu.",
    "promo.klaim": "Klaim Promo",

    "alasan.judul": "Kenapa Pilih ADough?",
    "alasan.organik.judul": "Bahan Berkualitas",
    "alasan.organik.deskripsi": "Tepung dan bahan pilihan, tanpa pengawet, diadon dengan resep rumahan.",
    "alasan.segar.judul": "Selalu Segar",
    "alasan.segar.deskripsi": "Diproofing dan digoreng setiap hari, langsung diglazing sebelum dikirim.",
    "alasan.antar.judul": "Pengiriman Cepat",
    "alasan.antar.deskripsi": "Pesan lewat WhatsApp, Gojek, atau Grab — donat hangat sampai dalam 45 menit.",

    "galeri.judul": "Keceriaan di Feed",
    "galeri.subjudul": "Ikuti @ADoughArtisan untuk manisnya update setiap hari",
    "galeri.ikuti": "📷 Ikuti Kami",

    "newsletter.judul": "Gabung Sweet Club",
    "newsletter.deskripsi": "Dapatkan info rasa baru dan promo khusus member langsung ke email kamu.",
    "newsletter.placeholder": "Alamat email kamu",
    "newsletter.subscribe": "Subscribe",

    "footer.tagline": "Donat handmade dengan sentuhan cinta di setiap gigitan. Order online, ambil di toko, atau delivery langsung ke rumahmu.",
    "footer.jelajahi": "Jelajahi",
    "footer.hampers": "Paket Hampers",
    "footer.katering": "Katering",
    "footer.perusahaan": "Perusahaan",
    "footer.tentangkami": "Tentang Kami",
    "footer.karir": "Karir",
    "footer.kontak": "Kontak",
    "footer.mitraantar": "Mitra Pengiriman",
    "footer.copyright": "© 2026 ADough Artisan Donuts. Dibuat dengan sepenuh hati.",
    "footer.privasi": "Kebijakan Privasi",
    "footer.syarat": "Syarat & Ketentuan",

    "keranjang.judul": "Keranjang Belanja",
    "keranjang.subtotal": "Subtotal",
    "keranjang.total": "Total",
    "keranjang.checkout": "📱 Pesan via WhatsApp",
    "keranjang.pengiriman": "Atau Pesan Cepat via",
    "keranjang.kosong": "Keranjang kamu masih kosong.<br>Yuk pilih donat favoritmu!"
  },

  en: {
    "nav.beranda": "Home",
    "nav.menu": "Menu",
    "nav.lokasi": "Locations",
    "nav.cerita": "Our Story",

    "hero.label": "🍩 Freshly baked every day",
    "hero.judul1": "Handmade Donuts,",
    "hero.judul2": "Fresh Every Day",
    "hero.deskripsi": "Made from premium ingredients with a slow-proofed homemade recipe. Soft on the inside, perfectly sweet on the outside — great with coffee or as a special gift.",
    "hero.belanja": "Shop Now",
    "hero.lihatmenu": "View Menu",
    "hero.stat1": "Donuts sold/week",
    "hero.stat2": "Customer rating",
    "hero.stat3": "Flavor variants",
    "hero.koleksibaru": "New Collection",
    "hero.truffleberry": "Truffle Berry Delight",

    "kategori.judul": "Artisan Collections",
    "kategori.subjudul": "Explore our curated flavor journeys",
    "kategori.coklat": "Chocolate",
    "kategori.coklat.sub": "Premium chocolate excellence",
    "kategori.matcha": "Matcha",
    "kategori.stroberi": "Strawberry",
    "kategori.premium": "Premium Box",

    "produk.judul": "Our Favorite Menu",
    "produk.subjudul": "Pick your favorite flavor and add it to your cart",
    "produk.tambah": "Add to Cart",

    "filter.semua": "All",
    "filter.klasik": "Classic",
    "filter.premium": "Premium",
    "filter.segar": "Fresh & Fruity",

    "promo.tag": "Limited Time Offer",
    "promo.judul": "Buy 6 Get 1 Free",
    "promo.deskripsi": "Mix and match any of your favorite flavors, the 7th classic donut is on us.",
    "promo.klaim": "Claim Deal",

    "alasan.judul": "Why Choose ADough?",
    "alasan.organik.judul": "Quality Ingredients",
    "alasan.organik.deskripsi": "Premium flour and ingredients, no preservatives, made with a homemade recipe.",
    "alasan.segar.judul": "Always Fresh",
    "alasan.segar.deskripsi": "Proofed and fried daily, glazed right before delivery.",
    "alasan.antar.judul": "Fast Delivery",
    "alasan.antar.deskripsi": "Order via WhatsApp, Gojek, or Grab — warm donuts arrive within 45 minutes.",

    "galeri.judul": "Sweetness on Feed",
    "galeri.subjudul": "Follow @ADoughArtisan for your daily dose of sweetness",
    "galeri.ikuti": "📷 Follow Us",

    "newsletter.judul": "Join the Sweetest Club",
    "newsletter.deskripsi": "Get new flavor alerts and exclusive member-only offers straight to your inbox.",
    "newsletter.placeholder": "Your email address",
    "newsletter.subscribe": "Subscribe",

    "footer.tagline": "Handmade donuts made with love in every bite. Order online, pick up in store, or get it delivered.",
    "footer.jelajahi": "Explore",
    "footer.hampers": "Gift Hampers",
    "footer.katering": "Catering",
    "footer.perusahaan": "Company",
    "footer.tentangkami": "About Us",
    "footer.karir": "Careers",
    "footer.kontak": "Contact",
    "footer.mitraantar": "Delivery Partners",
    "footer.copyright": "© 2026 ADough Artisan Donuts. Crafted with love.",
    "footer.privasi": "Privacy Policy",
    "footer.syarat": "Terms & Conditions",

    "keranjang.judul": "Your Cart",
    "keranjang.subtotal": "Subtotal",
    "keranjang.total": "Total",
    "keranjang.checkout": "📱 Order via WhatsApp",
    "keranjang.pengiriman": "Or Quick Order via",
    "keranjang.kosong": "Your cart is still empty.<br>Go pick your favorite donut!"
  }
};

let bahasaAktif = "id";

function terapkanBahasa(bahasa) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (kamus[bahasa] && kamus[bahasa][key]) {
      el.innerHTML = kamus[bahasa][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (kamus[bahasa] && kamus[bahasa][key]) {
      el.setAttribute("placeholder", kamus[bahasa][key]);
    }
  });

  document.documentElement.setAttribute("lang", bahasa);
  const label = document.getElementById("labelBahasa");
  if (label) label.textContent = bahasa.toUpperCase();

  bahasaAktif = bahasa;
}

document.getElementById("tombolBahasa").addEventListener("click", () => {
  terapkanBahasa(bahasaAktif === "id" ? "en" : "id");
});

terapkanBahasa("id"); // bahasa default: Indonesia
