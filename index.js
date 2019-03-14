let questionNumber = 0;
let score = 0;

const questions = [
    {
        question: 'What is CS?',
        answer1: 'Creeps Secured',
        answer2: 'Creep Score',
        answer3: 'Creeps Slain',
        answer4: 'Counter Strike',
        correctAnswer: 'Creep Score',
    },
    {
        question: 'What does pushing a lane mean?',
        answer1: 'Blocking the minions movement to slow their progress',
        answer2: 'Attacking the enemy champion to force them back in the lane',
        answer3: 'Killing enemy minions to force yours under the enemy tower, allowing you to attack the tower',
        answer4: 'Moving the towers back on the map',
        correctAnswer: 'Killing enemy minions to force yours under the enemy tower, allowing you to attack the tower',
    },
    {
        question: 'When would be a good time to take a trade with the enemy champion?',
        answer1: 'If their abilities and/or summoner spells are on cooldown',
        answer2: 'If they just teleported back to lane',
        answer3: 'When the enemy jungler is nearby',
        answer4: 'When your abilities and/or summoner spells are on cooldown',
        correctAnswer: 'If their abilities and/or summoner spells are on cooldown',
    },
    {
        question: 'Which of these is not a team strategy?',
        answer1: 'Split',
        answer2: 'Poke',
        answer3: 'Attack',
        answer4: 'Counter Attack',
        correctAnswer: 'Counter Attack',
    },
    {
        question: 'What is not a class of champion?',
        answer1: 'Slayers',
        answer2: 'Fighters',
        answer3: 'Specialists',
        answer4: 'Shooters',
        correctAnswer: 'Shooters',
    },
    {
        question: 'Which is not a subclass of champion?',
        answer1: 'Assassin',
        answer2: 'Juggernaut',
        answer3: 'Healer',
        answer4: 'Skirmisher',
        correctAnswer: 'Healer',
    },
    {
        question: 'What team composition is weak against a Catch composition?',
        answer1: 'Attack',
        answer2: 'Protect',
        answer3: 'Catch',
        answer4: 'Poke',
        correctAnswer: 'Attack',
    },
    {
        question: 'How much LP do you lose for your first dodge of the day?',
        answer1: '3',
        answer2: '10',
        answer3: '5',
        answer4: '0',
        correctAnswer: '3',
    },
    {
        question: 'Do you lose MMR for a dodge?',
        answer1: 'Yes, same as losing the match.',
        answer2: 'Yes, but less than losing a match.',
        answer3: 'No, but you get less LP for your next win.',
        answer4: 'No, you only lose a flat amount of LP.',
        correctAnswer: 'No, you only lose a flat amount of LP.',
    },
    {
        question: 'What is the most hated champion of all time?',
        answer1: 'Teemo',
        answer2: 'Teemo',
        answer3: 'Teemo',
        answer4: 'Teemo',
        correctAnswer: 'Teemo',
    },
]

function questionTemplate() {
    return `<form id='questionForm'>    
    <p>${questions[questionNumber].question}</p><br>
    <ul>
        <label class='radioButton'><li><input type='radio' name='answer' class='answer' value='${questions[questionNumber].answer1}' required><span>${questions[questionNumber].answer1}</span></li></label>
        <label class='radioButton'><li><input type='radio' name='answer' class='answer' value='${questions[questionNumber].answer2}' required><span>${questions[questionNumber].answer2}</span></li></label>
        <label class='radioButton'><li><input type='radio' name='answer' class='answer' value='${questions[questionNumber].answer3}' required><span>${questions[questionNumber].answer3}</span></li></label>
        <label class='radioButton'><li><input type='radio' name='answer' class='answer' value='${questions[questionNumber].answer4}' required><span>${questions[questionNumber].answer4}</span></li></label>
    </ul>
    <button id='check'>Check</button>
</form>
`
};

function startQuiz() {
    $('#start').click(function(event) {
        event.preventDefault();
        firstQuestion();
        checkAnswer();
        nextQuestion();
    });
};

function firstQuestion() {
    $('#container').html(questionTemplate());
    $('.questionNumber').text('1');
};

function ifAnswerIsCorrect() {
    $('#container').html(`
      <p>Correct!</p>
      <button class='nextButton'>Next</button>
      `);
    score+=1;
    $('.score').text(score);
};

function ifAnswerIsWrong() {
    $('#container').html(`
      <P>Wrong</p>
      <button class='nextButton'>Next</button>
    `)
};

function results() {
    return `<p>Your final score is ${score}/10</p>
    <button class='restart'>Try Again</button>`
};

function restartQuiz() {
    $('.restart').click(function(event) {
        location.reload();
    });
};

function nextQuestion() {
    $('#container').on('click', '.nextButton', function(event) {
        event.preventDefault();
        questionNumber+=1;
        if (questionNumber < questions.length) {
            $('#container').html(questionTemplate());
            $('.questionNumber').text(questionNumber+1);
            checkAnswer();
        } else {
            $('#container').html(results());
            restartQuiz();
        };
    });
};

function checkAnswer() {
    $('#questionForm').submit(function(event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${questions[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            ifAnswerIsCorrect();
        } else {
            ifAnswerIsWrong();
        };
    });
};

$(startQuiz());