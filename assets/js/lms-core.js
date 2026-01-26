/* =========================================================
   LMS CORE ENGINE
   PembelajarBelajar
   ========================================================= */

/* ===================== CONFIG ===================== */

const LMS_CONFIG = {
  passingScore: 70,
  totalMateri: 7, // ganti sesuai jumlah materi
};

/* ===================== UTIL ===================== */

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}

/* ===================== PROGRESS STEP ===================== */

function initMateriProgress(materiId) {
  loadStepProgress(materiId);
  updateStepProgress(materiId);

  qsa(".mark-done").forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      saveStepProgress(materiId);
      updateStepProgress(materiId);
    });
  });

  loadBadgeIfExists(materiId);
}

/* ---------- Save step checkbox ---------- */
function saveStepProgress(materiId) {
  const status = Array.from(qsa(".mark-done")).map(cb => cb.checked);
  localStorage.setItem(`${materiId}_steps`, JSON.stringify(status));
}

/* ---------- Load step checkbox ---------- */
function loadStepProgress(materiId) {
  const saved = JSON.parse(localStorage.getItem(`${materiId}_steps`));
  if (!saved) return;

  qsa(".mark-done").forEach((cb, i) => {
    cb.checked = saved[i] || false;
  });
}

/* ---------- Update progress bar ---------- */
function updateStepProgress(materiId) {
  const checkboxes = qsa(".mark-done");
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

  let percent = 0;
  if (total > 0) {
    percent = Math.round((checked / total) * 100);
  }

  const bar = qs("#progressBar");
  const label = qs("#progressLabel");
  // const text = qs("#progressPercent"); <-- INI HAPUS KARENA HTML SUDAH DIHAPUS

  if (!bar || !label) return; // Cek bar & label saja

  // 1. Update UI (Width & Position)
  bar.style.width = percent + "%";
  label.style.left = percent + "%";
  label.innerText = percent + "%";

  // 2. RESET WARNA (Hapus class lama dari Label DAN Bar)
  label.classList.remove("red", "yellow", "green");
  bar.classList.remove("red", "yellow", "green");

  // 3. SET WARNA BARU (Tambahkan ke Label DAN Bar)
  if (percent < 40) {
    label.classList.add("red");
    bar.classList.add("red");
  } else if (percent < 70) {
    label.classList.add("yellow");
    bar.classList.add("yellow");
  } else {
    label.classList.add("green");
    bar.classList.add("green");
  }
}

/* ===================== QUIZ RESULT ===================== */

function onQuizPassed(materiId, score) {
  saveQuizResult(materiId, score, true);
  showMateriBadge(materiId);
  unlockNextMateri(materiId);
  markMateriCompleted(materiId);
}

function onQuizFailed(materiId, score) {
  saveQuizResult(materiId, score, false);
}

/* ---------- Save quiz result ---------- */
function saveQuizResult(materiId, score, passed) {
  localStorage.setItem(`${materiId}_quiz`, JSON.stringify({
    score,
    passed,
  }));
}

/* ---------- Load quiz result ---------- */
function loadQuizResult(materiId) {
  return JSON.parse(localStorage.getItem(`${materiId}_quiz`));
}

/* ===================== BADGE ===================== */

function showMateriBadge(materiId) {
  const badge = qs("#materiBadge");
  if (!badge) return;

  badge.style.display = "inline-block";
  badge.classList.add("materi-badge");

  localStorage.setItem(`${materiId}_badge`, "true");
}

function loadBadgeIfExists(materiId) {
  if (localStorage.getItem(`${materiId}_badge`) === "true") {
    showMateriBadge(materiId);
  }
}

/* ===================== LOCK / UNLOCK ===================== */

function unlockNextMateri(materiId) {
  const currentNumber = extractMateriNumber(materiId);
  if (!currentNumber) return;

  const nextMateriId = `materi-${currentNumber + 1}`;
  unlockMateri(nextMateriId);
}

function unlockMateri(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.classList.remove("locked");
  const overlay = el.querySelector(".lock-overlay");
  if (overlay) overlay.remove();
}

/* ===================== GLOBAL PROGRESS ===================== */

function markMateriCompleted(materiId) {
  localStorage.setItem(`${materiId}_completed`, "true");
}

function getGlobalProgress() {
  let completed = 0;

  for (let i = 1; i <= LMS_CONFIG.totalMateri; i++) {
    if (localStorage.getItem(`materi${i}_completed`) === "true") {
      completed++;
    }
  }

  return Math.round((completed / LMS_CONFIG.totalMateri) * 100);
}

function renderGlobalProgress(barSelector, textSelector) {
  const percent = getGlobalProgress();

  const bar = qs(barSelector);
  const text = qs(textSelector);

  if (bar) bar.style.width = percent + "%";
  if (text) text.innerText = `Progress Belajar: ${percent}%`;
}

/* ===================== DARK MODE ===================== */

function initDarkMode(toggleSelector) {
  const toggle = qs(toggleSelector);
  if (!toggle) return;

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark")
    );
  });
}

/* ===================== HELPERS ===================== */

function extractMateriNumber(materiId) {
  const match = materiId.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}

/* ===================== AUTO INIT ===================== */

document.addEventListener("DOMContentLoaded", () => {
  // dark mode optional
  initDarkMode("#darkToggle");
});
