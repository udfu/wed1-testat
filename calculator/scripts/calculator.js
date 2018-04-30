
/**
 * core
 */
var numbers = [];
var operators = [];


function transportKey(val,typ){
    console.log(val +" "+  typ);
    var inputElement = document.getElementById('input');
    var outputElement = document.getElementById('output');

    var output = outputElement.value;
    var input = inputElement.value;

    /*if(output == 'WELCOME'){
        document.formsdocument.getElementById('output').value = "";
    }*/

    if(typ == "op"){
        if(val== '='){
            numbers.push(Number(input));
            calc();
            inputElement.value = " ";
            numbers.length = 100;
            operators.length = 0;
        } else if(val == "c"){
            inputElement.value = " ";
            outputElement.value = " ";
            numbers.length = 0;
            operators.length = 0;
        } else if(input != null || output != null) {
            console.log("array len: " + numbers.length + " input: " + input + " output: " + output);
            if(numbers.length==100){
                numbers.length = 0;
                inputElement.value = outputElement.value;
                input = output;
            }
            numbers.push(Number(input));
            operators.push(val);
            inputElement.value = " ";
            outputElement.value = input + val;
        }
    } else {
        if(input!=null){
            inputElement.value = input + val;
        } else {
            inputElement.value = val;
        }
    }
}

function calc() {
    var outputElement = document.getElementById('output');

    var output;

    if(numbers.length > 1 && operators.length > 0){
        if(numbers.length == 2 & operators.length ==1){
            switch(operators[0]) {
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
        }
        outputElement.value = output;
    } else {
        outputElement.value = "Invalid Operation"
    }
}

/**
 * UI
 */

const initApp = function () {
    var buttons = document.getElementsByTagName('button');
    var input = document.getElementById('input');
    var output = document.getElementById('output');

    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function (){
            transportKey (this.value,this.className);
        }
    }
};

window.addEventListener('load', initApp);



