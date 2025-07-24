const GAS_URL = "https://script.google.com/macros/s/AKfycbxBFUwoOXzc5SBQf2itjiiMiXNgXVLXWsQUH0Cn3vU2qNIBAUhBK6GGLIPZJt8qUO-HUA/exec";

function showPopup(msg) {
  const popup = document.getElementById("popup");
  popup.textContent = msg;
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) return showPopup("Isi semua kolom!");

  if (username === "Admin" && password === "Admin") {
    window.location.href = "dashboard.html";
    return;
  }

  fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({ action: "login", username, password }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
      } else {
        showPopup("Login gagal.");
      }
    })
    .catch(() => showPopup("Koneksi gagal."));
}

function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const tanggalLahir = document.getElementById("tgl").value.trim();
  const kelas = document.getElementById("kelas").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  if (!username || !password) return showPopup("Username dan password wajib diisi!");

  fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "signup",
      username,
      password,
      tanggalLahir,
      kelas,
      alamat
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        showPopup("Berhasil daftar!");
        setTimeout(() => (window.location.href = "index.html"), 2000);
      } else {
        showPopup("Gagal daftar.");
      }
    })
    .catch(() => showPopup("Koneksi gagal."));
}
