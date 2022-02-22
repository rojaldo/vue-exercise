const INIT = 0;
const FIRSTFIGURE = 1;
const SECONDFIGURE = 2;
const RESULT = 3;

export class Calculator {
    display = '';
    currentState = INIT;
    firstFigure = 0;
    secondFigure = 0;
    result = 0;
    operator = '';

    constructor() { }

    handleNumber(value) {
        console.log('Value: ' + value);
        switch (this.currentState) {
            case INIT:
                this.firstFigure = value;
                this.display = '' + value;
                console.log('Display: ' + this.display);
                this.currentState = FIRSTFIGURE;
                break;
            case FIRSTFIGURE:
                this.firstFigure = this.firstFigure * 10 + value;
                this.display += value;
                break;
            case SECONDFIGURE:
                this.secondFigure = this.secondFigure * 10 + value;
                this.display += value;
                break;
            case RESULT:
                this.firstFigure = value;
                this.secondFigure = 0;
                this.result = 0;
                this.operator = "";
                this.display = '' + value;
                this.currentState = FIRSTFIGURE;
                break;

            default:
                break;
        }
    }

    handleSymbol(value) {
        switch (this.currentState) {
            case INIT:
                break;
            case FIRSTFIGURE:
                if (
                    value === "+" ||
                    value === "-" ||
                    value === "*" ||
                    value === "/"
                ) {
                    this.operator = value;
                    this.display += value;
                    this.currentState = SECONDFIGURE;
                }
                break;
            case SECONDFIGURE:
                if (value === "=") {
                    this.result = this.calculate();
                    this.display += value + this.result;
                    this.currentState = RESULT;
                }
                break;
            case RESULT:
                if (value === "+" || value === "-" || value === "*" || value === "/") {
                    this.firstFigure = this.result;
                    this.operator = value;
                    this.secondFigure = 0;
                    this.result = 0;
                    this.display = this.firstFigure + value;
                    this.currentState = SECONDFIGURE;
                }
                break;

            default:
                break;
        }
    }

    calculate() {
        switch (this.operator) {
            case "+":
                return this.firstFigure + this.secondFigure;
            case "-":
                return this.firstFigure - this.secondFigure;
            case "*":
                return this.firstFigure * this.secondFigure;
            case "/":
                return this.firstFigure / this.secondFigure;
            default:
                break;
        }
    }

    clear() {
        this.display = '';
        this.currentState = INIT;
        this.firstFigure = 0;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = "";  
    }

    toString() {
        return this.firstFigure + this.operator + this.secondFigure + "=" + this.result;
    }


}