let userScore = 0;
let computerScore = 0;
const winningScore = 3;
let userName = "Користувач";

document.addEventListener("DOMContentLoaded", () => {
    userName = prompt("Введіть ваше ім'я:") || "Користувач";
    document.getElementById("welcomeMessage").innerText = `Вітаємо, ${userName}!`;
    document.getElementById("userLabel").innerText = userName;
    document.getElementById("generateButton").addEventListener("click", playRound);
});

function playRound() {
    const userNumber = Math.floor(Math.random() * 99) + 1;
    const computerNumber = Math.floor(Math.random() * 99) + 1;

    
    document.getElementById("userNumber").innerText = userNumber;
    document.getElementById("computerNumber").innerText = computerNumber;

    const resultMessageElement = document.getElementById("resultMessage");

    resultMessageElement.classList.remove("result-win", "result-lose", "result-draw");

    if (userNumber > computerNumber) {
        userScore++;
        resultMessageElement.innerText = `${userName} виграв раунд.`;
        resultMessageElement.classList.add("result-win");
    } else if (computerNumber > userNumber) {
        computerScore++;
        resultMessageElement.innerText = `Комп'ютер виграв раунд.`;
        resultMessageElement.classList.add("result-lose");
    } else {
        resultMessageElement.innerText = `Нічия.`;
        resultMessageElement.classList.add("result-draw");
    }

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;

    checkWinner();
}

function checkWinner() {
    if (userScore === winningScore) {
        setTimeout(() => {
            alert(`${userName} виграв гру!`);
            resetGame();
        }, 100);
    } else if (computerScore === winningScore) {
        setTimeout(() => {
            alert("Комп'ютер виграв гру!");
            resetGame();
        }, 100);
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("userNumber").innerText = "1";
    document.getElementById("computerNumber").innerText = "1";
    document.getElementById("resultMessage").innerText = "Гру перезапущено!";
    document.getElementById("resultMessage").classList.remove("result-win", "result-lose", "result-draw");
}
