const calculateBtn = document.querySelector("#calculate");
const inputOne = document.querySelector("#value1");
const inputTwo = document.querySelector("#value2");
const resultLabel = document.querySelector("#result");

calculateBtn.addEventListener("click", () => {
    let valueOne = Number(inputOne.value);
    let valueTwo = Number(inputTwo.value);

    resultLabel.textContent = (valueOne+valueTwo) / 2;
});

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
    inputOne.value = "";
    inputTwo.value = "";
    resultLabel.textContent = "";
});

const changeColorsBtn = document.querySelector("#change-color");
let mode = 0;

changeColorsBtn.addEventListener("click", () => {
    const body = document.querySelector("#body");
    const main = document.querySelector("#main");
    const inputs = document.querySelectorAll("input");
    const btns = document.querySelectorAll(".btn");

    if(mode == 0){
        body.style.backgroundColor = "#232323";
        main.style.backgroundColor = "#eee";
        main.style.color = "#222";
        inputs.forEach(input => {
            input.style.backgroundColor = "#222";
            input.style.color = "#eee";
            input.classList.add("placeholder-color");
        });
        btns.forEach(btn => {
            btn.style.border = "3px solid #222";
            btn.style.backgroundColor = "#eee";
            btn.style.color = "#222";
        });
        resultLabel.style.backgroundColor = "#222";
        resultLabel.style.color = "#eee";

        mode = 1;
    } else {
        body.style.backgroundColor = "#eee";
        main.style.backgroundColor = "#222";
        main.style.color = "#eee";
        inputs.forEach(input => {
            input.style.backgroundColor = "#eee";
            input.style.color = "#222";
            input.classList.remove("placeholder-color");
        });
        btns.forEach(btn => {
            btn.style.border = "3px solid #eee";
            btn.style.backgroundColor = "#222";
            btn.style.color = "#eee";
        });
        resultLabel.style.backgroundColor = "#eee";
        resultLabel.style.color = "#222";

        mode = 0;
    }
});