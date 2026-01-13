document.getElementById("add").onclick = add;

let calc = {
    firstNum: null,
    secondNum: null,
    operator: ``
};

let outputText = document.querySelector("#output");
let inputText = document.querySelector("#input");


function add() {
    if (!outputText.value) {
        outputText.value = inputText.value + " + ";

        calc.firstNum = inputText.value;
        calc.operator = "+";

        inputText.value = "";
    }

}



