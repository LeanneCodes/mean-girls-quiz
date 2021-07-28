const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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