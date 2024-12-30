let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const computer = document.querySelector(".computer");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    computer.innerText = `The Game Has Not Started Yet.`
    msg.innerText = `Play Your Move`;
    msg.style.backgroundColor = "";
};

const genCompChoice = () => {
    const options = ["Stone", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    computer.innerText = `Computer's Choice: ${options[randIdx]}`;
    return options[randIdx]; 
};

const drawGame = () => {
    msg.innerText = "The Game Was a Draw!! Play Again.";
    msg.style.backgroundColor = "#081B31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} Beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} Beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Stone") {
            if(compChoice === "Paper") {
                userWin = false;
            } else {
                userWin = true;
            }
        } else if(userChoice === "Paper") {
            if(compChoice === "Stone") {
                userWin = true;
            } else {
                userWin = false;
            }
        } else {
            if(compChoice === "Stone") {
                userWin = false;
            } else {
                userWin = true;
            }
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", resetGame);
