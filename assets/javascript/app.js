// Question.JS

function Question(text, choices, answer) {
    this.text = text;
    this.choices= choices;
    this.answer= answer;
}

Question.prototype.correctAnswer = funtion(choice) {
    return choice === this.answer;
}

// Quiz Controller

funtion Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = funtion() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.questionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

// App.JS

function populate() {
    if(quiz.isEnded()) {
        // showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = o; i = choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
        }
    }
}

var questions = [
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]), 
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]),
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]),
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]),
    new Question("How many planets in our solar system have rings?", ["One", "Two", "Three", "Four"], ["Four"]),
];

var quiz = new Quiz(questions);

populate();