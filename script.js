
let equal = document.querySelector("#equal");

let numPad = document.querySelectorAll("#numberPad");
let operatorPad = document.querySelectorAll("#operator");

let displayUp = document.querySelector("#displayUp");
let displayDown = document.querySelector("#displayDown");
let del = document.querySelector("#del");
let equalBtn = document.querySelector("#equal");
const clear = document.querySelector("#clear");

displayDown.textContent = "0";

let calc = {
    firstNum: `0`,
    secondNum: `0`,
    operator: ``,
    result: calculate(this.firstNum, this.secondNum, this.operator),
    btnPress: false,
    equalPress: false,
    get display() {
        return this.firstNum + this.operator + this.secondNum + " = ";
    },
    get display2() {
        return this.firstNum + this.operator;

    }
};
/*
equal.addEventListener('click', function (e) {

    if (!calc.secondNum) {
        console.log("gugugaga")
        calc.secondNum = parseInt(displayDown.value);
    }
    displayUp.value = calc.display;
    displayDown.value = "";
    calc.firstNum = calculate(calc.firstNum, calc.secondNum, calc.operator);
    displayDown.value = calc.firstNum;

});
*/
numPad.forEach(button => {
    button.addEventListener('click', function (e) {
        //gigaButton(button);

        firstNumber(button);

    })
});

operatorPad.forEach(button => {
    button.addEventListener('click', function (e) {
        calc.btnPress = true;
        operatorButton(button);

    })

});

equalBtn.addEventListener('click', function (e) {
    calc.btnPress = true;
    equalButton();
    calc.equalPress = true;

});

function updateDisplay() {


    if ((calc.secondNum != 0) && calc.operator) {
        displayUp.textContent = calc.display;
    } else if (calc.operator) {
        displayUp.textContent = calc.display2;
    }

}

function firstNumber(button) {
    if (calc.equalPress == true) { clearButton() };
    if (displayDown.textContent == '0' || calc.btnPress == true) {
        displayDown.textContent = "";
        calc.btnPress = false;
    }
    displayDown.textContent = (`${displayDown.textContent + button.textContent}`);

}


function operatorButton(button) {

    //if empty up top

    if (!displayUp.textContent) {
        calc.firstNum = displayDown.textContent;
        calc.operator = button.textContent;

        updateDisplay();
        // displayDown.textContent = 0;
    } else if (button.textContent == calc.operator) {
        calc.firstNum = (`${calculate(calc.firstNum, displayDown.textContent, calc.operator)}`);
        updateDisplay();
        //displayDown.textContent = 0;

    } else {
        calc.operator = button.textContent;
        updateDisplay();
    }
    calc.equalPress = false;
}

function equalButton() {
    if (calc.secondNum) {
        calc.secondNum = displayDown.textContent;
        displayDown.textContent = calculate(calc.firstNum, calc.secondNum, calc.operator);
        updateDisplay();
        calc.secondNum = '0';
        calc.firstNum = displayDown.textContent;
        calc.operator = ``;

    }

}



//Delete button 
function deleteButton() {
    if (displayDown.textContent.length == 1) {
        displayDown.textContent = 0;
    } else {
        displayDown.textContent = displayDown.textContent.slice(0, -1);
    }

}

del.addEventListener('click', function (e) { deleteButton() });
//Delete button 
clear.addEventListener('click', function (e) {
    clearButton();
});
function clearButton() {
    displayUp.textContent = "";
    displayDown.textContent = 0;

    calc.firstNum = `0`;
    calc.secondNum = `0`;
    calc.operator = '';
    calc.equalPress = false;
    calc.btnPress = false;
}


function gigaButton(button) {

    let inputNum = parseInt(displayDown.value);
    if (!displayUp.value) {

        calc.firstNum = inputNum;
        displayDown.value = "";

    } else if (displayUp.value && !displayDown.value || calc.secondNum) {
        calc.operator = button.textContent;
        calc.secondNum = "";
        displayDown.value = "";
    } else {
        calc.secondNum = inputNum;
        calc.firstNum = calculate(calc.firstNum, calc.secondNum, calc.operator);

        displayDown.value = "";

    }


    calc.operator = button.textContent;
    displayUp.value = calc.display2;
}


function calculate(firstNum, secondNum, operator) {
    let a = parseInt(firstNum);
    let b = parseInt(secondNum);
    if (!operator) {
        return a;
    }
    switch (operator) {
        case " + ":
            return add(a, b);
        case " - ":
            return subtract(a, b);
        case " x ":
            return multiply(a, b);
        case " / ":
            return divide(a, b);
        case "":
            return 0;
        default:
            console.log("SORRY BOSS");
            console.log(`${firstNum} + ${secondNum} `);
            break;
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        return "Cannot divide by zero";
    } else {
        return a / b;
    }

}


