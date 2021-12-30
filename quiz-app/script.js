const quizData = [
    {
        question: 'Which is the capital city of Kenya',
        a: 'Malindi',
        b: 'Kisumu',
        c: 'Nairobi',
        d: 'Mombasa',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'HyperTransfer Machine Language',
        c: 'HyperTagged Markup Links',
        d: 'HyperText Machine Language',
        correct: 'a'
    },
    {
        question: "Which one of the following is a NoSQL database",
        a: 'MongoDB',
        b: 'MariaDB',
        c: 'PostgreSQL',
        d: 'SQLite',
        correct: 'a'
    },
    {
        question: 'Who is the current President of Kenya',
        a: 'Miguna Miguna',
        b: 'Raila Odinga',
        c: 'Kalonzo Musyoka',
        d: 'Uhuru Kenyatta',
        correct: 'd'
    },
    {
        question: 'Which of the following is a protein rich meal',
        a: 'cabbage',
        b: 'Banana',
        c: 'Bread',
        d: 'Chicken wings',
        correct: 'd'
    }
];

// getting the question element - the question header
const questionEl = document.getElementById("question");
// getting the answer element
const answersEls = document.querySelectorAll(".answer");
// getting the elements that will hold the answers
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

// the submit button
const submitBtn = document.getElementById('submit');

// this is the first index of the quizData array
let currentQuiz = 0;
let score = 0;

// function to deselect radio button
const deselectAnswer = () => {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


const loadQuiz = () => {

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz ++;

    
}
loadQuiz();

const getSelected = () => {

    const answersEls = document.querySelectorAll(".answer");
    
    let answer = "";

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
           answer = answerEl.id;
        }
    });

    return answer;
}


submitBtn.onclick = () =>{

    // check to see answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        
        // let newAnswer = quizData[currentQuiz];
        if (answer === quizData[currentQuiz].correct) {
            score++;
            console.log(score);
            console.log(quizData[currentQuiz].correct);
        }
        // currentQuiz ++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            // TODO: show results
            alert("You have finished! Get Your results");
            
        }
    }
}