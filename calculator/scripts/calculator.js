/**
 * core
 */
var numbers = [];
var operators = [];


function transportKey(val,typ,id){
    console.log(val +" "+  typ);
    var inputElement = document.getElementById('input');
    var outputElement = document.getElementById('output');

    var output = outputElement.value;
    var input = inputElement.value;

    /*if(output == 'WELCOME'){
        document.formsdocument.getElementById('output').value = "";
    }*/

    if(typ == "command") {
        if (id == 'key-=') {
            console.log(typ + " " + val);
            numbers.push(Number(input));
            calc(outputElement);
            inputElement.value = " ";
            numbers.length = 100;
            operators.length = 0;
        } else if (id == 'key-c') {
            console.log(typ + " " + val);
            inputElement.value = " ";
            outputElement.value = " ";
            numbers.length = 0;
            operators.length = 0;
        }
    }
    if(typ == "operator"){
        if(input != null || output != null) {
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

function calc(outputElement) {
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
    var outputElement = document.getElementById('output');

    if(!outputElement.value){
        outputElement.value = 'WELCOME';
    }

    for (var i = 0, len = buttons.length; i < len; i++) {
        buttons[i].onclick = function (){
            transportKey (this.value,this.className,this.id);
        }
    }
};

window.addEventListener('load', initApp);