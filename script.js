const numbers = document.querySelectorAll(".numbers")
let display = document.querySelector("#display")
const operations = document.querySelectorAll(".operation")
const clear = document.querySelector("#clear")
const signChange = document.querySelector("#sign-change")
const equal = document.querySelector("#equal")
const decimal = document.querySelector("#decimal")

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
            currentNum = operate(previousNum, currentNum, operation)
        }
        operation = "" + `${opr.textContent}`
        previousNum = currentNum;
        display.textContent = previousNum;
        currentNum = "";
    })
});

clear.addEventListener("click", ()=> {
    operation = ""
    previousNum = ""
    currentNum = ""
    display.textContent = '000000'
})

signChange.addEventListener("click", ()=> {
    currentNum = currentNum * (-1) 
    display.textContent = currentNum
})

equal.addEventListener("click", ()=> {
    if (currentNum == "" && previousNum != "") {
        display.textContent = previousNum
    }
    else if (currentNum != "" && previousNum == "") {
        display.textContent = currentNum
    }
    else if (currentNum == "" && previousNum == "") {
        display.textContent = "0000000"
    }
    else {
        currentNum = operate(previousNum, currentNum, operation)
        display.textContent = currentNum
    }
    currentNum = ""
    previousNum = ""
    operation = ""
})

decimal.addEventListener("click", ()=> {
    if (!currentNum.includes(".")) {
        currentNum += decimal.textContent
    }
    console.log(currentNum)
})