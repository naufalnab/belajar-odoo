/* =========================================================
   QUIZ ENGINE
   PembelajarBelajar LMS
   ========================================================= */

/*
  Dependency:
  - quiz-bank.js  (QUIZ_BANK)
  - lms-core.js   (onQuizPassed, onQuizFailed)
*/

/* ===================== STATE ===================== */

let currentQuizId = null;
let currentQuestions = [];
let quizRendered = false;

/* ===================== PUBLIC API ===================== */

/**
 * Render quiz ke container tertentu
 * @param {string} quizId - contoh: "materi1"
 * @param {string} containerSelector - contoh: "#materi-1-quiz .quiz-container"
 */
function renderQuiz(quizId, containerSelector) {
  if (!window.QUIZ_BANK || !QUIZ_BANK[quizId]) {
    console.error("Quiz tidak ditemukan:", quizId);
    return;
  }

  currentQuizId = quizId;
  currentQuestions = QUIZ_BANK[quizId];

  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error("Quiz container tidak ditemukan:", containerSelector);
    return;
  }

  container.innerHTML = "";
  quizRendered = true;

  const saved = loadSavedQuizResult(quizId);
  const isPassed = saved?.passed === true;

  currentQuestions.forEach((q, index) => {
    container.appendChild(createQuestionElement(q, index, isPassed, saved));
  });

  if (isPassed) {
    lockQuizUI(container, saved.score);
  }
}

/**
 * Dipanggil tombol "Periksa Jawaban"
 */
function checkQuiz() {
  if (!quizRendered) return;

  const unanswered = currentQuestions.some((q, index) => {
    return !document.querySelector(
      `input[name="quiz_q_${index}"]:checked`
    );
  });

  if (unanswered) {
    alert("Silakan jawab semua pertanyaan terlebih dahulu.");
    return;
  }

  let correct = 0;

  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="quiz_q_${index}"]:checked`
    );

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

  if (score >= LMS_CONFIG.passingScore) {
    onQuizPassed(currentQuizId, score);
    disableQuizAfterPass(score);
  } else {
    onQuizFailed(currentQuizId, score);
  }
}

/* ===================== RENDER HELPERS ===================== */

function createQuestionElement(question, index, locked, savedResult) {
  const wrapper = document.createElement("div");
  wrapper.className = "quiz-question";
  wrapper.id = `quiz-question-${index}`;

  const title = document.createElement("p");
  title.innerHTML = `<strong>${index + 1}. ${question.question}</strong>`;
  wrapper.appendChild(title);

  const ul = document.createElement("ul");
  ul.className = "quiz-options";

  question.options.forEach(option => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = `quiz_q_${index}`;
    input.value = option;

    if (locked) input.disabled = true;

    if (savedResult && savedResult.answers) {
      if (savedResult.answers[index] === option) {
        input.checked = true;
      }
    }

    label.appendChild(input);
    label.append(" " + option);
    li.appendChild(label);
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);

  if (locked && savedResult) {
    const selected = savedResult.answers[index];
    if (selected === question.correct) {
      markQuestion(wrapper, true);
    } else {
      markQuestion(wrapper, false);
    }
  }

  return wrapper;
}

/* ===================== RESULT HANDLING ===================== */

function showQuizResult(score) {
  const box = document.getElementById("quizResult");
  if (!box) return;

  box.style.display = "block";

  if (score >= LMS_CONFIG.passingScore) {
    box.innerHTML = `✅ <strong>LULUS</strong><br>Skor Anda: <strong>${score}%</strong>`;
  } else {
    box.innerHTML =
      `❌ <strong>BELUM LULUS</strong><br>` +
      `Skor Anda: <strong>${score}%</strong><br>` +
      `Silakan pelajari ulang materi.`;
  }
}

/* ===================== VISUAL ===================== */

function markQuestion(element, correct) {
  element.style.borderLeft = correct
    ? "5px solid #28a745"
    : "5px solid #dc3545";
}

function updateQuizProgress(score) {
  const bar = document.getElementById("quizProgressBar");
  if (!bar) return;

  bar.style.width = score + "%";
}

/* ===================== SAVE / LOAD ===================== */

function saveQuizAttempt(score) {
  const answers = [];

  currentQuestions.forEach((_, index) => {
    const selected = document.querySelector(
      `input[name="quiz_q_${index}"]:checked`
    );
    answers[index] = selected ? selected.value : null;
  });

  localStorage.setItem(
    `${currentQuizId}_quiz`,
    JSON.stringify({
      score,
      passed: score >= LMS_CONFIG.passingScore,
      answers,
    })
  );
}

function loadSavedQuizResult(quizId) {
  const saved = localStorage.getItem(`${quizId}_quiz`);
  return saved ? JSON.parse(saved) : null;
}

/* ===================== LOCK AFTER PASS ===================== */

function disableQuizAfterPass(score) {
  saveQuizAttempt(score);

  const container = document.querySelector(".quiz-container");
  if (!container) return;

  lockQuizUI(container, score);
}

function lockQuizUI(container, score) {
  container.classList.add("locked");

  const overlay = document.createElement("div");
  overlay.className = "lock-overlay";
  overlay.innerHTML = `🎓 Quiz sudah lulus (${score}%)`;

  container.appendChild(overlay);

  const radios = container.querySelectorAll("input[type=radio]");
  radios.forEach(r => (r.disabled = true));
}

/* ===================== AUTO LOAD RESULT ===================== */

document.addEventListener("DOMContentLoaded", () => {
  const resultBox = document.getElementById("quizResult");

  if (currentQuizId) {
    const saved = loadSavedQuizResult(currentQuizId);
    if (saved) {
      updateQuizProgress(saved.score);
      showQuizResult(saved.score);
    }
  }
});
