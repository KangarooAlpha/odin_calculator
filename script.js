const numbers = document.querySelectorAll(".numbers")
let display = document.querySelector("#display")
const operations = document.querySelectorAll(".operation")

let previousNum = "";
let currentNum = "";
let operation = "";

function add(a,b){
    return (+a+b*1);
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(firstNum,secondNum,operation){
    if (operation == "+") {
        return (add(firstNum,secondNum))
    }
    else if (operation == "-") {
        return (subtract(firstNum,secondNum))
    }
    else if (operation == "*") {
        return (multiply(firstNum,secondNum))
    }
    else if (operation == "/") {
        return (divide(firstNum,secondNum))
    }
    else {
        return 1
    }
}

numbers.forEach( (num) => {
    num.addEventListener("click", ()=> {
        currentNum += num.textContent
        display.textContent = currentNum
    })
});

operations.forEach((opr) => {
    opr.addEventListener("click", ()=> {
        if (previousNum != ""){
            if (currentNum == "") {
                currentNum = previousNum
            }
            previousNum = operate(previousNum, currentNum, operation)
            console.log(previousNum)
        }
        operation = "" + `${opr.textContent}`
        previousNum = currentNum;
        display.textContent = previousNum;
        currentNum = "";
    })
});