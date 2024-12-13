document.addEventListener('DOMContentLoaded', () => {
    // Создание основных элементов
    const ballContainer = document.createElement('div');
    ballContainer.className = 'ball-container';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    const questionInput = document.createElement('input');
    questionInput.className = 'question-input';
    questionInput.placeholder = 'Задайте питання';

    const askButton = document.createElement('button');
    askButton.className = 'ask-button';
    askButton.textContent = '🔮';

    const response = document.createElement('div');
    response.className = 'response';

    // Построение DOM-структуры
    inputContainer.appendChild(questionInput);
    inputContainer.appendChild(askButton);
    ballContainer.appendChild(inputContainer);
    ballContainer.appendChild(response);
    document.body.appendChild(ballContainer);

    // Логика работы шара
    const answers = ["Yes", "No", "Maybe", "Ask again later"];
    
    askButton.addEventListener('click', () => {
        const questionText = questionInput.value.trim();

        if (questionText === "") {
            alert("Будь ласка, введіть питання!");
            return;
        }


        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        response.textContent = randomAnswer;
        response.classList.add('fade-in');

        setTimeout(() => {
            response.classList.remove('fade-in');
        }, 2000);
    });
});
