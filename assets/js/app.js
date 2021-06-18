// JS Questions and choices
let questionCounter = 0;
const questions = [
    {
        question: "Which one of these keywords is NOT a JavaScript data type?",
        choice1: "undefined",
        choice2: "boolean",
        choice3: "dictionary",
        choice4: "string",
        answer: "dictionary"
    },
    {
        question: "Which one of these keywords does NOT declare a new variable in JavaScript?",
        choice1: "var",
        choice2: "let",
        choice3: "const",
        choice4: "def",
        answer: "def"
    },
    {
        question: "Which one of these data types is a reference value",
        choice1: "object",
        choice2: "symbol",
        choice3: "string",
        choice4: "boolean",
        answer: "object"
    },
    {
        question: "Who created JavaScript?",
        choice1: "Microsoft",
        choice2: "Netscape",
        choice3: "Sun Microsystems",
        choice4: "Oracle",
        answer: "Netscape"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choice1: "default",
        choice2: "finally",
        choice3: "throw",
        choice4: "undefined",
        answer: "undefined"
    },
    {
        question: "Which method removes the last element from an array and returns that element",
        choice1: "forEach()",
        choice2: "pop()",
        choice3: "push()",
        choice4: "Concat()",
        answer: "pop()"
    },



]

console.log(questions)

const startBtnEL = document.getElementById("start-btn");
const quizStartEL = document.getElementById("quiz-start");
const quizPageEL = document.getElementById("quiz-page");
const containerMainEL = document.getElementById("container-main");

// begin quiz

const startQuiz = () => {
    // remove start page
    toggleStart();
    // toggleQuestion();
    createQuestion(questions[questionCounter]);


    // load questions page
}


const toggleStart = () => {
    if (quizStartEL.style.display === "none") {
        quizStartEL.style.display = null;
    } else {
        quizStartEL.style.display = "none";
    }
}

const toggleQuestion = () => {
    quizPageEL.style.display = null;

    // console.log(quizPageEL.style)
    // if (quizPageEL.style.display === null) {
    //     console.log("test")
    //     quizPageEL.style.display = null;
    // } else {
    //     quizPageEL.style.display = "visible";

    // }
}

const createQuestion = (q) => {
    if (questionCounter === questions.length - 1) {
        endgame();

    }
    containerMainEL.innerHTML = "";
    let questionContainer = document.createElement("div");
    questionContainer.innerHTML = `<h2>${q.question}<h2/>    
 
    <div class="container-btn">
      <div class="btn-child">
        <button>${q.choice1}</button>
      </div>
      <div class="btn-child">
        <button>${q.choice2}</button>
      </div>
      <div class="btn-child">
        <button>${q.choice3}</button>
      </div>
      <div class="btn-child">
        <button>${q.choice4}</button>
      </div>
    </div>

`;
    containerMainEL.append(questionContainer);

    // const checkAnswer = (req) => {
    //     console.log("test")
    // }


    const choice = document.getElementsByTagName("button");
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", function () {
            let answer = choice[i].textContent;

            if (answer === q.answer) {
                let correctAnswer = document.createElement("div");
                correctAnswer.innerHTML = `<hr />
                                            <p class="answer">Correct</p>`

                questionContainer.append(correctAnswer);
                questionCounter++;
                for (let j = 0; j < choice.length; j++) {
                    choice[j].disabled = true;
                }
                nextButton();

            } else {
                let wrongAnswer = document.createElement("div");
                wrongAnswer.innerHTML = `<hr />
                                            <p class="answer">Wrong</p>`
                questionContainer.append(wrongAnswer);
                questionCounter++;
                for (let j = 0; j < choice.length; j++) {
                    choice[j].disabled = true;
                }

                nextButton();


            }
        })
    }
}

const endgame = () => {
    containerMainEL.innerHTML = "";
    let endGame = document.createElement("div");
    endGame.innerHTML = `<h2>Game Over!</h2>
                        <p>Your score is 99 </p>
                        <button id="restart">Play Again</button>`
    containerMainEL.append(endGame)
    const restartBtnEL = document.getElementById("restart");
    restartBtnEL.addEventListener("click", function () {
        questionCounter = 0;
        startQuiz();

    })
    console.log("game over")
}

const newQuestion = () => {
    createQuestion(questions[questionCounter]);
}

const nextButton = () => {
    if (questionCounter === questions.length) {
        endgame();
    } else {
        let nextbtn = document.createElement("button");
        nextbtn.textContent = "Next";
        nextbtn.setAttribute("id", "next")
        containerMainEL.append(nextbtn);
        const nextBtnEL = document.getElementById("next");
        nextBtnEL.addEventListener("click", function () {
            createQuestion(questions[questionCounter])
        })

    }

}

startBtnEL.addEventListener("click", startQuiz);