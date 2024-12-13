document.addEventListener("DOMContentLoaded", () => {
    let username = prompt("Введіть ваше ім'я:") || "Гравець"; // Ім'я за замовчуванням
    const playerNameElement = document.getElementById("player-name");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    const roundElement = document.getElementById("game-score");
    const playerCardElement = document.getElementById("player-card");
    const computerCardElement = document.getElementById("computer-card");
    const generateBtn = document.getElementById("generate-btn");
    const restartBtn = document.getElementById("restart-btn");
  
    const cards = [
      { name: "6", value: 6, img: "img/6.png" },
      { name: "7", value: 7, img: "img/7.png" },
      { name: "8", value: 8, img: "img/8.png" },
      { name: "9", value: 9, img: "img/9.png" },
      { name: "10", value: 10, img: "img/10.png" },
      { name: "Валет", value: 2, img: "img/jack.png" },
      { name: "Дама", value: 3, img: "img/queen.png" },
      { name: "Король", value: 4, img: "img/king.png" },
      { name: "Туз", value: 11, img: "img/ace.png" },
    ];
  
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;
  
    // Встановлюємо ім'я гравця
    playerNameElement.textContent = username;
  
    // Генерація випадкової карти
    function getRandomCard() {
      const randomIndex = Math.floor(Math.random() * cards.length);
      return cards[randomIndex];
    }
  
    // Оновлення гри
    function updateGame() {
      if (currentRound < 3) {
        currentRound++; // Переходимо до наступного раунду
  
        // Генеруємо карти для гравця та комп'ютера
        const playerCard = getRandomCard();
        const computerCard = getRandomCard();
  
        // Оновлюємо рахунок
        playerScore += playerCard.value;
        computerScore += computerCard.value;
  
        // Відображаємо карти
        playerCardElement.src = playerCard.img;
        computerCardElement.src = computerCard.img;
  
        // Оновлюємо текст рахунку
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
  
        // Оновлюємо раунд
        roundElement.textContent = `Раунд ${currentRound} із 3`;
      }
  
      // Якщо раунди закінчились
      if (currentRound === 3) {
        generateBtn.disabled = true;
        const result =
          playerScore > computerScore
            ? `${username} виграв! 🎉`
            : playerScore < computerScore
            ? "Комп'ютер виграв! 🤖"
            : "Нічия! 🤝";
  
        roundElement.textContent = result;
  
        // Показати кнопку рестарту
        restartBtn.style.display = "inline-block";
      }
    }
  
    // Перезапуск гри
    function restartGame() {
      playerScore = 0;
      computerScore = 0;
      currentRound = 0;
  
      playerScoreElement.textContent = playerScore;
      computerScoreElement.textContent = computerScore;
      roundElement.textContent = "Натисніть кнопку для початку гри";
  
      playerCardElement.src = "img/card-back.png";
      computerCardElement.src = "img/card-back.png";
  
      generateBtn.disabled = false;
      restartBtn.style.display = "none";
    }
  
    // Додаємо слухачі подій
    generateBtn.addEventListener("click", updateGame);
    restartBtn.addEventListener("click", restartGame);
  });
  