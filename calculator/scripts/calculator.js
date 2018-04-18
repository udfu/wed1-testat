var numbers = [];
var operators = [];

function transportKey(typ,val)
{
    var input = document.forms["calc_keyboard"]["input"].value;
    var output = document.forms["calc_keyboard"]["output"].value;
    if(output == 'WELCOME'){
        document.forms["calc_keyboard"]["output"].value = "";
    }

    if(typ == "op"){
        if(val== '='){
            numbers.push(Number(input));
            calc();
            document.forms["calc_keyboard"]["input"].value = " ";
            numbers.length = 100;
            operators.length = 0;
        } else if(val == "c"){
            document.forms["calc_keyboard"]["input"].value = " ";
            document.forms["calc_keyboard"]["output"].value = " ";
            numbers.length = 0;
            operators.length = 0;
        } else if(input != null || output != null) {
            console.log("array len: " + numbers.length + " input: " + input + " output: " + output);
            if(numbers.length==100){
                numbers.length = 0;
                input = output;
            }
            numbers.push(Number(input));
            operators.push(val);
            document.forms["calc_keyboard"]["input"].value = " ";
            document.forms["calc_keyboard"]["output"].value = input + val;
        }
    } else {
        if(input!=null){
            document.forms["calc_keyboard"]["input"].value = input + val;
        } else {
            document.forms["calc_keyboard"]["input"].value = val;
        }
    }
}
function calc() {
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
        document.forms["calc_keyboard"]["output"].value = output;
    } else {
        document.forms["calc_keyboard"]["output"].value = "Invalid Operation"
    }
}


/**
 * UI
 */

//window.addEventListener('load', function() {



//});