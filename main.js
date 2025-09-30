class Kursus {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }
}

class Pendaftaran {
    constructor(nama, email, kursus, durasi) {
        this.nama = nama;
        this.email =email;
        this.kursus = kursus;
        this.durasi = durasi;
    }
    hitung_total() {
        return this.kursus.harga * this.durasi;
    }
}

//list kursus bimbel online
const daftar_kursus = [
    new Kursus("Bahasa Inggris", 155000),
    new Kursus("Matematika", 150000),
    new Kursus("Kimia", 160000),
    new Kursus("Fisika", 130000),
    new Kursus("Biologi", 140000),
];

const list_kursus = document.getElementById("list_kursus");
const pilih_kursus = document.getElementById("pilih_kursus");
const form = document.getElementById("form_pendaftaran");
const output = document.getElementById("output");

// Tampilkan daftar kursus
daftar_kursus.forEach((k, index) => {
  // ke UL
  const li = document.createElement("li");
  li.textContent = `${k.nama}   Rp${k.harga}/bulan`;
  list_kursus.appendChild(li);

  // ke select
  const option = document.createElement("option");
  option.value = index;
  option.textContent = `${k.nama}   Rp${k.harga}/bulan`;
  pilih_kursus.appendChild(option); 
});


// Event submit form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const kursusDipilih = daftar_kursus[parseInt(pilih_kursus.value)];
  const durasi = parseInt(document.getElementById("bulan").value);
  
  const pendaftar = new Pendaftaran(nama, email, kursusDipilih, durasi);

  // tampilkan hasil
  output.innerHTML = `
    <h3>✅ Pendaftaran Berhasil</h3>
    Nama: ${pendaftar.nama} <br>
    Email: ${pendaftar.email} <br>
    Kursus: ${pendaftar.kursus.nama} <br>
    Durasi: ${pendaftar.durasi} bulan <br>
    Total Biaya: Rp${pendaftar.hitung_total().toLocaleString()}
    `;
});