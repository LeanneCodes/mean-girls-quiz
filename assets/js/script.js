/** The variables that are needed to allow the quiz to work. */
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreAreaElement = document.getElementById('score-area');
let countRightAnswers = 0;

/** This let variable doesn't need a value assigned
 * we just need to declare it.
 */
let listOfQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/** This is what the user will see first when the quiz loads
 * Once the user has clicked on the start button
 * they will be directed the first question.
 */
function startGame() {
    startButton.classList.add('hide');
    countRightAnswers = 0;
    listOfQuestions = questions;
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

/** When the user moves onto the next question the cells
 * will also return to the neutral colour palette.
 */
function setNextQuestion() {
    resetState();
    showQuestion(listOfQuestions[currentQuestionIndex]);
}

/** For every question, the assigned answer options
 * will appear in the 4 answer button cells. If the
 * answer is correct it will highlight in green, if wrong,
 * highlight in red. The disable button is there to
 * prevent users from clicking on the correct answer
 * multiple of times.
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } 
        answerButtonsElement.appendChild(button);
        answerButtonsElement.classList.remove('disable');
    }); 
}

/** Before the user can move onto the next question
 * they need to choose an answer and then the next
 * button will appear. When the next question does show,
 * the answer buttons update with the new question.
 * Additionally, the score will appear after an answer
 * has been chosen and update accordingly.
 */
function resetState() {
    nextButton.classList.add('hide');
    scoreAreaElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/** This function fetches for the correct answer amongst the
 * array of options that are listed in the Q&A section at the bottom
 * of the script. It also notifies the system that once the
 * user has come to end of the quiz, the quiz will restart from
 * the beginning. Additionally, if a user gets an answer correct
 * their score will increase by 1 each time. If not, an alert will
 * pop up telling them "Better luck next time!".
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (listOfQuestions.length > currentQuestionIndex + 1) {
        answerButtonsElement.classList.add('disable');
        nextButton.classList.remove('hide');
    } else {
        answerButtonsElement.classList.add('disable');
        startButton.innerText = 'Restart Quiz';
        startButton.classList.remove('hide');
    }
    scoreAreaElement.classList.remove('hide');
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
     } else {
         alert('Your answer was incorrect. The correct answer is highlighted in green. Better luck next time!');
     }
     document.getElementById('right-answers').innerHTML = countRightAnswers;
}

/** This function tells the system that when the user gets the
 * answer correct, the appropriate colour formatting will be applied.
 * The same function applies if the user gets the answer wrong.
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/** When the user moves on to the next question, the previous
 * score colours will be removed and the cells return to their
 * neutral colour.
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/** Questions and answers to be used in the quiz. */
const questions = [
    {
        question: 'Q1. Who said, “On October 3rd, he asked me what day it was."?',
        answers: [
            {text: 'Cady', correct: true},
            {text: 'Karen', correct: false},
            {text: 'Aaron', correct: false},
            {text: 'Regina', correct: false},
        ]
    }, {
        question: 'Q2. Who said, “Get in, loser. We’re going shopping!”?',
        answers: [
            {text: 'Mrs. George', correct: false},
            {text: 'Regina', correct: true},
            {text: 'Janis', correct: false},
            {text: "Cady's Mom", correct: false},
        ]
    }, {
        question: 'Q3. Who said. "I am sorry that people are so jealous of me. But I cannot help it that I am popular."?',
        answers: [
            {text: 'Karen', correct: false},
            {text: 'Damian', correct: false},
            {text: 'Kevin', correct: false},
            {text: 'Gretchen', correct: true},
        ]
    }, {
        question: 'Q4. Who said, “On Wednesdays, we wear pink”?',
        answers: [
            {text: 'Mrs. George', correct: false},
            {text: 'Ms. Norbury', correct: false},
            {text: 'Karen', correct: true},
            {text: 'Regina', correct: false},
        ]
    }, {
        question: 'Q5. Who said, “Raise your hand if you have ever been personally victimised by Regina George?”?',
        answers: [
            {text: 'Principal Duvall', correct: false},
            {text: 'Ms. Norbury', correct: true},
            {text: 'Mrs. George', correct: false},
            {text: "Cady's Mom", correct: false},
        ]
    }, {
        question: 'Q6. Who said, “That’s why her hair is so big. It’s full of secrets.”?',
        answers: [
            {text: 'Janis', correct: false},
            {text: 'Cady', correct: false},
            {text: 'Gretchen', correct: false},
            {text: 'Damian', correct: true},
        ]
    }, {
        question: "Q7. Who said, “You're plastic. Cold, shiny, hard plastic!”?",
        answers: [
            {text: "Cady's Mom", correct: false},
            {text: 'Principal Duvall', correct: false},
            {text: 'Cady', correct: false},
            {text: 'Janis', correct: true},
        ]
    }, {
        question: 'Q8. Who said, “Made out with a hot dog? Oh my god that was one time!”?',
        answers: [
            {text: 'Janis', correct: false},
            {text: 'Amber', correct: true},
            {text: 'Karen', correct: false},
            {text: 'Damian', correct: false},
        ]
    }, {
        question: 'Q9. Who said, “She doesn’t even go here!”?',
        answers: [
            {text: 'Kevin', correct: false},
            {text: 'Damian', correct: true},
            {text: 'Aaron', correct: false},
            {text: 'Regina', correct: false},
        ]
    }, {
        question: 'Q10. Who said, “This is so fetch!”?',
        answers: [
            {text: 'Gretchen', correct: true},
            {text: 'Cady', correct: false},
            {text: 'Damian', correct: false},
            {text: 'Principal Duvall', correct: false},
        ]
    }
];