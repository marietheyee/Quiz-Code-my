const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');

console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "How To Make Lattes",
        choice2: "Happy To Meet Llamas",
        choice3: "Hypertext Markup Language",
        choice4: "Haha Too Much Laughter",
        answer: 3
    },

    {
        question: "Can you add Javascript into an HTML document?",
        choice1: "Maybe",
        choice2: "Yes, by using script tags",
        choice3: "No, it's illegal",
        choice4: "I don't know",
        answer: 2
    },

    {
        question: "How do you write 'Hello Friend' in an alert box?",
        choice1: "alert('Hello Friend');",
        choice2: "msg('Hello Friend');",
        choice3: "console.log('Hello Friend');",
        choice4: "prompt('HelloFriend'):",
        answer: 1
    },

    {
        question: "What do we use to create a hyperlink to a web page in HTML?",
        choice1: "href",
        choice2: "<a></a>",
        choice3: "Both 1 and 2",
        choice4: "Neither 1 nor 2",
        answer: 3
    },

    {
        question: "What is CSS capable of doing?",
        choice1: "Formatting text",
        choice2: "Adding color",
        choice3: "Sizing objects",
        choice4: "All of the above",
        answer: 4
    }

];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter: 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter>= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice=> {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};    

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout ( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        });
    });

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    }

    startGame();

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " to answer 3 questions! ";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();


    





   