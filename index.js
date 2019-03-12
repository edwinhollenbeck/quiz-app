const exampleQuestion = `
<form>    
    <p>What is CS?</p><br>
    <ul>
        <li><input type='radio'> Creeps Secured</li>
        <li><input type='radio'> Creep Score</li>
        <li><input type='radio'> Creeps Slain</li>
        <li><input type='radio'> Counter Strike<br></li>
    </ul>
    <button class='nextQuestion'>Check</button>
</form>
`

function startQuiz() {
    $('#start').click(function(event) {
        event.preventDefault();
        nextQuestion();
    });
};

function nextQuestion() {
    $('#container').html($(exampleQuestion));
};

$(startQuiz());
