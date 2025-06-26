// script.js — Fungsi interaktif untuk dashboard

// Elemen audio latar & suara klik
const audio = document.getElementById('bgmusic');
const icon = document.getElementById('music-icon');
const clickSound = document.getElementById('clickSound');

// Toggle music saat ikon diklik
icon.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(e => console.warn("Autoplay error:", e));
  } else {
    setTimeout(() => {
      audio.pause();
    }, 200);
  }
});

// Fungsi main tombol klik
function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}