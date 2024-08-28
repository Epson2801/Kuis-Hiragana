const hiraganaQuestions = [
    { character: 'あ', answer: 'a' },
    { character: 'い', answer: 'i' },
    { character: 'う', answer: 'u' },
    { character: 'え', answer: 'e' },
    { character: 'お', answer: 'o' },
    { character: 'か', answer: 'ka' },
    { character: 'き', answer: 'ki' },
    { character: 'く', answer: 'ku' },
    { character: 'け', answer: 'ke' },
    { character: 'こ', answer: 'ko' },
    { character: 'さ', answer: 'sa' },
    { character: 'し', answer: 'shi' },
    { character: 'す', answer: 'su' },
    { character: 'せ', answer: 'se' },
    { character: 'そ', answer: 'so' },
    { character: 'た', answer: 'ta' },
    { character: 'ち', answer: 'chi' },
    { character: 'つ', answer: 'tsu' },
    { character: 'て', answer: 'te' },
    { character: 'と', answer: 'to' },
    { character: 'が', answer: 'ga' },
    { character: 'ぎ', answer: 'gi' },
    { character: 'ぐ', answer: 'gu' },
    { character: 'げ', answer: 'ge' },
    { character: 'ご', answer: 'go' },
    { character: 'ざ', answer: 'za' },
    { character: 'じ', answer: 'ji' },
    { character: 'ず', answer: 'zu' },
    { character: 'ぜ', answer: 'ze' },
    { character: 'ぞ', answer: 'zo' },
    { character: 'だ', answer: 'da' },
    { character: 'ぢ', answer: 'ji' },
    { character: 'づ', answer: 'zu' },
    { character: 'で', answer: 'de' },
    { character: 'ど', answer: 'do' },
    { character: 'な', answer: 'na' },
    { character: 'に', answer: 'ni' },
    { character: 'ぬ', answer: 'nu' },
    { character: 'ね', answer: 'ne' },
    { character: 'の', answer: 'no' },
    { character: 'は', answer: 'ha' },
    { character: 'ひ', answer: 'hi' },
    { character: 'ふ', answer: 'fu' },
    { character: 'へ', answer: 'he' },
    { character: 'ほ', answer: 'ho' },
    { character: 'ば', answer: 'ba' },
    { character: 'び', answer: 'bi' },
    { character: 'ぶ', answer: 'bu' },
    { character: 'べ', answer: 'be' },
    { character: 'ぼ', answer: 'bo' },
    { character: 'ぱ', answer: 'pa' },
    { character: 'ぴ', answer: 'pi' },
    { character: 'ぷ', answer: 'pu' },
    { character: 'ぺ', answer: 'pe' },
    { character: 'ぽ', answer: 'po' },
    { character: 'ま', answer: 'ma' },
    { character: 'み', answer: 'mi' },
    { character: 'む', answer: 'mu' },
    { character: 'め', answer: 'me' },
    { character: 'も', answer: 'mo' },
    { character: 'ら', answer: 'ra' },
    { character: 'り', answer: 'ri' },
    { character: 'る', answer: 'ru' },
    { character: 'れ', answer: 're' },
    { character: 'ろ', answer: 'ro' },
    { character: 'や', answer: 'ya' },
    { character: 'ゆ', answer: 'yu' },
    { character: 'よ', answer: 'yo' },
    { character: 'わ', answer: 'wa' },
    { character: 'を', answer: 'wo' },
    { character: 'ん', answer: 'n' },

    // Tambahan karakter hiragana kombinasi
    { character: 'きゃ', answer: 'kya' },
    { character: 'きゅ', answer: 'kyu' },
    { character: 'きょ', answer: 'kyo' },
    { character: 'しゃ', answer: 'sha' },
    { character: 'しゅ', answer: 'shu' },
    { character: 'しょ', answer: 'sho' },
    { character: 'ちゃ', answer: 'cha' },
    { character: 'ちゅ', answer: 'chu' },
    { character: 'ちょ', answer: 'cho' },
    { character: 'にゃ', answer: 'nya' },
    { character: 'にゅ', answer: 'nyu' },
    { character: 'にょ', answer: 'nyo' },
    { character: 'ひゃ', answer: 'hya' },
    { character: 'ひゅ', answer: 'hyu' },
    { character: 'ひょ', answer: 'hyo' },
    { character: 'みゃ', answer: 'mya' },
    { character: 'みゅ', answer: 'myu' },
    { character: 'みょ', answer: 'myo' },
    { character: 'りゃ', answer: 'rya' },
    { character: 'りゅ', answer: 'ryu' },
    { character: 'りょ', answer: 'ryo' },
    { character: 'ぎゃ', answer: 'gya' },
    { character: 'ぎゅ', answer: 'gyu' },
    { character: 'ぎょ', answer: 'gyo' },
    { character: 'じゃ', answer: 'ja' },
    { character: 'じゅ', answer: 'ju' },
    { character: 'じょ', answer: 'jo' },
    { character: 'びゃ', answer: 'bya' },
    { character: 'びゅ', answer: 'byu' },
    { character: 'びょ', answer: 'byo' },
    { character: 'ぴゃ', answer: 'pya' },
    { character: 'ぴゅ', answer: 'pyu' },
    { character: 'ぴょ', answer: 'pyo' },
];

// Ambil elemen audio
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

let currentQuestionIndex = 0;
let shuffledQuestions = [];

// Fungsi untuk mengacak soal
function shuffleQuestions() {
    shuffledQuestions = [...hiraganaQuestions].sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const feedbackElement = document.getElementById("feedback");

    // Hilangkan teks soal dan feedback dengan animasi
    questionElement.classList.remove('show');
    feedbackElement.innerText = "";

    setTimeout(() => {
        // Tampilkan soal baru setelah animasi keluar selesai
        questionElement.innerText = `Apa huruf ini: ${shuffledQuestions[currentQuestionIndex].character}?`;
        questionElement.classList.add('show'); // Aktifkan animasi fade-in
    }, 500); // Setengah detik untuk efek fade-out
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.innerText = "Benar!";
        correctSound.play(); // Putar suara jawaban benar
    } else {
        feedbackElement.innerText = `Salah! Jawabannya adalah ${correctAnswer}.`;
        wrongSound.play(); // Putar suara jawaban salah
    }

    // Pindah ke soal berikutnya dengan animasi setelah 2 detik
    currentQuestionIndex = (currentQuestionIndex + 1) % shuffledQuestions.length;
    document.getElementById("answer").value = "";
    setTimeout(showQuestion, 2000);
}

// Menangkap event 'Enter' di input field
document.getElementById("answer").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah submit form default
        checkAnswer(); // Panggil fungsi checkAnswer saat tombol Enter ditekan
    }
});

// Acak soal saat halaman dimuat
window.onload = () => {
    shuffleQuestions();
    showQuestion();
};
