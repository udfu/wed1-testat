/**
 * core
 */
var numbers = [];
var operator;

function calc() {
    "use strict";
    var output;
    if(numbers.length > 1 && operator !== ''){
        switch(operator) {
            case "+":
                output = numbers[0] + numbers[1];
                break;
            case "-":
                output = numbers[0] - numbers[1];
                break;
            case "*":
                output = numbers[0] * numbers[1];
                break;
            case "/":
                output = numbers[0] / numbers[1];
                break;
            default:
                output = "Invalid Operation";
        }
        return output;
    } else {
        return "Invalid Operation";
    }
}

function transportKey(val,typ,id){
    "use strict";
    var inputElement = document.getElementById('input');
    var outputElement = document.getElementById('output');
    var output = outputElement.value;
    var input = inputElement.value;

    if(output === 'WELCOME'){
        outputElement.value = '';
    }

    if(typ === "command") {
        if (id === 'key-=') {
            numbers.push(Number(input));
            if(numbers.length>=2){
                outputElement.value = '';
                inputElement.value = calc();
                numbers.length = 0;
            } else {
                outputElement.value = 'Invalid Operation';
                inputElement.value = '';
                numbers.length = 0;
            }
            operator = '';
        } else if (id === 'key-c') {
            inputElement.value = '';
            outputElement.value = '';
            numbers.length = 0;
            operator = '';
        }
        return;
    }
    if(typ === "operator"){
        if(input !== '' && numbers.length === 0) {
            numbers.push(Number(input));
            operator = val;
            inputElement.value = '';
            outputElement.value = input + val;
        } else if(numbers.length > 0){
            operator = val;
            outputElement.value = numbers[0] + val;
        } else if (numbers.length === 0 && input === ''){
            operator = val;
            outputElement.value = val;
        }
    } else {
        if(input!== ''){
            inputElement.value = input + val;
        } else {
            inputElement.value = val;
        }
    }
}

/**
 * UI
 */
const initApp = function () {
    "use strict";
    const buttons = document.getElementsByTagName('button');
    const outputElement = document.getElementById('output');

    if(!outputElement.value) {
        outputElement.value = 'WELCOME';
    }

    function test()  {
        /*jshint validthis: true */
        transportKey(this.value,this.className ,this.id);
    }

    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].addEventListener('click',test);
    }
    /*for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function (){
            transportKey (this.value,this.className,this.id);
        };
    }*/
};

window.addEventListener('load', initApp);