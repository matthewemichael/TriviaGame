$( document ).ready(function() {

const quizQuestions = [
    {
        question: "What is the capitol of Tennessee?",
        choices: ["Nashville", "Knoxville", "Memphis"],
        correctAnswer: "Nashville"
    },

    {
        question: "How many congressmen does TN have in the House of Representatives?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "9" 
    },
    
    {
        question: "How many presidents have been from Tennessee?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "3" 
    }
];


// Initial values
let counter = 30;
let currentQuestion = 0;
let wins = 0;
let losses = 0;
let unanswered = 0;
let timer;

// Display the question and choices in the browser

function loadQuestion() {
    const question = quizQuestions[currentQuestion].question; 
    const choices = quizQuestions[currentQuestion].choices; 

    $('#game').html('<h4>' + question + '<h4>');
}

$( ".start" ).click(function()  {
    $("#game-start").remove();
    $(".container").append("<div class='row' id='game-running'>")
    $("#game-running").append("<div class='col-sm-12' id='time'>", "<div class='col-sm-12' id='game'>")
    loadQuestion();
});

});