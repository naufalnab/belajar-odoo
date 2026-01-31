/* =========================================================
   QUIZ ENGINE (REVISI: ULANG JIKA BELUM 100%)
   PembelajarBelajar LMS
   ========================================================= */

/* ===================== STATE ===================== */

let currentQuizId = null;
let currentQuestions = [];
let quizRendered = false;

/* ===================== PUBLIC API ===================== */

function renderQuiz(quizId, containerSelector) {
  if (!window.QUIZ_BANK || !QUIZ_BANK[quizId]) {
    console.error("Quiz tidak ditemukan:", quizId);
    return;
  }

  currentQuizId = quizId;
  currentQuestions = QUIZ_BANK[quizId];

  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";
  quizRendered = true;

  const saved = loadSavedQuizResult(quizId);
  // Cek apakah sudah lulus sempurna (100%)
  const isPerfect = saved?.score === 100;

  currentQuestions.forEach((q, index) => {
    // Kunci jawaban hanya jika sudah 100%
    container.appendChild(createQuestionElement(q, index, isPerfect, saved));
  });

  resetButtonState();

  if (saved) {
    // Tampilkan hasil sebelumnya
    showQuizResult(saved.score);
    updateQuizProgress(saved.score);

    // LOGIKA RENDER:
    if (saved.score === 100) {
      // Jika 100%, kunci total tapi boleh reset
      lockQuizUI(container, saved.score);
      enableRetryMode(true);
    } else {
      // Jika di bawah 100% (meskipun lulus), tawarkan ulang
      enableRetryMode(false);
    }
  }
}

function checkQuiz() {
  const submitBtn = document.querySelector(".quiz-submit-btn");

  // Jika tombol sedang dalam mode "Ulangi", reset quiz
  if (submitBtn && submitBtn.getAttribute("data-mode") === "retry") {
    resetQuiz();
    return;
  }

  if (!quizRendered) return;

  // Cek apakah ada yang kosong
  const unanswered = currentQuestions.some((q, index) => {
    return !document.querySelector(`input[name="quiz_q_${index}"]:checked`);
  });

  if (unanswered) {
    alert("Silakan jawab semua pertanyaan terlebih dahulu.");
    return;
  }

  // Hitung Skor
  let correct = 0;
  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="quiz_q_${index}"]:checked`);
    const questionBox = document.getElementById(`quiz-question-${index}`);

    if (selected.value === q.correct) {
      correct++;
      markQuestion(questionBox, true);
    } else {
      markQuestion(questionBox, false);
    }
  });

  const score = Math.round((correct / currentQuestions.length) * 100);

  showQuizResult(score);
  updateQuizProgress(score);

  // LOGIKA UTAMA:
  // 1. Cek apakah lulus passing grade (70) untuk buka materi selanjutnya
  if (score >= LMS_CONFIG.passingScore) {
    onQuizPassed(currentQuizId, score);
  } else {
    onQuizFailed(currentQuizId, score);
  }

  // 2. Cek apakah Perfect (100) untuk mengunci kuis
  if (score === 100) {
    disableQuizAfterPass(score);
  } else {
    enableRetryMode(false); // Mode "Kejar 100%"
  }
}

/* ===================== RETRY LOGIC ===================== */

function enableRetryMode(isPerfect) {
  const submitBtn = document.querySelector(".quiz-submit-btn");
  if (!submitBtn) return;

  if (isPerfect) {
    submitBtn.innerHTML = `
      <span class="lang-id">🔄 Reset Quiz (Ulangi Latihan)</span>
      <span class="lang-en">🔄 Reset Quiz (Practice Again)</span>
    `;
    submitBtn.style.backgroundColor = "#28a745"; // Hijau jika sudah sempurna
    submitBtn.style.color = "#fff";
  } else {
    submitBtn.innerHTML = `
      <span class="lang-id">🔄 Ulangi Quiz (Kejar 100%)</span>
      <span class="lang-en">🔄 Retry Quiz (Get 100%)</span>
    `;
    submitBtn.style.backgroundColor = "#ffc107"; // Kuning jika belum
    submitBtn.style.color = "#333";
  }

  submitBtn.style.display = "inline-block"; // Pastikan muncul
  submitBtn.setAttribute("data-mode", "retry");
}

function resetQuiz() {
  // Reset Radio
  const radios = document.querySelectorAll("input[type=radio]");
  radios.forEach(r => {
    r.checked = false;
    r.disabled = false; // Pastikan bisa diklik lagi
  });

  // Hapus warna border
  const questions = document.querySelectorAll(".quiz-question");
  questions.forEach(q => q.style.borderLeft = "none");

  // Sembunyikan hasil
  const resultBox = document.getElementById("quizResult");
  if (resultBox) resultBox.style.display = "none";

  // Reset bar
  const bar = document.getElementById("quizProgressBar");
  if (bar) bar.style.width = "0%";

  resetButtonState();
}

function resetButtonState() {
  const submitBtn = document.querySelector(".quiz-submit-btn");
  if (!submitBtn) return;

  submitBtn.innerHTML = `
    <span class="lang-id">Periksa Jawaban</span>
    <span class="lang-en">Check Answers</span>
  `;
  submitBtn.style.backgroundColor = "";
  submitBtn.style.color = "";
  submitBtn.style.display = "inline-block";
  submitBtn.removeAttribute("data-mode");
}

/* ===================== RENDER HELPERS ===================== */

function createQuestionElement(question, index, locked, savedResult) {
  const wrapper = document.createElement("div");
  wrapper.className = "quiz-question";
  wrapper.id = `quiz-question-${index}`;

  const title = document.createElement("p");

  // LOGIKA BAHASA (STRICT TOGGLE)
  const lang = getCurrentLanguage(); // dari lms-core.js
  let questionText = question.question; // Default ID
  let questionTextEn = question.question_en || question.question;

  title.innerHTML = `
    <strong>
      <span class="lang-id">${index + 1}. ${questionText}</span>
      <span class="lang-en">${index + 1}. ${questionTextEn}</span>
    </strong>
  `;
  wrapper.appendChild(title);

  const ul = document.createElement("ul");
  ul.className = "quiz-options";

  question.options.forEach((option, i) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = `quiz_q_${index}`;
    input.value = option; // Value tetap original (ID) untuk validasi

    // Kunci input HANYA jika locked (100%)
    if (locked) input.disabled = true;

    if (savedResult && savedResult.answers) {
      if (savedResult.answers[index] === option) {
        input.checked = true;
      }
    }

    label.appendChild(input);

    // Teks Opsi
    let optionLabel = option;
    let optionLabelEn = (question.options_en && question.options_en[i]) ? question.options_en[i] : option;

    const spanId = document.createElement("span");
    spanId.className = "lang-id";
    spanId.textContent = " " + optionLabel;

    const spanEn = document.createElement("span");
    spanEn.className = "lang-en";
    spanEn.textContent = " " + optionLabelEn;

    label.appendChild(spanId);
    label.appendChild(spanEn);

    li.appendChild(label);
    ul.appendChild(li);
  });


  wrapper.appendChild(ul);

  // Tampilkan jawaban benar/salah jika ada history, meskipun belum 100%
  if (savedResult && savedResult.answers) {
    const selected = savedResult.answers[index];
    if (selected) {
      if (selected === question.correct) {
        markQuestion(wrapper, true);
      } else {
        markQuestion(wrapper, false);
      }
    }
  }

  return wrapper;
}

/* ===================== RESULT HANDLING ===================== */

function showQuizResult(score) {
  const box = document.getElementById("quizResult");
  if (!box) return;

  box.style.display = "block";

  if (score === 100) {
    box.innerHTML = `
      <span class="lang-id">🌟 <strong>SEMPURNA!</strong><br>Skor kita: <strong>100%</strong></span>
      <span class="lang-en">🌟 <strong>PERFECT!</strong><br>Score: <strong>100%</strong></span>
    `;
    box.className = "alert success";
  } else if (score >= LMS_CONFIG.passingScore) {
    // Kasus 70-99%
    box.innerHTML = `
      <span class="lang-id">✅ <strong>LULUS</strong><br>Skor kita: <strong>${score}%</strong><br><small>kita boleh lanjut, atau ulangi agar 100%.</small></span>
      <span class="lang-en">✅ <strong>PASSED</strong><br>Score: <strong>${score}%</strong><br><small>You can proceed, or retry for 100%.</small></span>
    `;
    box.className = "alert warning"; // Kuning/Warning biar sadar belum sempurna
  } else {
    box.innerHTML = `
      <span class="lang-id">❌ <strong>BELUM LULUS</strong><br>Skor kita: <strong>${score}%</strong></span>
      <span class="lang-en">❌ <strong>NOT PASSED</strong><br>Score: <strong>${score}%</strong></span>
    `;
    box.className = "alert danger";
  }
}

function markQuestion(element, correct) {
  element.style.borderLeft = correct ? "5px solid #28a745" : "5px solid #dc3545";
}

function updateQuizProgress(score) {
  const bar = document.getElementById("quizProgressBar");
  if (bar) bar.style.width = score + "%";
}

/* ===================== SAVE / LOAD ===================== */

function saveQuizAttempt(score) {
  const answers = [];
  currentQuestions.forEach((_, index) => {
    const selected = document.querySelector(`input[name="quiz_q_${index}"]:checked`);
    answers[index] = selected ? selected.value : null;
  });

  localStorage.setItem(`${currentQuizId}_quiz`, JSON.stringify({
    score,
    passed: score >= LMS_CONFIG.passingScore,
    answers,
  }));
}

function loadSavedQuizResult(quizId) {
  const saved = localStorage.getItem(`${quizId}_quiz`);
  return saved ? JSON.parse(saved) : null;
}

/* ===================== LOCK AFTER PASS ===================== */

function disableQuizAfterPass(score) {
  saveQuizAttempt(score); // Simpan status terakhir

  const container = document.querySelector(".quiz-container");
  if (!container) return;

  lockQuizUI(container, score);

  // Jangan sembunyikan tombol, tapi ubah jadi tombol Reset
  enableRetryMode(true);
}

function lockQuizUI(container, score) {
  // Hapus overlay lama jika ada (untuk backward compatibility atau re-render)
  const existingOverlay = container.querySelector(".lock-overlay");
  if (existingOverlay) existingOverlay.remove();

  const existingBanner = container.querySelector(".quiz-status-banner");
  if (existingBanner) existingBanner.remove();

  // Tambahkan banner status di ATAS container (bukan overlay yang menutupi)
  const banner = document.createElement("div");
  banner.className = "quiz-status-banner";
  banner.innerHTML = `
    <span class="lang-id">🏆 Quiz Selesai! Skor: ${score}% <br><small>Jawaban telah dikunci.</small></span>
    <span class="lang-en">🏆 Quiz Completed! Score: ${score}% <br><small>Answers are locked.</small></span>
  `;
  container.prepend(banner);

  // Kunci semua input
  const radios = container.querySelectorAll("input[type=radio]");
  radios.forEach(r => (r.disabled = true));

  // Tambahkan visual class ke container (opsional, untuk styling border dsb)
  container.classList.add("quiz-completed-view");
}

/* ===================== AUTO LOAD ===================== */

document.addEventListener("DOMContentLoaded", () => {
  if (currentQuizId) {
    // Tidak perlu load manual di sini karena renderQuiz sudah menanganinya
  }

  // Listen for language changes
  window.addEventListener("languageChanged", (e) => {
    if (currentQuizId && quizRendered) {
      // Re-render quiz with new language
      // Perlu selector container yg sama, kita asumsikan default .quiz-container jika tidak disimpan
      // Tapi renderQuiz menyimpan currentId, kita bisa panggil renderQuiz lagi
      // PERHATIAN: renderQuiz butuh containerSelector. 
      // Kita perlu simpan containerSelector di variable global state quiz-engine.

      const container = document.querySelector(".quiz-container");
      if (container) {
        renderQuiz(currentQuizId, ".quiz-container");
      }
    }
  });
});