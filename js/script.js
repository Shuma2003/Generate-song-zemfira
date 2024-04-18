// Словарь фраз Земфиры
const phrases = [
    "Я люблю тебя, как любят мой сон",
    "А я и не знала, что можно",
    "А в горле ком и слёзы, и боль, и дым",
    "А день уже кончается, а не начинается",
    "Без сна, без отдыха, без остановки",
    "И твои друзья воспитаны культурно",
    "И это было не мной",
    "Мой светофор любит меня, вроде бы",
    "На третьей планете лево от млечного пути",
    "Осень пришла неожиданно",
    "Тишина, шум, вечность и грохот",
    "Улица связала нас, да",
    "Философия века тревожит мои нервы"
];

// Функция для генерации песни
function generateSong() {
    const songElement = document.getElementById('song');
    const randomPhrases = [];

    // Генерируем случайные фразы
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        randomPhrases.push(phrases[randomIndex]);
    }

    // Формируем текст песни
    let songText = "<h2>Текст песни:</h2><ul>";
    randomPhrases.forEach(phrase => {
        songText += <div>${phrase}</div>;
    });
    songText += "<div>";

    // Выводим текст песни на страницу
    songElement.innerHTML = songText;
}

// Обработчик события нажатия кнопки "Сгенерировать песню"
document.getElementById('generate-btn').addEventListener('click', generateSong);