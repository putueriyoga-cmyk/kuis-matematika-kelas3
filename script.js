
const questions = [
    {
        q: "Berapakah hasil dari 125 + 234?",
        a: ["349", "359", "369", "379"],
        c: 1,
        e: "125 + 234 = 359."
    },
    {
        q: "Berapakah hasil dari 500 - 275?",
        a: ["215", "225", "235", "245"],
        c: 1,
        e: "500 - 275 = 225."
    },
    {
        q: "Berapakah hasil dari 7 × 8?",
        a: ["54", "56", "58", "64"],
        c: 1,
        e: "7 × 8 = 56."
    },
    {
        q: "Berapakah hasil dari 72 ÷ 9?",
        a: ["6", "7", "8", "9"],
        c: 2,
        e: "72 ÷ 9 = 8."
    },
    {
        q: "Berapakah hasil dari 45 + 38?",
        a: ["73", "83", "93", "85"],
        c: 1,
        e: "45 + 38 = 83."
    },
    {
        q: "Berapakah hasil dari 100 - 46?",
        a: ["44", "54", "64", "56"],
        c: 1,
        e: "100 - 46 = 54."
    },
    {
        q: "Berapakah hasil dari 9 × 6?",
        a: ["45", "52", "54", "56"],
        c: 2,
        e: "9 × 6 = 54."
    },
    {
        q: "Berapakah hasil dari 81 ÷ 9?",
        a: ["7", "8", "9", "10"],
        c: 2,
        e: "81 ÷ 9 = 9."
    },
    {
        q: "Angka 7 pada bilangan 3.725 menempati nilai tempat apa?",
        a: ["Satuan", "Puluhan", "Ratusan", "Ribuan"],
        c: 2,
        e: "Angka 7 berada di tempat ratusan, nilainya 700."
    },
    {
        q: "Bilangan setelah 2.999 adalah ...",
        a: ["2.998", "3.000", "3.001", "2.990"],
        c: 1,
        e: "Setelah 2.999 adalah 3.000."
    },
    {
        q: "Berapakah hasil dari 6 × 7 + 2?",
        a: ["42", "44", "48", "50"],
        c: 1,
        e: "Kerjakan perkalian dahulu: 42 + 2 = 44."
    },
    {
        q: "Berapakah hasil dari 48 ÷ 6?",
        a: ["6", "7", "8", "9"],
        c: 2,
        e: "48 ÷ 6 = 8."
    },
    {
        q: "Ibu membeli 3 kantong apel. Setiap kantong berisi 5 apel. Berapa jumlah apel semuanya?",
        a: ["8", "10", "15", "20"],
        c: 2,
        e: "3 × 5 = 15 apel."
    },
    {
        q: "Budi mempunyai 40 kelereng. Ia memberikan 15 kepada temannya. Berapa sisa kelereng Budi?",
        a: ["20", "25", "30", "35"],
        c: 1,
        e: "40 - 15 = 25 kelereng."
    },
    {
        q: "Ada 24 permen yang dibagikan sama rata kepada 4 anak. Setiap anak mendapat ...",
        a: ["4", "5", "6", "8"],
        c: 2,
        e: "24 ÷ 4 = 6 permen."
    },
    {
        q: "Setengah dari 10 adalah ...",
        a: ["2", "4", "5", "8"],
        c: 2,
        e: "Setengah dari 10 adalah 10 ÷ 2 = 5."
    },
    {
        q: "Pecahan yang menunjukkan satu bagian dari empat bagian sama besar adalah ...",
        a: ["1/2", "1/3", "1/4", "1/5"],
        c: 2,
        e: "Satu dari empat bagian ditulis 1/4."
    },
    {
        q: "Mana yang lebih besar?",
        a: ["1/2", "1/4", "Sama besar", "Tidak bisa dibandingkan"],
        c: 0,
        e: "1/2 lebih besar daripada 1/4."
    },
    {
        q: "Satu jam sama dengan berapa menit?",
        a: ["30 menit", "45 menit", "60 menit", "100 menit"],
        c: 2,
        e: "1 jam = 60 menit."
    },
    {
        q: "Pukul 07.00 ditambah 2 jam menjadi pukul ...",
        a: ["08.00", "09.00", "10.00", "11.00"],
        c: 1,
        e: "07.00 + 2 jam = 09.00."
    },
    {
        q: "Satu minggu terdiri dari berapa hari?",
        a: ["5 hari", "6 hari", "7 hari", "8 hari"],
        c: 2,
        e: "Satu minggu terdiri dari 7 hari."
    },
    {
        q: "Berapakah hasil dari 1 meter dalam sentimeter?",
        a: ["10 cm", "50 cm", "100 cm", "1.000 cm"],
        c: 2,
        e: "1 meter = 100 sentimeter."
    },
    {
        q: "Berat sebuah semangka 3 kg. Berapa gram beratnya?",
        a: ["30 gram", "300 gram", "3.000 gram", "30.000 gram"],
        c: 2,
        e: "1 kg = 1.000 gram, jadi 3 kg = 3.000 gram."
    },
    {
        q: "Uang Rp5.000 ditambah Rp2.000 menjadi ...",
        a: ["Rp6.000", "Rp7.000", "Rp8.000", "Rp9.000"],
        c: 1,
        e: "Rp5.000 + Rp2.000 = Rp7.000."
    },
    {
        q: "Ani membeli pensil seharga Rp3.000 dan membayar Rp5.000. Berapa kembaliannya?",
        a: ["Rp1.000", "Rp2.000", "Rp3.000", "Rp4.000"],
        c: 1,
        e: "Rp5.000 - Rp3.000 = Rp2.000."
    },
    {
        q: "Bangun datar yang memiliki 3 sisi adalah ...",
        a: ["Persegi", "Segitiga", "Lingkaran", "Persegi panjang"],
        c: 1,
        e: "Segitiga mempunyai 3 sisi."
    },
    {
        q: "Bangun datar yang memiliki 4 sisi sama panjang adalah ...",
        a: ["Segitiga", "Lingkaran", "Persegi", "Oval"],
        c: 2,
        e: "Persegi memiliki 4 sisi sama panjang."
    },
    {
        q: "Berapa jumlah sudut pada persegi panjang?",
        a: ["2", "3", "4", "5"],
        c: 2,
        e: "Persegi panjang memiliki 4 sudut."
    },
    {
        q: "Bangun ruang yang bentuknya seperti bola sepak adalah ...",
        a: ["Kubus", "Balok", "Bola", "Tabung"],
        c: 2,
        e: "Bola sepak berbentuk bola."
    },
    {
        q: "Berapakah keliling persegi dengan panjang sisi 5 cm?",
        a: ["10 cm", "15 cm", "20 cm", "25 cm"],
        c: 2,
        e: "Keliling persegi = 4 × sisi = 4 × 5 = 20 cm."
    },
    {
        q: "Berapakah hasil dari 250 + 150?",
        a: ["300", "350", "400", "450"],
        c: 2,
        e: "250 + 150 = 400."
    },
    {
        q: "Berapakah hasil dari 800 - 350?",
        a: ["350", "400", "450", "500"],
        c: 2,
        e: "800 - 350 = 450."
    },
    {
        q: "Berapakah hasil dari 12 × 4?",
        a: ["36", "42", "48", "52"],
        c: 2,
        e: "12 × 4 = 48."
    },
    {
        q: "Berapakah hasil dari 100 ÷ 10?",
        a: ["5", "10", "15", "20"],
        c: 1,
        e: "100 ÷ 10 = 10."
    },
    {
        q: "Di perpustakaan ada 125 buku cerita dan 75 buku pelajaran. Berapa jumlah seluruh buku?",
        a: ["175", "190", "200", "210"],
        c: 2,
        e: "125 + 75 = 200 buku."
    },
    {
        q: "Pak Guru memiliki 60 pensil. Pensil dibagikan kepada 10 murid sama banyak. Setiap murid mendapat ...",
        a: ["5", "6", "7", "8"],
        c: 1,
        e: "60 ÷ 10 = 6 pensil."
    },
    {
        q: "Angka Romawi untuk bilangan 5 adalah ...",
        a: ["I", "V", "X", "L"],
        c: 1,
        e: "Angka Romawi V berarti 5."
    },
    {
        q: "Panjang pita 80 cm. Dipotong 30 cm. Berapa panjang sisanya?",
        a: ["40 cm", "50 cm", "60 cm", "70 cm"],
        c: 1,
        e: "80 - 30 = 50 cm."
    },
    {
        q: "Ada 5 kotak. Setiap kotak berisi 10 kue. Berapa jumlah seluruh kue?",
        a: ["15", "40", "50", "60"],
        c: 2,
        e: "5 × 10 = 50 kue."
    },
    {
        q: "Rina mulai belajar pukul 08.00 dan selesai pukul 10.00. Berapa lama Rina belajar?",
        a: ["1 jam", "2 jam", "3 jam", "4 jam"],
        c: 1,
        e: "Dari pukul 08.00 sampai 10.00 adalah 2 jam."
    }
];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressBar = document.getElementById("progressBar");
const answeredCount = document.getElementById("answeredCount");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

function showScreen(screen) {
    startScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");

    screen.classList.remove("hidden");
    window.scrollTo(0, 0);
}

function startQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);

    showScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Soal ${currentQuestion + 1} dari ${questions.length}`;

    questionText.textContent = q.q;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    q.a.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option";
        button.type = "button";

        if (answers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(index) {
    answers[currentQuestion] = index;

    renderQuestion();
}

function updateProgress() {
    const totalAnswered =
        answers.filter(answer => answer !== null).length;

    answeredCount.textContent =
        `${totalAnswered} / ${questions.length} dijawab`;

    nextBtn.disabled = answers[currentQuestion] === null;

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "Selesaikan Kuis ✓";
    } else {
        nextBtn.textContent = "Selanjutnya →";
    }
}

function nextQuestion() {
    if (answers[currentQuestion] === null) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const correct = questions.filter((q, index) =>
        answers[index] === q.c
    ).length;

    const wrong = questions.length - correct;
    const score = Math.round(correct / questions.length * 100);

    document.getElementById("finalScore").textContent = score;
    document.getElementById("correctCount").textContent = correct;
    document.getElementById("wrongCount").textContent = wrong;

    let title = "";
    let message = "";
    let icon = "";

    if (score >= 90) {
        title = "Luar Biasa! 🌟";
        message = "Hebat sekali! Kamu sangat pintar matematika!";
        icon = "🏆";
    } else if (score >= 75) {
        title = "Bagus Sekali! 🎉";
        message = "Hasil yang bagus! Terus tingkatkan kemampuanmu!";
        icon = "🥇";
    } else if (score >= 60) {
        title = "Tetap Semangat! 💪";
        message = "Kamu sudah berusaha dengan baik. Terus berlatih!";
        icon = "🌈";
    } else {
        title = "Jangan Menyerah! ❤️";
        message = "Tidak apa-apa! Pelajari pembahasan dan coba lagi!";
        icon = "📚";
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;
    document.getElementById("resultIcon").textContent = icon;

    progressBar.style.width = "100%";

    showScreen(resultScreen);
}

function showReview() {
    const reviewContainer =
        document.getElementById("reviewContainer");

    reviewContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const isCorrect = answers[index] === q.c;

        const item = document.createElement("div");
        item.className = "review-item";

        const title = document.createElement("h3");
        title.textContent = `${index + 1}. ${q.q}`;

        const status = document.createElement("p");
        status.className = isCorrect
            ? "review-correct"
            : "review-wrong";

        status.textContent = isCorrect
            ? "✓ Jawabanmu benar!"
            : "✗ Jawabanmu belum tepat.";

        const userAnswer = document.createElement("p");
        userAnswer.textContent =
            "Jawabanmu: " +
            (answers[index] === null
                ? "Belum dijawab"
                : q.a[answers[index]]);

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "review-correct";
        correctAnswer.textContent =
            `Jawaban benar: ${q.a[q.c]}`;

        const explanation = document.createElement("p");
        explanation.textContent = "Pembahasan: " + q.e;

        item.append(
            title,
            status,
            userAnswer,
            correctAnswer,
            explanation
        );

        reviewContainer.appendChild(item);
    });

    showScreen(reviewScreen);
}

document.getElementById("startBtn")
    .addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

document.getElementById("reviewBtn")
    .addEventListener("click", showReview);

document.getElementById("restartBtn")
    .addEventListener("click", startQuiz);

document.getElementById("backResultBtn")
    .addEventListener("click", () => showScreen(resultScreen));
