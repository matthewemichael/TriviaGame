$( document ).ready(function() {

const quizQuestions = [
    {
        question: "What is the capitol of Tennessee?",
        answers: ["Nashville", "Knoxville", "Memphis"],
        correctAnswer: "Nashville"
    },

    {
        question: "How many congressmen does TN have in the House of Representatives?",
        answers: ["6", "7", "8", "9"],
        correctAnswer: "9" 
    },
    
    {
        question: "How many presidents have been from Tennessee?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "3" 
    }
];


// Initial values
let counter = 5;
let currentQuestion = 0;
let wins = 0;
let losses = 0;
let unanswered = 0;
let timer;


// When time expires go to next question
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        //
        displayResults();
        console.log("game over")
    }
    else {
        currentQuestion++;
        loadQuestion();
    }
}

// Stop timer
function timeUp() {
    clearInterval(timer);
    unanswered++;
    nextQuestion();
}

// Start a 30 second timer for each question
function countDown() {
    counter--;

    $('#time').html(`
        Timer: ${counter}<p>
    `)
    if (counter === 0) {
        timeUp();
    }
}

// Display the question and answers in the browser
function loadQuestion() {
    counter = 5;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question; 
    const answers = quizQuestions[currentQuestion].answers; 

    $('#time').html(`
        Timer: ${counter}<p>
    `)    
    $('#game').html(`
        <h4>${question}</h4><br>
        ${loadAnswers(answers)}
    `);
}

function loadAnswers(answers){
    let result = '';
    for (let i = 0; i < answers.length; i++) {
        result += `<p class="choice" data-answer="${answers[i]}">${answers[i]}</p>`
    }

    return result;
};

// Display wins, losses and unanswered question stats at the end of the game
function displayResults() {
    const result = `
        <p>Out of ${quizQuestions.length} questions...</p>
        <p>You got ${wins} question(s) correct</p>
        <p>You incorrecty answered ${losses} question(s)<p>
        <p>You didn't even bother to answer ${unanswered} question(s)<p>
        <button>Reset Game</button>
    `;

    $('#game').html(result);
}


// If right or wrong answer selected go to next question
$(document).on('click', '.choice', function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        wins++
        nextQuestion();
        console.log("winner")
    }
    else {
        losses++
        nextQuestion();
        console.log("loser")
    }
});



$( ".start" ).click(function()  {
    $("#game-start").remove();
    $(".container").append("<div class='row' id='game-running'>")
    $("#game-running").append("<div class='col-sm-12' id='time'>", "<div class='col-sm-12' id='game'>")
    loadQuestion();
});

});