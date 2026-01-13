document.getElementById("add").onclick = add;

let calc = {
    firstNum: ``,
    secondNum: ``,
    operator: ``,
    get display() {
        return this.firstNum + this.operator + this.secondNum;
    }
};

let outputText = document.querySelector("#output");
let inputText = document.querySelector("#input");


function add() {
    if (!outputText.value) {

        calc.firstNum = parseInt(inputText.value);
        calc.operator = "+";

        inputText.value = "";
    } else {

        calc.firstNum += parseInt(inputText.value);
        calc.operator = "+";
        inputText.value = "";

    }
    outputText.value = calc.display;
}



