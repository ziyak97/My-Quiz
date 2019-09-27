const answers = ['A', 'A', 'B', 'A', 'B']; // storing answers in an array
const quizForm = document.querySelector('.quiz-form'); // selecting form
const myScore = document.querySelector('.score'); // selecting div where score is outputted

// when form is submitted it tallys answers selected by user and displays the result
quizForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent form from reloading
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value]; // stores value of answers chosen by users in array
    let score = 0;

    // compare both arrays and add score if they tally
    answers.forEach((answer, index) => {
        if (answer === userAnswers[index]) {
            score += 20;
        }
    });

    // just a message that you get on screen depending on your score
    let message = '';
    if(score>50) {
        message = 'You know me well!'
    } else {
        message = "You don't really know me..."
    }
    myScore.classList.remove('hidden'); // score on screen is originally hidden. I remove that hidden class here
    scrollTo(0, 0); // move to the top of the page where score is displayed
    myScore.querySelector('.message').innerHTML = ` ${message}`; // add custom message depending on your results

    // I use setInterval to animate the score
    // This constantly runs until the score value is reached thus giving a cool looking animation
    // the seconf parameter is how often to run setInterval where 1000 is one second
    let output = 0;
    const timer = setInterval(() => {
        myScore.querySelector('.scoreStyle').innerHTML = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        }
        output++;
    }, 10);
});