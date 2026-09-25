//Defining variables used in calculator
let num1, num2, result, oper , calcHistory = []

//Function stores an equation chosen by the user (numbers, operator and result)
//and stores it as an object into an array called calcHistory
function addHistory(num1, num2, oper, result){
    let calcEquation = {}
    calcEquation.number1 = num1
    calcEquation.number2 = num2
    calcEquation.operator = oper
    calcEquation.result = result
    calcHistory.push(calcEquation)
}

//Function displays all the history of equations asked by the user.  If 
//user has no history, display message
function dispHistory(calcHistory) {
    let i = 0
    if(calcHistory.length === 0) {
        console.log("You do not have any stored history")
    } else {
        while(i < calcHistory.length){
            console.log(calcHistory[i])
            i++
        }
    }
}

//This function adds two numbers, and stores the result
function add(num1, num2){
    result = num1 + num2
    oper = "+ : Addition"
    addHistory(num1, num2, oper, result)
}

//This function subtracts two numbers, stores the result
function sub(num1, num2){
    result = num1 - num2
    oper = "- : Subtraction"
    addHistory(num1, num2, oper, result)
}

//This function multiplies two numbers, stores the result
function mult(num1, num2){
    result = num1 * num2
    oper = "* : Multiplication"
    addHistory(num1, num2, oper, result)
}

//This function divides two numbers, stores the result.  If number
//two is 0, displays error.
function div(num1, num2){
    if(num2===0){
        oper = "/ : Division"
        result = "undef"
        addHistory(num1, num2, oper, result)
        console.log("Cannot divide by 0")
    } else {
    result = num1 / num2
    oper = "/ : Division"
    addHistory(num1, num2, oper, result)
    }
}

add(1,1)
sub(34,53)
add(2,5234)
div(20, 5)
div(4,0)
mult(5,2)

dispHistory(calcHistory)