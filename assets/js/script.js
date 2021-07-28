const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {

}

function selectAnswer() {

}

const questions = [
    
]