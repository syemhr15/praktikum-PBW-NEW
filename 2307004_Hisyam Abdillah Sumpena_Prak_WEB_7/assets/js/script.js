// Daftar produk (array of object)
const products = [
  { nama: "Laptop Asus ROG", harga: 25000000, stok: 5 },
  { nama: "Headset Logitech", harga: 1500000, stok: 10 },
  { nama: "Keyboard Mechanical", harga: 1200000, stok: 7 }
];

// Elemen tempat produk ditampilkan
const productList = document.getElementById("product-list");

// Fungsi untuk menampilkan produk di halaman
function tampilkanProduk() {
  productList.innerHTML = ""; // Kosongkan isi sebelumnya

  products.forEach((produk, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <h5 class="card-title">${produk.nama}</h5>
          <p class="card-text">Harga: Rp ${produk.harga.toLocaleString()}</p>
          <p class="card-text">Stok: <span id="stok-${index}">${produk.stok}</span></p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-success btn-sm" onclick="tambahStok(${index})">+</button>
            <button class="btn btn-danger btn-sm" onclick="kurangiStok(${index})">-</button>
          </div>
        </div>
      </div>
    `;
    productList.appendChild(card);
  });
}

// Fungsi untuk menambah stok
function tambahStok(index) {
  products[index].stok++;
  document.getElementById(`stok-${index}`).textContent = products[index].stok;
}

// Fungsi untuk mengurangi stok
function kurangiStok(index) {
  if (products[index].stok > 0) {
    products[index].stok--;
    document.getElementById(`stok-${index}`).textContent = products[index].stok;
  } else {
    alert("Stok sudah habis!");
  }
}

// Panggil fungsi tampilkan saat halaman dimuat
tampilkanProduk();