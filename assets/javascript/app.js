//controller
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};
Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};

//timer
var number = 15;

function run() {
    intervalId = setInterval(decrement, 15000);
}

function decrement() {
    for (number = 15; number.length < 0; i--) {
        $("#timer").html(number);
    }}
    setTimeout(fifteenSeconds, 1000 * 1);
    setTimeout(tenSeconds, 1000 * 5);
    setTimeout(fiveSeconds, 1000 * 10);
    setTimeout(timeUp, 1000 * 15);

    function fifteenSeconds() {
        $("#timer").html("You have 15 seconds left!");
        console.log("15 seconds left");
    }

    function tenSeconds() {
        $("#timer").html("You are getting closer 10 seconds left");
        console.log("10 seconds left");
    }

    function fiveSeconds() {
        $("#timer").html("5 Seconds left!!!");
        console.log("5 seconds left");
    }

    function timeUp() {
        $("#timer").html("no time left, you lose!!");
        console.log("No time left, you lose!");
    }



run();
decrement();
//stop();

//questions
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
};
//app
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    };
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1><br>";
    gameOverHtml += "<h2 id='score'> <center>Your score: " + quiz.score + "</center></h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}
var questions = [
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]), 
    new Question("What type of galaxy is most common in the universe?", ["Elliptical", "Spiral", "Irregular", "Four"], ["Elliptical"]),
    new Question("Approximately how old is our universe (in billions of years)?", ["Ten", "Fourteen", "Sixteen", "Seventeen"], ["Fourteen"]),
    new Question("How many planets are in our solar system?", ["Eight", "Nine", "Ten", "Eleven"], ["Eight"]),
    new Question("What is the most common type of star found in the Milky Way?", ["Red Giant", "Blue Giant", "White Dwarf", "Red Dwarf"], ["Red Dwarf"]),
    new Question("Which NASA space flight was the last manned mission to the moon?", ["Apollo 17", "Luna 16", "Explorer 49", "Artemis P2"], "Apollo 17"),
    new Question("How many moon orbit Jupiter?", ["48", "58", "69", "118"], "69")
];
var quiz = new Quiz(questions);
populate();