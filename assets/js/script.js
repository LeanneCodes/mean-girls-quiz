const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

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
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Game Over';
        startButton.classList.remove('hide');
    }
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
    , {
        question: 'Who said, “On Wednesdays, we wear pink”?',
        answers: [
            {text: 'Mrs. George', correct: false},
            {text: 'Ms. Norbury', correct: false},
            {text: 'Karen', correct: true},
            {text: 'Regina', correct: false},
        ]
    }
    , {
        question: 'Who said, “Raise your hand if you have ever been personally victimised by Regina George?”?',
        answers: [
            {text: 'Principal Duvall', correct: false},
            {text: 'Ms. Norbury', correct: true},
            {text: 'Mrs. George', correct: false},
            {text: "Cady's Mom", correct: false},
        ]
    }
    , {
        question: 'Who said, “That’s why her hair is so big. It’s full of secrets.”?',
        answers: [
            {text: 'Janis', correct: false},
            {text: 'Cady', correct: false},
            {text: 'Gretchen', correct: false},
            {text: 'Damian', correct: true},
        ]
    }
    , {
        question: 'Who said, “There are two kinds of evil people in this world. Those who do evil stuff and those who see evil stuff being done and do not try to stop it.”?',
        answers: [
            {text: "Cady's Mom", correct: false},
            {text: 'Principal Duvall', correct: false},
            {text: 'Cady', correct: false},
            {text: 'Janis', correct: true},
        ]
    }
    , {
        question: 'Who said, “Made out with a hot dog? Oh my god that was one time!”?',
        answers: [
            {text: 'Janis', correct: false},
            {text: 'Amber', correct: true},
            {text: 'Karen', correct: false},
            {text: 'Damian', correct: false},
        ]
    }
    , {
        question: 'Who said, “She doesn’t even go here!”?',
        answers: [
            {text: 'Kevin', correct: false},
            {text: 'Damian', correct: true},
            {text: 'Aaron', correct: false},
            {text: 'Regina', correct: false},
        ]
    }
    , {
        question: 'Who said, “This is so fetch!”?',
        answers: [
            {text: 'Gretchen', correct: true},
            {text: 'Cady', correct: false},
            {text: 'Damian', correct: false},
            {text: 'Principal Duvall', correct: false},
        ]
    }
]