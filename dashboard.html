<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Firebase Firestore & Storage Support -->
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
    import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBvP6inaHIQAlJZG5S96iAEcykO2AWaAyk",
      authDomain: "memeweb-94369.firebaseapp.com",
      projectId: "memeweb-94369",
      storageBucket: "memeweb-94369.appspot.com",
      messagingSenderId: "209198224630",
      appId: "1:209198224630:web:c4f4b0835def55523c88d7",
      measurementId: "G-G052ZX30V7"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    window.uploadFile = async function uploadFile() {
      const kategori = prompt("Masukkan kategori (misal: Album Perjalanan):");
      const judul = prompt("Masukkan judul file:");
      const deskripsi = prompt("Masukkan deskripsi singkat:");
      const fileInput = document.createElement('input');
      fileInput.type = 'file';

      fileInput.onchange = async () => {
        const file = fileInput.files[0];
        if (!file) {
          alert("Tidak ada file yang dipilih.");
          return;
        }

        try {
          const storageRef = ref(storage, 'uploads/' + file.name);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);

          await addDoc(collection(db, "koleksi"), {
            kategori: kategori,
            judul: judul,
            deskripsi: deskripsi,
            url: downloadURL,
            namaFile: file.name,
            tanggal: new Date().toISOString()
          });

          alert("✅ File berhasil diunggah dan data disimpan ke Firestore!");
        } catch (e) {
          console.error("❌ Gagal:", e);
          alert("Terjadi kesalahan saat upload atau simpan.");
        }
      };

      fileInput.click();
    };
  </script>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dashboard Pribadi</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>

  <!-- Navigasi dan Galeri -->
  <nav class="breadcrumb">
    <ul>
      <li><a href="dashboard.html">Beranda</a></li>
      <li>Dashboard</li>
      <button onclick="logout()">Logout</button>
    </ul>
  </nav>

  <!-- Galeri -->
  <div class="content-area">
    <div class="pack" data-keywords="dokumentasi keluarga video foto">
      <h2>📁 Dokumentasi Keluarga</h2>
      <p>10 Video | 100 Foto</p>
      <button class="btn-buy" onclick="uploadFile()">Upload File</button>
    </div>
    <!-- Tambahan galeri lainnya -->
  </div>

  <!-- Audio dan Icon Musik -->
  <audio id="bgmusic" autoplay loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
  </audio>
  <audio id="clickSound">
    <source src="https://www.myinstants.com/media/sounds/mouse-click.mp3" type="audio/mpeg">
  </audio>
  <div id="music-icon" title="Klik untuk play/pause">
    <svg viewBox="0 0 24 24">
      <path d="M9 3v12c-.6-.3-1.3-.5-2-.5-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V8l8-2v7c-.6-.3-1.3-.5-2-.5-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V3L9 5.5V3z"/>
    </svg>
  </div>

</body>
</html>
