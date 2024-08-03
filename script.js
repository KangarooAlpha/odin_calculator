const numbers = document.querySelectorAll(".numbers")
let display = document.querySelector("#display")

let firstNum = "";
let secondNum = "";
let operation = "";

function add(a,b){
    return a + b;
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
}

numbers.forEach( (num) => {
    num.addEventListener("click", ()=> {
        firstNum += "" + num.textContent
        display.textContent = firstNum
    })
});