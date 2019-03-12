//const exampleQuestion = `
//<form>    
//    <p>What is CS?</p><br>
//    <ul>
//        <li><input type='radio' name='answer'> Creeps Secured</li>
//        <li><input type='radio' name='answer'> Creep Score</li>
//        <li><input type='radio' name='answer'> Creeps Slain</li>
//        <li><input type='radio' name='answer'> Counter Strike<br></li>
//    </ul>
//    <button class='nextQuestion'>Check</button>
//</form>
//`

const questions = [
    {
        question: 'What is CS?',
        answer1: 'Creeps Secured',
        answer2: 'Creep Score',
        answer3: 'Creeps Slain',
        answer4: 'Counter Strike',
    },
    {
        question: 'What does pushing a lane mean?',
        answer1: 'Blocking the minions\' movement to slow their progress',
        answer2: 'Attacking the enemy champion to force them back in the lane',
        answer3: 'Killing enemy minions to force yours under the enemy tower, allowing you to attack the tower',
        answer4: 'Moving the towers back on the map',
    },
    {
        question: 'Which of these scenarios would be a good time to take a trade with the enemy champion?',
        answer1: 'If their abilities and/or summoner spells are on cooldown',
        answer2: 'If they just teleported back to lane',
        answer3: 'When the enemy jungler is nearby',
        answer4: 'When your abilities and/or summoner spells are on cooldown',
    },
    {
        question: 'Which of these is not a team strategy?',
        answer1: 'Split',
        answer2: 'Poke',
        answer3: 'Attack',
        answer4: 'Counter Attack',
    },
    {
        question: 'What is not a class of champion?',
        answer1: 'Slayers',
        answer2: 'Fighters',
        answer3: 'Specialists',
        answer4: 'Shooters',
    },
    {
        question: 'Which is not a subclass of champion?',
        answer1: 'Assassin',
        answer2: 'Juggernaut',
        answer3: 'Healer',
        answer4: 'Skirmisher',
    },
    {
        question: 'What two team compositions are weak against a Catch composition?',
        answer1: 'Attack',
        answer2: 'Protect',
        answer3: 'Split',
        answer4: 'Poke',
    },
    {
        question: 'How much LP do you lose for your first dodge of the day?',
        answer1: '3',
        answer2: '10',
        answer3: '5',
        answer4: '0',
    },
    {
        question: 'Do you lose MMR for a dodge?',
        answer1: 'Yes, same as losing the match.',
        answer2: 'Yes, but less than losing a match.',
        answer3: 'No, but you get less LP for your next win.',
        answer4: 'No, you only lose a flat amount of LP.',
    },
    {
        question: 'What is the most hated champion of all time?',
        answer1: 'Teemo',
        answer2: 'Teemo',
        answer3: 'Teemo',
        answer4: 'Teemo',
    },
]

function startQuiz() {
    $('#start').click(function(event) {
        event.preventDefault();
        nextQuestion();
    });
};

let questionNumber = 0;
let score = 0;

function nextQuestion() {
    for (i = 0; i < questions.length; i++) {
        let
        $('#container').html($(questions[i]))
    };
};

$(startQuiz());
