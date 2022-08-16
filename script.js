class Equation {
    constructor(previousInput, currentInput) {
        this.previousInput = previousInput
        this.currentInput = currentInput
        this.clear()
    }

    // add() {
    //     return this.previousInput + this.currentInput
    // }

    // subtract() {
    //     return this.previousInput - this.currentInput
    // }

    // multiply() {
    //     return this.previousInput * this.currentInput
    // }

    // divide() {
    //     return this.previousInput / this.currentInput
    // }

    clear() {
        this.previousInput = ""
        this.currentInput = ""
        this.operation = undefined
    }

    delete() {
        this.currentInput = this.currentInput.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) return
        this.currentInput = this.currentInput.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentInput === '') return
        if (this.previousInput !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousInput = this.currentInput
        this.currentInput = ''
    }

    compute() {
        let computation
        const prev = Number(this.previousInput)
        const current = Number(this.currentInput)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '×':
                computation = prev * current
                break
            case "÷":
                computation = prev / current
                break
            default:
                return
        }
        this.currentInput = computation
        this.operation = undefined
        this.previousInput = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = Number(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay =''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        currentInputTextElement.innerText = this.getDisplayNumber(this.currentInput)
        if (this.operation != null) {
            previousInputTextElement.innerText = `${this.getDisplayNumber(this.previousInput)} ${this.operation}`
        } else {
            previousInputTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equals')
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('.all-clear')
const previousInputTextElement = document.getElementById('top')
const currentInputTextElement = document.getElementById('bottom')

const equation = new Equation(previousInputTextElement, currentInputTextElement)

// console.log(currentInputTextElement.innerText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.innerText)
        equation.appendNumber(button.innerText)
        equation.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        equation.chooseOperation(button.innerText)
        equation.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    equation.compute()
    equation.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    equation.clear()
    equation.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    equation.delete()
    equation.updateDisplay()
})