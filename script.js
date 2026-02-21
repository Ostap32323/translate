// ===== СЛОВНИК =====
dictionary = {
    "привіт": "абдула",
    "бувай": "абдула",
    "здоров": "абдула",
    "папа": "абдула",
    "друг": "мед",
    "бро": "мед",
    "другу": "мед",
    "друже": "мед",
    "як справи": "идкуд",
    "погано": "хол",
    "добре": "іши",
    "йди нахуй": "улва",
    "підарас": "кул",
    "так": "шіл",
    "ні": "хіл",
    "нерозумію": "лух",
    "нерозуміє": "лух",
    "він": "рам",
    "вона": "тов",
    "ти": "ню",
    "томущо": "болш",
    "томушо": "болш",
    "чого": "адна",
    "чому": "адна",
    "його": "ул",
    "її": "ул",
    "та": "шіл",
    "нє": "хіл",
    "соси хуй": "адава",
    "шалава": "цок",
    "шлюха": "цок",
    "я твій рот шатав": "улобгіг",
    "я твій рот шатал": "улобгіг",
    "я твій рот їбав": "улобгіг"
}

// ===== ЕЛЕМЕНТИ =====
const input = document.getElementById("input");
const output = document.getElementById("output");
const translateBtn = document.getElementById("translateBtn");
const clearBtn = document.getElementById("clearBtn");
const toggleMusicBtn = document.getElementById("toggleMusicBtn");
const nextTrackBtn = document.getElementById("nextTrackBtn");
const bgButtons = document.querySelectorAll(".bg-buttons button");

// ===== ФУНКЦІЇ =====
function translateText() {
    let text = input.value.toLowerCase().trim();
    if (!text) return alert("Введи текст!");
    let result = text;
    Object.keys(dictionary).sort((a,b)=>b.length-a.length).forEach(key=>{
        result = result.replaceAll(key, dictionary[key]);
    });
    output.value = result;
}

function clearText() {
    input.value = "";
    output.value = "";
}

// ===== МУЗИКА =====
const tracks = ["music.mp3","vladikmusic.mp3","enot.mp3"];
let currentTrack = 0;
let music = new Audio(tracks[currentTrack]);
music.loop = true;
music.play();

function toggleMusic() {
    music.paused ? music.play() : music.pause();
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    music.src = tracks[currentTrack];
    music.play();
}

// ===== ФОН =====
bgButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.style.background = `url("${btn.dataset.bg}") center/cover no-repeat`;
    });
});

// ===== ПОДІЇ =====
translateBtn.addEventListener("click", translateText);
clearBtn.addEventListener("click", clearText);
toggleMusicBtn.addEventListener("click", toggleMusic);
nextTrackBtn.addEventListener("click", nextTrack);