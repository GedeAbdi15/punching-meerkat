const tanah = document.querySelectorAll(".tanah");
const meerkat = document.querySelectorAll(".meerkat");
const papanScore = document.querySelector("#score");

let tanahBefore;
let selesai, score;

// fungsi untuk merandom tanah yang mana yang akan muncul meerkat
function tanahRandom(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  if (tRandom == tanahBefore) {
    tanahRandom(tanah);
  }

  tanahBefore = tRandom;
  return tRandom;
}

function waktuRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// fungsi untuk memunculkan class muncul
function munculMeerkat() {
  const tRandom = tanahRandom(tanah);
  const waktu = waktuRandom(500, 1000);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculMeerkat();
    }
  }, waktu);
}

function mulai() {
  selesai = false;
  score = 0;
  papanScore.textContent = 0;

  munculMeerkat();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  score++;
  papanScore.textContent = score;
  this.parentNode.classList.remove("muncul");
  this.style.transition = "TOP 0s";
}

meerkat.forEach((m) => {
  m.addEventListener("click", pukul);
});
