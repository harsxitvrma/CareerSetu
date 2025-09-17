document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.querySelector('.quiz-container');
    const questions = document.querySelectorAll('.question-box');
    const nextButton = document.getElementById('next-button');
    const finishButton = document.getElementById('finish-button');
    const progressBarFill = document.querySelector('.progress-bar-fill');

    let currentQuestionIndex = 0;
    const userAnswers = {};

    // Redirect to dashboard if quiz is already completed
    if (localStorage.getItem('hasCompletedQuiz') === 'true') {
        window.location.href = "dashboard.html";
        return; // Stop the script from running further
    }

    // Function to update progress bar
    const updateProgressBar = () => {
        const progress = ((currentQuestionIndex) / (questions.length - 1)) * 100;
        progressBarFill.style.width = `${progress}%`;
    };

    // Show the first question
    questions[currentQuestionIndex].classList.remove('hidden');
    updateProgressBar();

    // Event listener for option buttons to handle selections
    quizContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.closest('.options')) {
            const button = e.target;
            const isMultipleSelect = button.parentElement.classList.contains('multiple-select');
            const isMultipleSelectLimited = button.parentElement.classList.contains('multiple-select-limit');

            if (isMultipleSelect) {
                button.classList.toggle('selected');
            } else if (isMultipleSelectLimited) {
                const siblings = Array.from(button.parentElement.children);
                const selectedCount = siblings.filter(b => b.classList.contains('selected')).length;
                if (button.classList.contains('selected')) {
                    button.classList.remove('selected');
                } else if (selectedCount < 3) {
                    button.classList.add('selected');
                } else {
                    alert("You can select a maximum of 3 subjects.");
                }
            } else {
                // For single-select questions, remove 'selected' from all other buttons
                const siblings = Array.from(button.parentElement.children);
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                button.classList.add('selected');
            }
        }
    });

    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedOptions = currentQuestion.querySelectorAll('.options button.selected');
        const textInput = currentQuestion.querySelector('input[type="text"]');

        if (textInput) {
            userAnswers[textInput.id] = textInput.value.trim();
        }

        if (selectedOptions.length === 0 && !textInput) {
            alert("Please select at least one option.");
            return;
        }

        // Store the answer(s)
        if (selectedOptions.length > 0) {
            const questionType = selectedOptions[0].getAttribute('data-question');
            if (selectedOptions.length > 1) {
                userAnswers[questionType] = Array.from(selectedOptions).map(btn => btn.getAttribute('data-value'));
            } else {
                userAnswers[questionType] = selectedOptions[0].getAttribute('data-value');
            }
        }
        
        // Hide current question and show the next one
        currentQuestion.classList.add('hidden');
        currentQuestionIndex++;
        
        // Skip question 4 if the answer to question 3 was "no"
        if (currentQuestionIndex === 3 && userAnswers['competitive-exams'] === 'no') {
            currentQuestionIndex++;
        }
        
        // Skip question 19 if the answer to question 18 was "no"
        if (currentQuestionIndex === 18 && userAnswers['specific-career'] === 'no') {
            currentQuestionIndex++;
        }

        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.remove('hidden');
            updateProgressBar();
        } else {
            // Quiz is finished, show the finish button
            nextButton.classList.add('hidden');
            finishButton.classList.remove('hidden');
            progressBarFill.style.width = '100%'; // Ensure progress bar is full
        }
    });

    // Event listener for the "Finish" button
    finishButton.addEventListener('click', () => {
        const lastQuestion = questions[currentQuestionIndex - 1];
        const selectedOptions = lastQuestion.querySelectorAll('.options button.selected');
        const textInput = lastQuestion.querySelector('input[type="text"]');

        if (textInput) {
             userAnswers[textInput.id] = textInput.value.trim();
        }

        if (selectedOptions.length > 0) {
            const questionType = selectedOptions[0].getAttribute('data-question');
            if (selectedOptions.length > 1) {
                userAnswers[questionType] = Array.from(selectedOptions).map(btn => btn.getAttribute('data-value'));
            } else {
                userAnswers[questionType] = selectedOptions[0].getAttribute('data-value');
            }
        }

        localStorage.setItem('hasCompletedQuiz', 'true');
        localStorage.setItem('userQuizAnswers', JSON.stringify(userAnswers));
        
        alert('Quiz complete! Redirecting to your personalized dashboard.');
        window.location.href = "dashboard.html";
    });
});