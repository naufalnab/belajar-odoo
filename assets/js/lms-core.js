/* =========================================================
   LMS CORE ENGINE
   PembelajarBelajar
   ========================================================= */

/* ===================== CONFIG ===================== */

const LMS_CONFIG = {
  passingScore: 70,
  totalMateri: 28, // ganti sesuai jumlah materi
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

/* ===================== DASHBOARD PROGRESS (TRACKS) ===================== */

function initTrackProgress(modules) {
  let completedCount = 0;
  const totalModules = modules.length;

  modules.forEach((mod) => {
    const steps = JSON.parse(localStorage.getItem(`${mod.id}_steps`)) || [];
    const quiz = JSON.parse(localStorage.getItem(`${mod.id}_quiz`));

    // Calculate Progress
    const totalSteps = steps.length > 0 ? steps.length : 1;
    const checkedSteps = steps.filter(Boolean).length;
    let percent = Math.round((checkedSteps / totalSteps) * 100);

    if (quiz?.passed) {
      percent = 100;
      completedCount++;
    }

    // Update UI
    updateCardUI(mod.id, percent, quiz?.passed);

    // ALWAYS UNLOCK NEXT CARD (Disabled Locking)
    if (mod.nextCard) {
      const nextModuleData = modules.find((m) => `card-${m.id}` === mod.nextCard);
      const nextLink = nextModuleData ? nextModuleData.link : "#";
      unlockCard(mod.nextCard, nextLink);
    }
  });

  // Global Progress for this Track
  // Note: Track dashboards might not have the global bar with exact same IDs as index.html
  // But if they do, this helper can be reused or adapted. 
  // For now, we won't crash if elements missing.
}

function updateCardUI(materiId, percent, isPassed) {
  const bar = qs(`#progress-${materiId}`);
  const label = qs(`#label-${materiId}`);
  const status = qs(`#status-${materiId}`);

  if (bar) bar.style.width = percent + "%";

  if (isPassed) {
    if (label) {
      label.innerText = "🎓 Lulus Quiz";
      label.style.color = "var(--success-color)";
      label.style.fontWeight = "bold";
    }
    if (status) status.innerText = "✅";
  } else {
    if (label && percent > 0) {
      label.innerText = `${percent}% Selesai`;
      label.style.color = "var(--secondary-color)";
    }
  }
}

function unlockCard(cardId, linkUrl) {
  const card = document.getElementById(cardId);
  if (!card) return;

  // Always remove lock
  card.classList.remove("locked");
  const overlay = card.querySelector(".lock-overlay");
  if (overlay) overlay.remove();

  const statusIcon = card.querySelector(".materi-status");
  if (statusIcon) statusIcon.innerText = "🔓";

  const label = card.querySelector("small");
  if (label && label.innerText === "Terkunci") {
    label.innerText = "Silakan mulai";
  }

  // Enable Click
  card.style.cursor = "pointer";
  card.onclick = () => {
    window.location.href = linkUrl;
  };
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
  // LOCK SYSTEM DISABLED
  // const currentNumber = extractMateriNumber(materiId);
  // if (!currentNumber) return;
  // const nextMateriId = `materi-${currentNumber + 1}`;
  // unlockMateri(nextMateriId);
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

/* ===================== THEME MANAGER (SYSTEM/LIGHT/DARK) ===================== */

const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system'
};

function initThemeSystem(toggleSelector) {
  const toggleBtn = qs(toggleSelector);

  // 0. MIGRASI DARI VERSI LAMA (Jika ada)
  if (localStorage.getItem("darkMode")) {
    const oldVal = localStorage.getItem("darkMode") === "true";
    localStorage.setItem("themePreference", oldVal ? THEME.DARK : THEME.LIGHT);
    localStorage.removeItem("darkMode"); // Hapus legacy
  }

  // 1. Load Preference (default: SYSTEM)
  let currentTheme = localStorage.getItem("themePreference") || THEME.SYSTEM;

  // 2. Apply Initial State
  applyTheme(currentTheme);
  updateToggleIcon(toggleBtn, currentTheme);

  // 3. Listen for System Changes (Only active in SYSTEM mode)
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("themePreference") === THEME.SYSTEM) {
      applyTheme(THEME.SYSTEM);
    }
  });

  // 4. Click Handler (Cycle: SYSTEM -> LIGHT -> DARK -> SYSTEM)
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // Logic Cycle: System -> Light -> Dark -> System
      if (currentTheme === THEME.SYSTEM) currentTheme = THEME.LIGHT;
      else if (currentTheme === THEME.LIGHT) currentTheme = THEME.DARK;
      else currentTheme = THEME.SYSTEM;

      localStorage.setItem("themePreference", currentTheme);
      applyTheme(currentTheme);
      updateToggleIcon(toggleBtn, currentTheme);
    });
  }
}

function applyTheme(theme) {
  const isDark =
    theme === THEME.DARK ||
    (theme === THEME.SYSTEM && window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function updateToggleIcon(btn, theme) {
  if (!btn) return;
  if (theme === THEME.SYSTEM) {
    btn.innerText = "🖥️"; // Icon Komputer/System
    btn.title = "Mode: Mengikuti Sistem";
  } else if (theme === THEME.LIGHT) {
    btn.innerText = "☀️"; // Icon Matahari
    btn.title = "Mode: Terang";
  } else {
    btn.innerText = "🌙"; // Icon Bulan
    btn.title = "Mode: Gelap";
  }
}

/* ===================== LANGUAGE SYSTEM ===================== */

const LANG = {
  ID: 'id',
  EN: 'en'
};

function initLanguageSystem(toggleSelector) {
  const toggleBtn = qs(toggleSelector);

  // 1. Load Preference (default: ID)
  let currentLang = localStorage.getItem("langPreference") || LANG.ID;

  // 2. Apply Initial State
  updateLangToggleUI(toggleBtn, currentLang);
  document.body.setAttribute("data-lang", currentLang); // Apply to Body

  // 3. Click Handler
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === LANG.ID ? LANG.EN : LANG.ID;
      localStorage.setItem("langPreference", currentLang);

      updateLangToggleUI(toggleBtn, currentLang);
      document.body.setAttribute("data-lang", currentLang); // Apply to Body

      // Dispatch Event
      window.dispatchEvent(new CustomEvent("languageChanged", {
        detail: { language: currentLang }
      }));
    });
  }
}

function updateLangToggleUI(btn, lang) {
  if (!btn) return;
  btn.innerText = lang.toUpperCase();
  btn.title = lang === LANG.ID ? "Bahasa: Indonesia" : "Language: English";
}

function getCurrentLanguage() {
  return localStorage.getItem("langPreference") || LANG.ID;
}

/* ===================== HELPERS ===================== */

function extractMateriNumber(materiId) {
  const match = materiId.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}

/* ===================== LIGHTBOX ===================== */

function initImageLightbox() {
  // 1. Create Lightbox Element if not exists
  if (!document.querySelector(".lightbox-overlay")) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    lightbox.innerHTML = `
      <button class="lightbox-close">&times;</button>
      <img src="" alt="Enlarged Image" class="lightbox-image">
    `;
    document.body.appendChild(lightbox);

    // Close events
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const overlay = lightbox;

    function closeLightbox() {
      overlay.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeLightbox();
      }
    });
  }

  // 2. Attach Click Events to Images
  const zoomableImages = document.querySelectorAll(
    ".image-placeholder img, .content img"
  );

  const lightboxOverlay = document.querySelector(".lightbox-overlay");
  const lightboxImg = lightboxOverlay.querySelector(".lightbox-image");

  zoomableImages.forEach((img) => {
    // Only apply if not already applied
    if (img.dataset.zoomable === "true") return;

    img.dataset.zoomable = "true";
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Enlarged Image";
      lightboxOverlay.classList.add("active");
    });
  });
}

/* ===================== AUTO INIT ===================== */

document.addEventListener("DOMContentLoaded", () => {
  // dark mode optional
  initThemeSystem(".dark-toggle");
  // init language system
  initLanguageSystem(".lang-toggle");
  // init lightbox
  initImageLightbox();

  // Legacy shim: Overwrite old inline toggleDark to prevent conflicts
  window.toggleDark = () => console.log("Legacy toggle suppressed.");
});
