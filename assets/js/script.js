const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Who said, “On October 3rd, he asked me what day it was."?',
        answers: [
            {text: 'Cady', correct: true},
            {text: 'Karen', correct: false},
            {text: 'Aaron', correct: false},
            {text: 'Regina', correct: false},
        ]
    }
    , {
        question: 'Who said, “Get in, loser. We’re going shopping!”?',
        answers: [
            {text: 'Mrs. George', correct: false},
            {text: 'Regina', correct: true},
            {text: 'Janis', correct: false},
            {text: "Cady's Mom", correct: false},
        ]
    }
    , {
        question: 'Who said. "I am sorry that people are so jealous of me. But I cannot help it that I am popular."?',
        answers: [
            {text: 'Karen', correct: false},
            {text: 'Damian', correct: false},
            {text: 'Kevin', correct: false},
            {text: 'Gretchen', correct: true},
        ]
    }
]