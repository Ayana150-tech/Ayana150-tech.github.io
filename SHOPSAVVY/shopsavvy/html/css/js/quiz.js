document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const retakeBtn = document.getElementById('retake-btn');
    const recommendationsContainer = document.getElementById('recommendations');
    
    let currentQuestion = 0;
    let answers = [];
    
    // Quiz questions
    const questions = [
        {
            question: "What is your primary field of study?",
            options: [
                "Computer Science/IT",
                "Engineering",
                "Medicine/Healthcare",
                "Business/Finance",
                "Arts/Humanities",
                "Science (Physics, Chemistry, Biology)",
                "Mathematics"
            ],
            type: "field"
        },
        {
            question: "What type of resources are you most interested in?",
            options: [
                "Textbooks and comprehensive guides",
                "Lecture notes and summaries",
                "Practice problems and exercises",
                "Research papers and journals",
                "Video lectures and tutorials"
            ],
            type: "resource-type"
        },
        {
            question: "What is your current level of education?",
            options: [
                "High School",
                "Undergraduate (Bachelor's)",
                "Graduate (Master's)",
                "PhD/Doctoral",
                "Professional Development"
            ],
            type: "level"
        },
        {
            question: "How do you prefer to learn?",
            options: [
                "Reading text materials",
                "Watching video explanations",
                "Hands-on practice",
                "Group discussions",
                "Visual diagrams and charts"
            ],
            type: "learning-style"
        },
        {
            question: "What is your primary goal for using these resources?",
            options: [
                "Exam preparation",
                "Research and projects",
                "Skill development",
                "Career advancement",
                "Personal interest"
            ],
            type: "goal"
        }
    ];
    
    // Resource recommendations based on answers
    const recommendations = {
        "Computer Science/IT": [
            {name: "Introduction to Algorithms", type: "ebook", link: "resources/ebooks/algorithms.pdf"},
            {name: "Python Programming Guide", type: "ebook", link: "resources/ebooks/python.pdf"},
            {name: "Data Structures Cheat Sheet", type: "pdf", link: "resources/pdfs/ds-cheatsheet.pdf"}
        ],
        "Engineering": [
            {name: "Engineering Mathematics", type: "ebook", link: "resources/ebooks/eng-math.pdf"},
            {name: "Mechanical Engineering Basics", type: "ebook", link: "resources/ebooks/mechanical.pdf"},
            {name: "Circuit Diagrams Collection", type: "pdf", link: "resources/pdfs/circuits.pdf"}
        ],
        "Medicine/Healthcare": [
            {name: "Human Anatomy Atlas", type: "ebook", link: "resources/ebooks/anatomy.pdf"},
            {name: "Medical Terminology Guide", type: "ebook", link: "resources/ebooks/med-terms.pdf"},
            {name: "Common Drug Interactions", type: "pdf", link: "resources/pdfs/drugs.pdf"}
        ],
        "Business/Finance": [
            {name: "Principles of Economics", type: "ebook", link: "resources/ebooks/economics.pdf"},
            {name: "Financial Accounting Basics", type: "ebook", link: "resources/ebooks/accounting.pdf"},
            {name: "Business Plan Template", type: "pdf", link: "resources/pdfs/business-plan.pdf"}
        ],
        "Arts/Humanities": [
            {name: "World History Overview", type: "ebook", link: "resources/ebooks/history.pdf"},
            {name: "Introduction to Philosophy", type: "ebook", link: "resources/ebooks/philosophy.pdf"},
            {name: "Literary Analysis Techniques", type: "pdf", link: "resources/pdfs/literature.pdf"}
        ],
        "Science (Physics, Chemistry, Biology)": [
            {name: "University Physics", type: "ebook", link: "resources/ebooks/physics.pdf"},
            {name: "Organic Chemistry Guide", type: "ebook", link: "resources/ebooks/orgo-chem.pdf"},
            {name: "Cell Biology Diagrams", type: "pdf", link: "resources/pdfs/cell-bio.pdf"}
        ],
        "Mathematics": [
            {name: "Advanced Calculus", type: "ebook", link: "resources/ebooks/calculus.pdf"},
            {name: "Linear Algebra Explained", type: "ebook", link: "resources/ebooks/linear-algebra.pdf"},
            {name: "Mathematical Proofs Collection", type: "pdf", link: "resources/pdfs/proofs.pdf"}
        ]
    };
    
    // Initialize the quiz
    function initQuiz() {
        showQuestion();
        updateProgress();
    }
    
    // Display the current question
    function showQuestion() {
        const question = questions[currentQuestion];
        
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            optionsHTML += `
                <div class="option">
                    <input type="radio" name="answer" id="option${index}" value="${option}" 
                           ${answers[currentQuestion] === option ? 'checked' : ''}>
                    <label for="option${index}">${option}</label>
                </div>
            `;
        });
        
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">${optionsHTML}</div>
            </div>
        `;
        
        // Update button states
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.style.display = currentQuestion < questions.length - 1 ? 'block' : 'none';
        submitBtn.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';
    }
    
    // Update progress bar and text
    function updateProgress() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    }
    
    // Save the selected answer
    function saveAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            answers[currentQuestion] = selectedOption.value;
        }
    }
    
    // Show quiz results
    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Determine primary field of study (from first question)
        const primaryField = answers[0];
        const fieldRecommendations = recommendations[primaryField] || [];
        
        let recommendationsHTML = '<div class="recommendation-grid">';
        
        fieldRecommendations.forEach(item => {
            recommendationsHTML += `
                <div class="recommendation-card">
                    <h4>${item.name}</h4>
                    <p>Type: ${item.type}</p>
                    <a href="${item.link}" class="download-btn">View Resource</a>
                </div>
            `;
        });
        
        // Add some general recommendations
        recommendationsHTML += `
            <div class="recommendation-card">
                <h4>Study Planner Template</h4>
                <p>Type: pdf</p>
                <a href="resources/pdfs/study-planner.pdf" class="download-btn">Download</a>
            </div>
            <div class="recommendation-card">
                <h4>Effective Note-Taking Guide</h4>
                <p>Type: ebook</p>
                <a href="resources/ebooks/note-taking.pdf" class="download-btn">Download</a>
            </div>
        `;
        
        recommendationsHTML += '</div>';
        recommendationsContainer.innerHTML = recommendationsHTML;
    }
    
    // Event listeners
    nextBtn.addEventListener('click', function() {
        saveAnswer();
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
            updateProgress();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
            updateProgress();
        }
    });
    
    submitBtn.addEventListener('click', function() {
        saveAnswer();
        showResults();
    });
    
    retakeBtn.addEventListener('click', function() {
        currentQuestion = 0;
        answers = [];
        quizContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        showQuestion();
        updateProgress();
    });
    
    // Start the quiz
    initQuiz();
});