document.addEventListener('DOMContentLoaded', function() {
    // Fun quiz data
    const funQuizzes = {
        movie: {
            title: "Which Movie Character Are You?",
            questions: [
                {
                    question: "How would you describe your personality?",
                    options: [
                        "Brave and adventurous",
                        "Smart and resourceful",
                        "Funny and carefree",
                        "Mysterious and complex"
                    ]
                },
                {
                    question: "What's your ideal weekend?",
                    options: [
                        "Exploring new places",
                        "Reading or learning something new",
                        "Hanging out with friends",
                        "Some alone time to think"
                    ]
                },
                {
                    question: "How do you handle problems?",
                    options: [
                        "Face them head-on",
                        "Find a clever solution",
                        "Make a joke and lighten the mood",
                        "Analyze carefully before acting"
                    ]
                }
            ],
            results: [
                {
                    title: "Indiana Jones",
                    description: "You're an adventurer at heart, always ready for the next challenge!",
                    image: "images/indiana-jones.jpg"
                },
                {
                    title: "Hermione Granger",
                    description: "You're intelligent, resourceful, and always prepared!",
                    image: "images/hermione.jpg"
                },
                {
                    title: "Jack Sparrow",
                    description: "You march to the beat of your own drum and always keep things interesting!",
                    image: "images/jack-sparrow.jpg"
                },
                {
                    title: "Neo from The Matrix",
                    description: "You see the world differently and think deeply about everything!",
                    image: "images/neo.jpg"
                }
            ]
        },
        superhero: {
            title: "What Superpower Should You Have?",
            questions: [
                {
                    question: "What's your greatest strength?",
                    options: [
                        "Physical strength and endurance",
                        "Intelligence and problem-solving",
                        "Creativity and imagination",
                        "Empathy and understanding others"
                    ]
                },
                {
                    question: "What would you do with superpowers?",
                    options: [
                        "Fight crime and protect people",
                        "Invent amazing technology",
                        "Have fun and entertain people",
                        "Help people in subtle ways"
                    ]
                },
                {
                    question: "What's your leadership style?",
                    options: [
                        "Lead from the front",
                        "Strategize and plan",
                        "Inspire through charisma",
                        "Listen and support"
                    ]
                }
            ],
            results: [
                {
                    title: "Super Strength",
                    description: "You should have super strength like Superman or Wonder Woman!",
                    image: "images/super-strength.jpg"
                },
                {
                    title: "Super Intelligence",
                    description: "You should have super intelligence like Iron Man or Batman!",
                    image: "images/super-intelligence.jpg"
                },
                {
                    title: "Reality Warping",
                    description: "You should have reality-warping powers like Scarlet Witch or Dr. Strange!",
                    image: "images/reality-warping.jpg"
                },
                {
                    title: "Telepathy",
                    description: "You should have telepathic powers like Professor X or Jean Grey!",
                    image: "images/telepathy.jpg"
                }
            ]
        }
    };
    
    // DOM elements
    const quizModal = document.getElementById('quiz-modal');
    const quizContainer = document.getElementById('fun-quiz-container');
    const closeBtn = document.querySelector('.close-btn');
    const startQuizBtns = document.querySelectorAll('.start-quiz-btn');
    
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    // Event listeners
    startQuizBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const quizType = this.getAttribute('data-quiz');
            startFunQuiz(quizType);
        });
    });
    
    closeBtn.addEventListener('click', closeQuiz);
    
    // Start a fun quiz
    function startFunQuiz(quizType) {
        currentQuiz = funQuizzes[quizType];
        currentQuestionIndex = 0;
        userAnswers = [];
        
        // Show quiz title
        quizContainer.innerHTML = `<h3>${currentQuiz.title}</h3>`;
        
        showFunQuestion();
        quizModal.style.display = 'flex';
    }
    
    // Show current question
    function showFunQuestion() {
        const question = currentQuiz.questions[currentQuestionIndex];
        
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            optionsHTML += `
                <div class="fun-quiz-option" data-index="${index}">${option}</div>
            `;
        });
        
        const questionHTML = `
            <div class="fun-quiz-question">
                <h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>
                <div class="fun-quiz-options">${optionsHTML}</div>
            </div>
        `;
        
        quizContainer.insertAdjacentHTML('beforeend', questionHTML);
        
        // Add navigation buttons
        if (currentQuestionIndex > 0) {
            quizContainer.insertAdjacentHTML('beforeend', `
                <div class="fun-quiz-navigation">
                    <button id="fun-quiz-prev">Previous</button>
                    ${currentQuestionIndex < currentQuiz.questions.length - 1 ? 
                      '<button id="fun-quiz-next">Next</button>' : 
                      '<button id="fun-quiz-submit">See Result</button>'}
                </div>
            `);
            
            document.getElementById('fun-quiz-prev').addEventListener('click', goToPrevQuestion);
            
            if (currentQuestionIndex < currentQuiz.questions.length - 1) {
                document.getElementById('fun-quiz-next').addEventListener('click', goToNextQuestion);
            } else {
                document.getElementById('fun-quiz-submit').addEventListener('click', showFunResult);
            }
        } else {
            quizContainer.insertAdjacentHTML('beforeend', `
                <div class="fun-quiz-navigation">
                    <button id="fun-quiz-next">Next</button>
                </div>
            `);
            
            document.getElementById('fun-quiz-next').addEventListener('click', goToNextQuestion);
        }
        
        // Add option selection
        const options = document.querySelectorAll('.fun-quiz-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                options.forEach(opt => opt.style.backgroundColor = '');
                this.style.backgroundColor = '#e0f7fa';
                userAnswers[currentQuestionIndex] = parseInt(this.getAttribute('data-index'));
            });
        });
    }
    
    // Navigation functions
    function goToNextQuestion() {
        if (userAnswers[currentQuestionIndex] === undefined) {
            alert('Please select an option!');
            return;
        }
        
        currentQuestionIndex++;
        quizContainer.innerHTML = `<h3>${currentQuiz.title}</h3>`;
        showFunQuestion();
    }
    
    function goToPrevQuestion() {
        currentQuestionIndex--;
        quizContainer.innerHTML = `<h3>${currentQuiz.title}</h3>`;
        showFunQuestion();
    }
    
    // Show quiz result
    function showFunResult() {
        if (userAnswers[currentQuestionIndex] === undefined) {
            alert('Please select an option!');
            return;
        }
        
        // Simple scoring - add up answer indices
        const score = userAnswers.reduce((sum, answer) => sum + answer, 0);
        const resultIndex = Math.min(Math.floor(score / userAnswers.length), currentQuiz.results.length - 1);
        const result = currentQuiz.results[resultIndex];
        
        quizContainer.innerHTML = `
            <div class="fun-quiz-result">
                <h3>Your Result: ${result.title}</h3>
                <p>${result.description}</p>
                <img src="${result.image}" alt="${result.title}">
                <button id="fun-quiz-retake">Retake Quiz</button>
                <button id="fun-quiz-close">Close</button>
            </div>
        `;
        
        document.getElementById('fun-quiz-retake').addEventListener('click', function() {
            startFunQuiz(currentQuiz === funQuizzes.movie ? 'movie' : 'superhero');
        });
        
        document.getElementById('fun-quiz-close').addEventListener('click', closeQuiz);
    }
    
    // Close quiz modal
    function closeQuiz() {
        quizModal.style.display = 'none';
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === quizModal) {
            closeQuiz();
        }
    });
});