document.addEventListener('DOMContentLoaded', () => {
    // --- User State Management and Redirection ---
    const isNewUser = localStorage.getItem('isNewUser');
    const hasCompletedQuiz = localStorage.getItem('hasCompletedQuiz');

    if (isNewUser === 'true' && hasCompletedQuiz !== 'true') {
        window.location.href = "quiz.html";
        return;
    }

    // --- Dashboard Functionality ---

    // Display user's name (retrieved from a mock source, e.g., login form input)
    const userName = localStorage.getItem('userName') || 'User';
    document.getElementById('user-name').textContent = userName;

    // Retrieve quiz answers from localStorage
    const userAnswersString = localStorage.getItem('userQuizAnswers');
    const userAnswers = userAnswersString ? JSON.parse(userAnswersString) : null;
    
    // Generate and display a mock recommendation based on quiz answers
    const recommendation = generateRecommendation(userAnswers);
    if (recommendation) {
        const recList = document.getElementById('recommendation-list');
        recList.innerHTML = `
            <div class="rec-item">
                <p><strong>Recommended Course:</strong> ${recommendation.course}</p>
            </div>
            <div class="rec-item">
                <p><strong>Recommended Career:</strong> ${recommendation.career}</p>
            </div>
            <div class="rec-item">
                <p><strong>Recommended Colleges:</strong> ${recommendation.college}</p>
            </div>
        `;
    }

    // --- Chatbot Functionality ---
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('close-chatbot');
    const chatBody = document.getElementById('chatbot-body');
    const chatInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    
    // Open chatbot when the floating button is clicked
    chatToggleBtn.addEventListener('click', () => {
        chatbotWindow.style.display = 'flex';
        chatToggleBtn.style.display = 'none';
    });

    // Close chatbot button
    closeBtn.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
        chatToggleBtn.style.display = 'flex';
    });

    // Send button listener
    sendBtn.addEventListener('click', () => {
        sendMessage();
    });

    // Enter key listener
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        // Display user message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.classList.add('message', 'user-message');
        userMsgDiv.textContent = userMessage;
        chatBody.appendChild(userMsgDiv);

        chatInput.value = ''; // Clear input field
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom

        // Get bot response (mock)
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            const botMsgDiv = document.createElement('div');
            botMsgDiv.classList.add('message', 'bot-message');
            botMsgDiv.textContent = botResponse;
            chatBody.appendChild(botMsgDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }

    function getBotResponse(message) {
        message = message.toLowerCase();
        if (message.includes('hello') || message.includes('hi')) {
            return "Hello! I can help you with college and career options. What's your education background?";
        }
        if (message.includes('12th') || message.includes('class 12')) {
            return "Great! After Class 12, you have many options. Are you interested in Science, Commerce, or Arts?";
        }
        if (message.includes('science')) {
            return "Science is a great choice. Are you more interested in engineering, medicine, or research?";
        }
        if (message.includes('engineering') || message.includes('b.tech')) {
            return "A B.Tech in Computer Science is highly sought-after. I can show you colleges and career paths for that. Just click on 'Career Mapping'!";
        }
        if (message.includes('colleges')) {
            return "I can help you find colleges near you. Do you want to see government or private colleges?";
        }
        return "I'm sorry, I don't understand that. Can you ask me about your education or career options?";
    }

    // --- Mock Recommendation Logic ---
    function generateRecommendation(answers) {
        if (!answers) return null;

        const eduLevel = answers['edu-level'];
        const interests = answers['favorite-subjects'];
        const workEnv = answers['work-environment'];
        const specificCareer = answers['career-input'];

        // Example logic
        if (eduLevel === 'class-12' && interests.includes('computer-science') && interests.includes('math') && workEnv === 'office') {
            return {
                course: 'Computer Science Engineering (B.Tech)',
                career: 'Software Developer, Data Scientist',
                college: 'NIT Trichy, IIIT Bangalore, DTU'
            };
        }
        if (eduLevel === 'class-12' && interests.includes('accountancy') && workEnv === 'office') {
            return {
                course: 'Bachelor of Commerce (B.Com)',
                career: 'Financial Analyst, Chartered Accountant',
                college: 'SRCC (Delhi University), Symbiosis'
            };
        }
        if (eduLevel === 'class-10' && interests.includes('science')) {
             return {
                course: 'Science Stream (for Class 11)',
                career: 'Engineering or Medicine',
                college: 'Top schools in your city'
            };
        }
        if (eduLevel === 'undergraduate' && workEnv === 'creative' && interests.includes('creative-profession')) {
             return {
                course: 'Master of Fine Arts (MFA)',
                career: 'Graphic Designer, Art Director',
                college: 'National Institute of Design'
            };
        }
        if (specificCareer) {
            return {
                course: `Based on your interest in ${specificCareer}`,
                career: specificCareer,
                college: 'Based on your location and competitive exams'
            };
        }
        return {
            course: 'General Guidance',
            career: 'Explore more options',
            college: 'Local government colleges'
        };
    }

    // --- User Profile Functionality ---
    const profileIcon = document.getElementById('profile-icon');
    const profileDropdown = document.getElementById('profile-dropdown');
    const signOutBtn = document.getElementById('sign-out-btn');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const userShortName = document.getElementById('user-short-name');
    const eduLevelInfo = document.getElementById('edu-level-info');
    const eduBoardInfo = document.getElementById('edu-board-info');
    const interestsInfo = document.getElementById('interests-info');

    profileIcon.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.add('hidden');
        }
    });

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        profileName.textContent = storedUser.name;
        profileEmail.textContent = storedUser.email;
        userShortName.textContent = storedUser.name.split(' ')[0];
    }

    if (userAnswers) {
        const getQuizAnswer = (key, fallback) => {
            const answer = userAnswers[key];
            if (Array.isArray(answer)) {
                return answer.join(', ').replace(/-/g, ' ');
            }
            return answer ? answer.replace(/-/g, ' ') : fallback;
        };

        eduLevelInfo.textContent = getQuizAnswer('edu-level', 'Not provided');
        eduBoardInfo.textContent = getQuizAnswer('edu-board', 'Not provided');
        interestsInfo.textContent = getQuizAnswer('favorite-subjects', 'Not provided');
    }

    signOutBtn.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = "login.html";
    });
});