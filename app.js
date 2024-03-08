const sbt = document.getElementById('sbt');
const inp = document.getElementById('inp');
const score = document.getElementById('score');
const quest = document.getElementById('quest');

let scores = 0;
// todo: generates new question
function generateQuestion() {
    let num1 = Math.ceil(Math.random() * 10);
    let num2 = Math.ceil(Math.random() * 10);
    quest.innerText = `What is ${num1} multiplied by ${num2}?`;
    return num1 * num2; // Return the correct answer
}

let check = generateQuestion();
score.innerText = `Your score is: ${scores}`;

sbt.addEventListener('click', function() {
    const userAns = +inp.value;
    if (userAns === check) {
        scores++;
        score.innerText = `Your score is: ${scores}`;
    } else {
        scores--;
        score.innerText = `Your score is: ${scores}`;
    }
    check = generateQuestion();
    inp.value = ''; 
    // This clears input field
});
