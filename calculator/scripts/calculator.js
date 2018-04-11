var numbers = [];
var operators = [];

function transportKey(typ,val)
{
    var input = document.forms["calc_keyboard"]["input"].value;
    var output = document.forms["calc_keyboard"]["output"].value;

    console.log("Length number array: " + numbers.length + " Length operator array: " + operators.length);
    if(output == 'WELCOME'){
        document.forms["calc_keyboard"]["output"].value = "";
    }

    if(typ == "op"){
        if(val== '='){
            numbers.push(Number(input));
            console.log("Jetzt wird gerechnet.... ");
            calc();
            document.forms["calc_keyboard"]["input"].value = " ";
            numbers.length = 0;
            operators.length = 0;
        } else if(val == "c"){
            console.log("Clean all.... ");
            document.forms["calc_keyboard"]["input"].value = " ";
            document.forms["calc_keyboard"]["output"].value = " ";
            numbers.length = 0;
            operators.length = 0;
        } else if(input != null) {
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
    console.log("Jetzt wird gerechnet in der Funktion calc() ....  Los los ");
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
        console.log("Folgender output berechnet aus : " + numbers[0] + " und " + numbers[1] + " ergibt via " + operators[0] + " folgendes Resultat " + output )
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