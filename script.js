
// creates of object, eg. { input1: 1; operator: " + "; input2: 2 }
class Equation {
    constructor(input1, operator, input2) {
        this.input1 = input1
        this.operator = operator
        this.input2 = input2 
    }

    add() {
        return this.input1 + this.input2
    }

    subtract() {
        return this.input1 - this.input2
    }

    multiply() {
        return this.input1 * this.input2
    }

    divide() {
        return this.input1 / this.input2
    }
}



let firsInput

const num = document.querySelectorAll('.number, div.n5 > a.number + a')

function displayInput(e) {
    const input = document.getElementById('bottom').innerHTML
    // console.log(input)
    // input = e.target.innerHTML
    // console.log(input)

    if (input === "0") {
        document.getElementById('bottom').innerHTML = ""
    }

    document.getElementById('bottom').innerHTML += e.target.innerHTML
    
    firsInput = Number(document.getElementById('bottom').innerHTML)

    // console.log(firsInput)
}


num.forEach(elem => {
    elem.addEventListener("click", displayInput)
    
    
})

// operators

const operation = document.querySelectorAll('operator')

operation.forEach(elem => {
    elem.addEventListener("click", e => {
        console.log(e)
    })
})


/*

    1. input a number
    2. choose operation
    3. input another number
    4. if equals is chosen
        - simply put the answer
        - show at the top of the screen the <first input> <operation> <second input>
    5. if another operation is chosen
        - push the ans at the top screen (and also show at the bottom screen) followed by the chosen operation

*/