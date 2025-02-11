//quiz array
const quiz = [
    { 
        question: "Which river is NOT one of the two main rivers that meet in Winnipeg?", 
        options: ["Red River", "Assiniboine River", "Saskatchewan River"],
        correct: 1  // Index of correct answer
    },
    { 
        question: "What is one of Winnipeg's nicknames?", 
        options: ["The Peg", "Prairie City", "The Gateway"], 
        correct: 0  // Index of correct answer
    },
    { 
        question: "Which NHL team is based in Winnipeg?", 
        options: ["Calgary Flames", "Edmonton Oilers", "The Jets"], 
        correct: 2  // Index of correct answer
    },
    { 
        question: "Which famous Canadian museum is located in Winnipeg?", 
        options: ["Royal Museum", "National Gallary of Canada", "Canadian Museum for Human Rights"], 
        correct: 2 // Index of correct answer
    },
    { 
        question: "What is the coldest temperature ever recorded in Winnipeg?", 
        options: ["-25", "-45", "-34"], 
        correct: 1  // Index of correct answer
    },
    { 
        question: "What is the name of Winnipeg's international airport?", 
        options: ["John Diefenbaker International Airport", "Lester B. Pearson International Airport", "James Armstrong Richardson International Airport"], 
        correct: 2  // Index of correct answer
    },
    { 
        question: "Which famous bear was named after Winnipeg?", 
        options: ["Paddington Bear", "Winnie the Pooh", "Yogi Bear"], 
        correct: 1  // Index of correct answer
    },
]

// sets the current state of the quiz
let currentState = 0

// helper function that creates the buttons for each answer option. 
function addAnswerButton(text, nextState) {
    const button = document.createElement("button");
    button.classList.add("option-button");
    button.innerText = text;  // Set button text

    button.addEventListener("click", function() {
        currentState = nextState;
        displayQuestion(); // Refresh the question
    });

    const answersBox = document.getElementById("answers");
    answersBox.appendChild(button);
}


// Function to display the current question and answer options
function displayQuestion() {
    // Gets the question container
    const questionBox = document.getElementById("question");

    // Gets the current question and options from the story array
    const currentQuizQuestion = quiz[currentState];

    // Sets the question text
    questionBox.innerText = currentQuizQuestion.question;

    // checks that the answer is correct

    // Clear previous options
    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    // Creates buttons for each option using the addAnswerButton helper function
    currentQuizQuestion.options.forEach((option, index) => {
        addAnswerButton(option, index);
    });
}

// Call the function to display the initial question and options
displayQuestion();