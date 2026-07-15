// ============================================
// ADough — script.js
// Logic interaktif: render produk, filter kategori,
// keranjang belanja, dark mode, drawer, checkout WA
// ============================================

function claimPromo() {
    alert("🎉 Promo berhasil diklaim!");

    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");

    toastMsg.textContent = "🎉 Promo Beli 6 Gratis 1 berhasil diklaim!";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

}
 
let keranjang = []; // { id, jumlah }
let kategoriAktif = "semua";

// ---------- UTIL ----------
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function cariProduk(id) {
  return daftarProduk.find((p) => p.id === id);
}

// ---------- RENDER PRODUK ----------
function renderProduk() {
  const grid = document.getElementById("gridProduk");
  const hasil = kategoriAktif === "semua"
    ? daftarProduk
    : daftarProduk.filter((p) => p.kategori === kategoriAktif);

  grid.innerHTML = hasil.map((p) => `
    <div class="kartu-produk">
      <div class="gambar-produk">
        ${p.lencana ? `<span class="lencana">${p.lencana}</span>` : ""}
        <button class="tombol-suka" aria-label="Suka produk">🤍</button>
        <img src="${p.gambar}" alt="${p.nama}">
      </div>
      <h3 class="nama-produk">${p.nama}</h3>
      <p style="font-size:13px; color:var(--teks-abu); margin-bottom:10px;">${p.deskripsi}</p>
      <div class="baris-produk">
        <span class="harga">${formatRupiah(p.harga)}</span>
        <span class="rating">★ ${p.rating} (${p.ulasan})</span>
      </div>
      <button class="tombol-tambah" onclick="tambahKeKeranjang(${p.id})">
        🛒 <span data-i18n="produk.tambah">Tambah ke Keranjang</span>
      </button>
    </div>
  `).join("");

  // terapkan bahasa aktif ke elemen yang baru dirender
  if (typeof terapkanBahasa === "function") {
    terapkanBahasa(bahasaAktif);
  }
}

// ---------- FILTER KATEGORI ----------
document.getElementById("baris-filter").addEventListener("click", (e) => {
  const tombol = e.target.closest(".tombol-filter");
  if (!tombol) return;
  document.querySelectorAll(".tombol-filter").forEach((b) => b.classList.remove("aktif"));
  tombol.classList.add("aktif");
  kategoriAktif = tombol.dataset.kategori;
  renderProduk();
});

// ---------- KERANJANG ----------
function tambahKeKeranjang(id) {
  const ada = keranjang.find((item) => item.id === id);
  if (ada) {
    ada.jumlah += 1;
  } else {
    keranjang.push({ id, jumlah: 1 });
  }
  perbaruiKeranjang();
  tampilkanToast(`${cariProduk(id).nama} ditambahkan ke keranjang`);
}

function ubahJumlah(id, delta) {
  const item = keranjang.find((i) => i.id === id);
  if (!item) return;
  item.jumlah += delta;
  if (item.jumlah <= 0) {
    keranjang = keranjang.filter((i) => i.id !== id);
  }
  perbaruiKeranjang();
}

function hapusDariKeranjang(id) {
  keranjang = keranjang.filter((i) => i.id !== id);
  perbaruiKeranjang();
}

function totalJumlahKeranjang() {
  return keranjang.reduce((jumlah, i) => jumlah + i.jumlah, 0);
}

function subtotalKeranjang() {
  return keranjang.reduce((total, i) => total + cariProduk(i.id).harga * i.jumlah, 0);
}

function perbaruiKeranjang() {
  document.getElementById("jumlahKeranjang").textContent = totalJumlahKeranjang();

  const isiWrap = document.getElementById("isiKeranjang");
  const kaki = document.getElementById("kakiKeranjang");

  if (keranjang.length === 0) {
    isiWrap.innerHTML = `
      <div class="keranjang-kosong">
        <div class="ikon-besar">🛒</div>
        <p data-i18n="keranjang.kosong">Keranjang kamu masih kosong.<br>Yuk pilih donat favoritmu!</p>
      </div>`;
    kaki.style.display = "none";
    if (typeof terapkanBahasa === "function") terapkanBahasa(bahasaAktif);
    return;
  }

  kaki.style.display = "block";
  isiWrap.innerHTML = keranjang.map((item) => {
    const p = cariProduk(item.id);
    return `
      <div class="item-keranjang">
        <img src="${p.gambar}" alt="${p.nama}">
        <div class="info-item-keranjang">
          <h4>${p.nama}</h4>
          <span class="harga">${formatRupiah(p.harga)}</span>
          <div class="kontrol-jumlah">
            <button onclick="ubahJumlah(${p.id}, -1)">−</button>
            <span>${item.jumlah}</span>
            <button onclick="ubahJumlah(${p.id}, 1)">+</button>
          </div>
        </div>
        <button class="hapus-item" onclick="hapusDariKeranjang(${p.id})">🗑</button>
      </div>`;
  }).join("");

  const subtotal = subtotalKeranjang();
  document.getElementById("subtotalKeranjang").textContent = formatRupiah(subtotal);
  document.getElementById("totalKeranjang").textContent = formatRupiah(subtotal);
}

// ---------- DRAWER KERANJANG ----------
const panelKeranjang = document.getElementById("panelKeranjang");
const overlayKeranjang = document.getElementById("overlayKeranjang");

function bukaPanelKeranjang() {
  panelKeranjang.classList.add("terbuka");
  overlayKeranjang.classList.add("tampil");
}
function tutupPanelKeranjang() {
  panelKeranjang.classList.remove("terbuka");
  overlayKeranjang.classList.remove("tampil");
}

document.getElementById("bukaKeranjang").addEventListener("click", bukaPanelKeranjang);
document.getElementById("tutupKeranjang").addEventListener("click", tutupPanelKeranjang);
overlayKeranjang.addEventListener("click", tutupPanelKeranjang);

// ---------- PANEL NAVIGASI MOBILE ----------
const panelNavigasi = document.getElementById("panelNavigasi");
const overlayNavigasi = document.getElementById("overlayNavigasi");

function bukaPanelNavigasi() {
  panelNavigasi.classList.add("terbuka");
  overlayNavigasi.classList.add("tampil");
}
function tutupPanelNavigasi() {
  panelNavigasi.classList.remove("terbuka");
  overlayNavigasi.classList.remove("tampil");
}

document.getElementById("bukaNavigasi").addEventListener("click", bukaPanelNavigasi);
overlayNavigasi.addEventListener("click", tutupPanelNavigasi);
document.querySelectorAll(".panel-navigasi a").forEach((a) => {
  a.addEventListener("click", tutupPanelNavigasi);
});

// ---------- DARK MODE ----------
const tombolTema = document.getElementById("tombolTema");
tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const gelap = document.body.classList.contains("dark-mode");
  tombolTema.textContent = gelap ? "☀️" : "🌙";
});

// ---------- CHECKOUT VIA WHATSAPP ----------
document.getElementById("tombolCheckout").addEventListener("click", () => {
  if (keranjang.length === 0) {
    tampilkanToast("Keranjang masih kosong");
    return;
  }
  const baris = keranjang.map((item) => {
    const p = cariProduk(item.id);
    return `- ${p.nama} x${item.jumlah} = ${formatRupiah(p.harga * item.jumlah)}`;
  });
  const pesan =
    `Halo ADough! Saya mau pesan:\n\n` +
    baris.join("\n") +
    `\n\nTotal: ${formatRupiah(subtotalKeranjang())}\n\nMohon info untuk proses selanjutnya. Terima kasih!`;

  const nomorWa = "6281234567890"; // ganti dengan nomor WhatsApp toko ADough
  const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});

// ---------- TOAST ----------
let waktuToast;
function tampilkanToast(pesan) {
  const toast = document.getElementById("toast");
  document.getElementById("pesanToast").textContent = pesan;
  toast.classList.add("tampil");
  clearTimeout(waktuToast);
  waktuToast = setTimeout(() => toast.classList.remove("tampil"), 2200);
}

// ---------- NEWSLETTER ----------
document.getElementById("formNewsletter").addEventListener("submit", (e) => {
  e.preventDefault();
  tampilkanToast("Terima kasih sudah subscribe! 🎉");
  e.target.reset();
});

// ---------- INIT ----------
renderProduk();
perbaruiKeranjang();
