// ==========================================
// 1. KONFIGURASI FIREBASE & ADMIN
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyC9mUCpTqouOX61Uiz4ndmDuLmeSS4PdFI",
    authDomain: "gamekatarnolima.firebaseapp.com",
    projectId: "gamekatarnolima",
    storageBucket: "gamekatarnolima.firebasestorage.app",
    messagingSenderId: "376669209366",
    appId: "1:376669209366:web:3bf93d2e8186a61be30637",
    measurementId: "G-KPW1XBXLJ3",
    databaseURL: "https://gamekatarnolima-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Inisialisasi Firebase Database
if (typeof firebase !== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== "undefined" ? firebase.database() : null;

// PIN Developer Mode Khusus
const DEV_PIN = "060117";

// Bank Data Pertanyaan Kuis
const questions = [
    {
        question: "Danau vulkanik terbesar di Indonesia sekaligus di Asia Tenggara adalah...",
        answers: [
            { text: "Danau Toba", correct: true },
            { text: "Danau Maninjau", correct: false },
            { text: "Danau Singkarak", correct: false },
            { text: "Danau Sentani", correct: false }
        ]
    },
    {
        question: "Ibu kota dari negara Jepang adalah...",
        answers: [
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Sapporo", correct: false }
        ]
    },
    {
        question: "Planet terbesar dalam tata surya kita adalah...",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturnus", correct: false },
            { text: "Bumi", correct: false }
        ]
    },
    {
        question: "Siapakah penemu bola lampu pijar yang terkenal?",
        answers: [
            { text: "Alexander Graham Bell", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Thomas Alva Edison", correct: true },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "Mata uang resmi yang digunakan oleh negara Inggris (United Kingdom) adalah...",
        answers: [
            { text: "Euro", correct: false },
            { text: "Pound Sterling", correct: true },
            { text: "Dollar", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Hewan mamalia terbesar di bumi saat ini adalah...",
        answers: [
            { text: "Gajah Afrika", correct: false },
            { text: "Paus Biru", correct: true },
            { text: "Jerapah", correct: false },
            { text: "Hiu Paus", correct: false }
        ]
    },
    {
        question: "Monumen Nasional (Monas) terletak di kota...",
        answers: [
            { text: "Bandung", correct: false },
            { text: "Surabaya", correct: false },
            { text: "Jakarta", correct: true },
            { text: "Yogyakarta", correct: false }
        ]
    },
    {
        question: "Unsur kimia dengan simbol 'O' dalam tabel periodik adalah...",
        answers: [
            { text: "Emas", correct: false },
            { text: "Oksigen", correct: true },
            { text: "Ozon", correct: false },
            { text: "Osmium", correct: false }
        ]
    },
    {
        question: "Candi Borobudur yang merupakan candi Buddha terbesar di dunia terletak di provinsi...",
        answers: [
            { text: "Jawa Tengah", correct: true },
            { text: "Jawa Timur", correct: false },
            { text: "Jawa Barat", correct: false },
            { text: "DI Yogyakarta", correct: false }
        ]
    },
    {
        question: "Benua terkecil di dunia berdasarkan luas wilayahnya adalah...",
        answers: [
            { text: "Eropa", correct: false },
            { text: "Antarktika", correct: false },
            { text: "Australia", correct: true },
            { text: "Amerika Selatan", correct: false }
        ]
    },
    {
        question: "Siapakah pencipta lagu kebangsaan Indonesia Raya?",
        answers: [
            { text: "Ismail Marzuki", correct: false },
            { text: "W.R. Soepratman", correct: true },
            { text: "C. Simanjuntak", correct: false },
            { text: "Kusbini", correct: false }
        ]
    },
    {
        question: "Pegunungan tertinggi di dunia yang menampung Gunung Everest adalah...",
        answers: [
            { text: "Pegunungan Himalaya", correct: true },
            { text: "Pegunungan Andes", correct: false },
            { text: "Pegunungan Alpen", correct: false },
            { text: "Pegunungan Rocky", correct: false }
        ]
    },
    {
        question: "Negara yang memiliki julukan 'Negeri Kincir Angin' adalah...",
        answers: [
            { text: "Jerman", correct: false },
            { text: "Belanda", correct: true },
            { text: "Prancis", correct: false },
            { text: "Swiss", correct: false }
        ]
    },
    {
        question: "Alat untuk mengukur gempa bumi disebut...",
        answers: [
            { text: "Termometer", correct: false },
            { text: "Barometer", correct: false },
            { text: "Seismograf", correct: true },
            { text: "Anemometer", correct: false }
        ]
    },
    {
        question: "Mata uang resmi yang digunakan oleh negara Arab Saudi adalah...",
        answers: [
            { text: "Dinar", correct: false },
            { text: "Dirham", correct: false },
            { text: "Riyal", correct: true },
            { text: "Rupee", correct: false }
        ]
    },
    {
        question: "Suku asli yang mendiami benua Australia adalah...",
        answers: [
            { text: "Suku Maori", correct: false },
            { text: "Suku Aborigin", correct: true },
            { text: "Suku Maya", correct: false },
            { text: "Suku Inka", correct: false }
        ]
    },
    {
        question: "Siapakah penemu pesawat terbang pertama kali yang diakui dunia?",
        answers: [
            { text: "Wright Bersaudara", correct: true },
            { text: "Graham Bell", correct: false },
            { text: "James Watt", correct: false },
            { text: "Guglielmo Marconi", correct: false }
        ]
    },
    {
        question: "Samudra terluas di bumi adalah...",
        answers: [
            { text: "Samudra Atlantik", correct: false },
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Pasifik", correct: true },
            { text: "Samudra Arktik", correct: false }
        ]
    },
    {
        question: "Lagu daerah 'Anju Ahu' dan 'Sing Sing So' berasal dari provinsi...",
        answers: [
            { text: "Sumatra Utara", correct: true },
            { text: "Sumatra Barat", correct: false },
            { text: "Aceh", correct: false },
            { text: "Riau", correct: false }
        ]
    },
    {
        question: "Organisasi kesehatan dunia di bawah naungan PBB adalah...",
        answers: [
            { text: "UNICEF", correct: false },
            { text: "UNESCO", correct: false },
            { text: "WHO", correct: true },
            { text: "ILO", correct: false }
        ]
    }
];

// Elemen Layar
const quizCard = document.getElementById("quiz-card");
const landingPage = document.getElementById("landing-page");
const startScreen = document.getElementById("start-screen");
const settingsScreen = document.getElementById("settings-screen");
const donateScreen = document.getElementById("donate-screen");
const devScreen = document.getElementById("dev-screen");
const headerInfo = document.getElementById("header-info");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const feedbackSection = document.getElementById("feedback-section");

// Elemen Data & Input
const playerNameInput = /** @type {HTMLInputElement | null} */ (document.getElementById("player-name-input"));
const nameInputBox = document.getElementById("name-input-box");
const welcomePlayerText = document.getElementById("welcome-player-text");
const updateInput = /** @type {HTMLTextAreaElement | null} */ (document.getElementById("update-input"));
const feedbackText = /** @type {HTMLTextAreaElement | null} */ (document.getElementById("feedback-text"));
const leaderboardList = document.getElementById("leaderboard-list");
const updateLogText = document.getElementById("update-log-text");
const devReviewsList = document.getElementById("dev-reviews-list");
const globalPlayCountEl = document.getElementById("global-play-count");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionCountElement = document.getElementById("question-count");
const scoreCountElement = document.getElementById("score-count");
const finalScoreElement = document.getElementById("final-score");
const highScoreDisplay = document.getElementById("high-score-display");
const livesDisplay = document.getElementById("lives-display");
const timerDisplay = document.getElementById("timer-display");
const lifelineBtn = document.getElementById("lifeline-btn");
const confettiContainer = document.getElementById("confetti-container");

/** @type {typeof questions} */
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let timePerQuestion = 10;
let timeLeft = 10;
let isLifelineUsed = false;
let isSoundEnabled = true;
let currentPlayerName = "";
let selectedRating = 5;
/** @type {number | undefined} */
let timerInterval;

// Web Audio API
/** @type {AudioContext | null} */
let audioCtx = null;
/** @type {number | undefined} */
let bgmInterval;
let bgmStep = 0;

function initAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || /** @type {any} */ (window).webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

/**
 * @param {number} freq 
 * @param {string} type 
 * @param {number} duration 
 * @param {number} [vol]
 */
function playSound(freq, type, duration, vol = 0.1) {
    if (!isSoundEnabled || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = /** @type {OscillatorType} */ (type);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
        // Abaikan
    }
}

function startBGM() {
    stopBGM();
    if (!isSoundEnabled) return;
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63];
    bgmStep = 0;

    bgmInterval = window.setInterval(() => {
        if (!isSoundEnabled) return;
        playSound(notes[bgmStep % notes.length], "triangle", 0.25, 0.03);
        bgmStep++;
    }, 400);
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = undefined;
    }
}

function playCorrectSound() {
    playSound(587.33, "sine", 0.15, 0.1);
    setTimeout(() => playSound(880, "sine", 0.3, 0.1), 100);
}

function playWrongSound() {
    playSound(150, "sawtooth", 0.3, 0.1);
}

function playGameOverSound() {
    playSound(200, "sawtooth", 0.2, 0.1);
    setTimeout(() => playSound(150, "sawtooth", 0.2, 0.1), 200);
    setTimeout(() => playSound(100, "sawtooth", 0.4, 0.1), 400);
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function triggerShake() {
    if (quizCard) {
        quizCard.classList.remove("shake");
        void quizCard.offsetWidth;
        quizCard.classList.add("shake");
    }
}

function triggerSlideIn() {
    if (quizBox) {
        quizBox.classList.remove("slide-in");
        void quizBox.offsetWidth;
        quizBox.classList.add("slide-in");
    }
}

function launchConfetti() {
    if (!confettiContainer) return;
    confettiContainer.innerHTML = "";
    const colors = ["#ff4d4d", "#ffcc00", "#28a745", "#4da6ff", "#b533ff"];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        if (confettiContainer) confettiContainer.innerHTML = "";
    }, 4000);
}

// ==========================================
// 2. INTEGRASI FIREBASE REALTIME
// ==========================================

function listenToLeaderboard() {
    if (!leaderboardList || !db) return;
    db.ref("leaderboard").orderByChild("score").limitToLast(10).on("value", (/** @type {any} */ snapshot) => {
        /** @type {{name: string, score: number}[]} */
        const scores = [];
        snapshot.forEach((/** @type {any} */ child) => {
            scores.push(child.val());
        });
        scores.reverse();

        if (scores.length === 0) {
            leaderboardList.innerHTML = "<li>Belum ada rekor pemain.</li>";
            return;
        }

        leaderboardList.innerHTML = "";
        scores.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<span><span class="player-rank">#${index + 1}</span> ${item.name}</span> <strong>${item.score} Poin</strong>`;
            leaderboardList.appendChild(li);
        });
    });
}

/**
 * @param {string} name 
 * @param {number} newScore 
 */
function saveScoreToLeaderboard(name, newScore) {
    if (!db) return;
    const userKey = name.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const userRef = db.ref("leaderboard/" + userKey);

    userRef.once("value").then((/** @type {any} */ snapshot) => {
        if (snapshot.exists()) {
            const oldScore = snapshot.val().score || 0;
            if (newScore > oldScore) {
                userRef.set({ name: name, score: newScore });
            }
        } else {
            userRef.set({ name: name, score: newScore });
        }
    });
}

function listenToUpdateLog() {
    if (!db) return;
    db.ref("updateLog").on("value", (/** @type {any} */ snapshot) => {
        const log = snapshot.val() || "Versi 1.0 — Game Kuis resmi dirilis!";
        if (updateLogText) updateLogText.innerText = log;
        if (updateInput) updateInput.value = log;
    });
}

function listenToTotalPlayCount() {
    if (!db) return;
    db.ref("totalPlayCount").on("value", (/** @type {any} */ snapshot) => {
        const total = snapshot.val() || 0;
        if (globalPlayCountEl) globalPlayCountEl.innerText = total.toString();
    });
}

/**
 * @param {string} name 
 * @param {number} rating 
 * @param {string} text 
 */
function submitFeedbackToFirebase(name, rating, text) {
    if (!db) return;
    db.ref("reviews").push({
        name: name,
        rating: rating,
        text: text,
        timestamp: Date.now()
    });
}

function listenToReviews() {
    if (!devReviewsList || !db) return;
    db.ref("reviews").on("value", (/** @type {any} */ snapshot) => {
        if (!snapshot.exists()) {
            devReviewsList.innerHTML = "<li>Belum ada saran masuk.</li>";
            return;
        }

        devReviewsList.innerHTML = "";
        snapshot.forEach((/** @type {any} */ child) => {
            const item = child.val();
            const li = document.createElement("li");
            let stars = "★".repeat(item.rating);
            li.innerHTML = `<strong>${item.name}</strong> (${stars}): <br><em>"${item.text}"</em>`;
            devReviewsList.appendChild(li);
        });
    });
}

// ==========================================
// 3. LOGIKA PERMAINAN
// ==========================================

function prepareStartScreen() {
    const savedName = localStorage.getItem("quizLockedNickname");

    if (savedName) {
        currentPlayerName = savedName;
        if (welcomePlayerText) welcomePlayerText.innerText = `Halo, ${savedName}! 👋`;
        if (nameInputBox) nameInputBox.classList.add("hide");
    } else {
        if (welcomePlayerText) welcomePlayerText.innerText = `Pemain Baru`;
        if (nameInputBox) nameInputBox.classList.remove("hide");
    }
}

/**
 * @param {string} mode
 */
function selectDifficulty(mode) {
    const savedName = localStorage.getItem("quizLockedNickname");

    if (!savedName) {
        const inputVal = playerNameInput ? playerNameInput.value.trim() : "";
        if (inputVal === "") {
            alert("Harap masukkan nickname kamu terlebih dahulu!");
            return;
        }
        localStorage.setItem("quizLockedNickname", inputVal);
        currentPlayerName = inputVal;
    } else {
        currentPlayerName = savedName;
    }

    if (mode === "easy") timePerQuestion = 15;
    else if (mode === "medium") timePerQuestion = 10;
    else if (mode === "hard") timePerQuestion = 5;

    let playCount = parseInt(localStorage.getItem("quizPlayCount") || "0") + 1;
    localStorage.setItem("quizPlayCount", playCount.toString());

    if (db) {
        db.ref("totalPlayCount").transaction((/** @type {any} */ current) => (current || 0) + 1);
    }

    startQuiz();
}

function hideAllScreens() {
    if (landingPage) landingPage.classList.add("hide");
    if (startScreen) startScreen.classList.add("hide");
    if (settingsScreen) settingsScreen.classList.add("hide");
    if (donateScreen) donateScreen.classList.add("hide");
    if (devScreen) devScreen.classList.add("hide");
    if (headerInfo) headerInfo.classList.add("hide");
    if (progressContainer) progressContainer.classList.add("hide");
    if (quizBox) quizBox.classList.add("hide");
    if (resultBox) resultBox.classList.add("hide");
}

function showLandingPage() {
    stopBGM();
    hideAllScreens();
    if (landingPage) landingPage.classList.remove("hide");
}

function startQuiz() {
    initAudio();
    shuffledQuestions = shuffleArray([...questions]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    isLifelineUsed = false;

    if (lifelineBtn) {
        const btn = /** @type {HTMLButtonElement} */ (lifelineBtn);
        btn.disabled = false;
        btn.innerText = "💡 50:50";
    }

    hideAllScreens();
    if (headerInfo) headerInfo.classList.remove("hide");
    if (progressContainer) progressContainer.classList.remove("hide");
    if (quizBox) quizBox.classList.remove("hide");
    startBGM();
    showQuestion();
}

function showQuestion() {
    resetState();
    triggerSlideIn();
    updateLivesDisplay();
    updateProgressBar();
    startTimer();

    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (questionElement) questionElement.innerText = currentQuestion.question;
    if (questionCountElement) questionCountElement.innerText = `Soal ${currentQuestionIndex + 1} dari ${shuffledQuestions.length}`;
    if (scoreCountElement) scoreCountElement.innerText = `Skor: ${score}`;

    let shuffledAnswers = shuffleArray([...currentQuestion.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = "true";
        button.addEventListener("click", () => selectAnswer(button));
        if (answerButtonsElement) answerButtonsElement.appendChild(button);
    });
}

function updateProgressBar() {
    if (progressBar) {
        let progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
}

function resetState() {
    clearInterval(timerInterval);
    while (answerButtonsElement && answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function startTimer() {
    timeLeft = timePerQuestion;
    if (timerDisplay) timerDisplay.innerText = `⏱️ ${timeLeft}s`;

    timerInterval = window.setInterval(() => {
        timeLeft--;
        if (timerDisplay) timerDisplay.innerText = `⏱️ ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    lives--;
    playWrongSound();
    triggerShake();
    updateLivesDisplay();
    highlightCorrectAnswer();

    setTimeout(() => {
        nextQuestionOrFinish();
    }, 1200);
}

function updateLivesDisplay() {
    let hearts = "";
    for (let i = 0; i < lives; i++) hearts += "❤️";
    if (livesDisplay) livesDisplay.innerText = lives > 0 ? `Nyawa: ${hearts}` : "Nyawa: 💔";
}

/**
 * @param {HTMLButtonElement} selectedBtn
 */
function selectAnswer(selectedBtn) {
    clearInterval(timerInterval);
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += 10;
        playCorrectSound();
    } else {
        selectedBtn.classList.add("wrong");
        lives--;
        playWrongSound();
        triggerShake();
        updateLivesDisplay();
    }

    highlightCorrectAnswer();

    setTimeout(() => {
        nextQuestionOrFinish();
    }, 1200);
}

function useLifeline() {
    if (isLifelineUsed || !answerButtonsElement) return;
    isLifelineUsed = true;

    if (lifelineBtn) {
        const btn = /** @type {HTMLButtonElement} */ (lifelineBtn);
        btn.disabled = true;
        btn.innerText = "💡 Terpakai";
    }

    const buttons = Array.from(answerButtonsElement.children);
    const wrongButtons = buttons.filter(btn => {
        const btnEl = /** @type {HTMLButtonElement} */ (btn);
        return btnEl.dataset.correct !== "true";
    });

    const shuffledWrong = shuffleArray(wrongButtons);
    for (let i = 0; i < Math.min(2, shuffledWrong.length); i++) {
        const btnEl = /** @type {HTMLButtonElement} */ (shuffledWrong[i]);
        btnEl.style.visibility = "hidden";
    }
}

function highlightCorrectAnswer() {
    if (answerButtonsElement) {
        Array.from(answerButtonsElement.children).forEach(button => {
            const btnElement = /** @type {HTMLButtonElement} */ (button);
            if (btnElement.dataset.correct === "true") {
                btnElement.classList.add("correct");
            }
            btnElement.disabled = true;
        });
    }
}

function nextQuestionOrFinish() {
    currentQuestionIndex++;
    if (lives > 0 && currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval);
    stopBGM();
    hideAllScreens();
    if (resultBox) resultBox.classList.remove("hide");

    saveScoreToLeaderboard(currentPlayerName, score);

    if (lives === 0) {
        playGameOverSound();
    } else {
        launchConfetti();
    }

    if (finalScoreElement) {
        finalScoreElement.innerText = lives === 0 
            ? `Game Over, ${currentPlayerName}! Skor Akhir Kamu: ${score}` 
            : `Selamat ${currentPlayerName}! Kamu mendapatkan skor ${score}!`;
    }

    if (highScoreDisplay) {
        highScoreDisplay.innerText = `Skor berhasil disimpan di Papan Skor Global!`;
    }

    let playCount = parseInt(localStorage.getItem("quizPlayCount") || "0");

    if (playCount >= 3 && feedbackSection) {
        feedbackSection.classList.remove("hide");
    } else if (feedbackSection) {
        feedbackSection.classList.add("hide");
    }
}

/**
 * @param {string} id
 * @param {EventListener} handler
 */
function addClickEvent(id, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handler);
}

// Navigasi & Event Listeners
document.body.addEventListener("click", () => {
    initAudio();
}, { once: true });

addClickEvent("btn-start-game", () => {
    initAudio();
    hideAllScreens();
    prepareStartScreen();
    if (startScreen) startScreen.classList.remove("hide");
});

addClickEvent("btn-open-settings", () => {
    initAudio();
    hideAllScreens();
    if (settingsScreen) settingsScreen.classList.remove("hide");
});

addClickEvent("btn-open-donate", () => {
    hideAllScreens();
    if (donateScreen) donateScreen.classList.remove("hide");
});

// Bintang Rating
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", (e) => {
        const target = /** @type {HTMLElement} */ (e.target);
        selectedRating = parseInt(target.dataset.value || "5");
        document.querySelectorAll(".star").forEach(s => {
            const sEl = /** @type {HTMLElement} */ (s);
            if (parseInt(sEl.dataset.value || "0") <= selectedRating) {
                sEl.classList.add("active");
            } else {
                sEl.classList.remove("active");
            }
        });
    });
});

// Kirim Feedback
addClickEvent("btn-submit-feedback", () => {
    const text = feedbackText ? feedbackText.value.trim() : "";
    if (text === "") {
        alert("Silakan tulis saran/masukan terlebih dahulu.");
        return;
    }

    submitFeedbackToFirebase(currentPlayerName, selectedRating, text);

    alert("Terima kasih atas ulasan dan sarannya!");
    if (feedbackSection) feedbackSection.classList.add("hide");
});

// Fitur Developer Panel
addClickEvent("btn-open-dev", () => {
    const enteredPin = prompt("Masukkan PIN Developer / Admin:");
    if (enteredPin === DEV_PIN) {
        hideAllScreens();
        if (devScreen) devScreen.classList.remove("hide");
        listenToReviews();
        listenToTotalPlayCount();
    } else if (enteredPin !== null) {
        alert("PIN Salah! Akses ditolak.");
    }
});

addClickEvent("btn-reset-scores", () => {
    if (confirm("Apakah kamu yakin ingin menghapus SELURUH papan skor online?") && db) {
        db.ref("leaderboard").remove();
        alert("Papan skor online berhasil direset!");
    }
});

addClickEvent("btn-reset-reviews", () => {
    if (confirm("Hapus seluruh masukan dari pemain di Firebase?") && db) {
        db.ref("reviews").remove();
        alert("Riwayat ulasan online berhasil direset!");
    }
});

addClickEvent("btn-save-update", () => {
    if (updateInput && updateInput.value.trim() !== "" && db) {
        const log = updateInput.value.trim();
        db.ref("updateLog").set(log);
        alert("Info update berhasil diperbarui secara online!");
    }
});

addClickEvent("btn-toggle-sound", () => {
    isSoundEnabled = !isSoundEnabled;
    if (!isSoundEnabled) stopBGM();
    const btnToggleSound = document.getElementById("btn-toggle-sound");
    if (btnToggleSound) {
        btnToggleSound.innerText = isSoundEnabled ? "🔊 ON" : "🔇 OFF";
        btnToggleSound.style.backgroundColor = isSoundEnabled ? "#28a745" : "#dc3545";
    }
});

addClickEvent("btn-back-from-diff", showLandingPage);
addClickEvent("btn-back-from-settings", showLandingPage);
addClickEvent("btn-back-from-donate", showLandingPage);
addClickEvent("btn-back-from-dev", showLandingPage);
addClickEvent("restart-btn", showLandingPage);

addClickEvent("btn-easy", () => selectDifficulty("easy"));
addClickEvent("btn-medium", () => selectDifficulty("medium"));
addClickEvent("btn-hard", () => selectDifficulty("hard"));

if (lifelineBtn) lifelineBtn.addEventListener("click", useLifeline);

// Registrasi Kompatibilitas Window
/** @type {any} */ (window).selectDifficulty = selectDifficulty;
/** @type {any} */ (window).showLandingPage = showLandingPage;
/** @type {any} */ (window).useLifeline = useLifeline;
/** @type {any} */ (window)._unusedProps = {
    finalScoreElement,
    highScoreDisplay,
    playGameOverSound,
    launchConfetti
};

// Jalankan Koneksi Realtime & Halaman Utama
listenToLeaderboard();
listenToUpdateLog();
showLandingPage();
