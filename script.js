// script.js — Fungsi interaktif untuk dashboard

// Elemen audio latar & suara klik
const audio = document.getElementById('bgmusic');
const icon = document.getElementById('music-icon');
const clickSound = document.getElementById('clickSound');

// Toggle music saat ikon diklik
if (icon && audio) {
  icon.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(e => console.warn("Autoplay error:", e));
    } else {
      setTimeout(() => {
        audio.pause();
      }, 200);
    }
  });
}

// Fungsi main tombol klik
function playClick() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// 🔍 Fitur pencarian konten
function searchContent() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const keyword = input.value.toLowerCase();
  const packs = document.querySelectorAll(".pack");

  packs.forEach(pack => {
    const keywords = pack.dataset.keywords.toLowerCase();
    pack.style.display = keywords.includes(keyword) ? "block" : "none";
  });
}

// 🌐 Bahasa Ganda + Simpan ke localStorage
function toggleLanguage() {
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) return;

  const lang = langSelect.value;
  localStorage.setItem("selectedLang", lang);

  document.querySelectorAll('.lang-id').forEach(el => {
    el.style.display = (lang === 'id' ? 'inline' : 'none');
  });
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = (lang === 'en' ? 'inline' : 'none');
  });
}

// Saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  // ✅ Tampilkan notifikasi jika dari index.html
  if (document.referrer.includes("index.html")) {
    const notif = document.getElementById("loginNotif");
    if (notif) {
      notif.style.display = "block";
      setTimeout(() => {
        notif.style.display = "none";
      }, 4000);
    }
  }

  // 🌐 Terapkan bahasa terakhir
  const savedLang = localStorage.getItem("selectedLang");
  if (savedLang) {
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = savedLang;
      toggleLanguage();
    }
  }

  // 🌓 Terapkan tema jika sebelumnya dipilih
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
  function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
  }
}

  // 🌓 Tombol ganti tema
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
});
