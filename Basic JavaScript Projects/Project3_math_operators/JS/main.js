function addition_Function() { //Function displays an addition operation
    var addition = 6 + 5;
    document.getElementById("Add").innerHTML = "6 + 5 = " + addition;
}


function subtraction_Function() { //Function displays a subtraction operation
    var subtraction = 11 - 4;
    document.getElementById("Subtract").innerHTML = "11 - 4 = " + subtraction;
}


function multiplication_Function() { //Function displays a multiplication operation
    var multiplication = 7 * 5;
    document.getElementById("Multiply").innerHTML = "7 * 5 = " + multiplication;
}


function division_Function() { //Function displays a division operation
    var division = 81 / 9;
    document.getElementById("Divide").innerHTML = "81 / 9 = " + division;
}


function more_Math() { //Function displays math using multiple basic operators
    var simple_Math = (3 - 9) * 7 / (3 * 4 + 2);
    document.getElementById("Math").innerHTML = "3 minus 9, multiplied by 7, divided by the result of 2 plus the product of 3 and 4 equals " + simple_Math;
}


function modulus_Operator() { //Function uses modulus to display the remainder of a division operation
    var modulus = 83 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 83 by 6, you get a remainder of " + modulus;
}


function negation_Operator() { //Function negates a number
    var x = 4;
    document.getElementById("Unary").innerHTML = "The negation of " + x + " is " + -x;
}


function increment_Operator() { //Function increments a number
    var a = 4;
    a++;
    document.getElementById("Increment").innerHTML = "Incremented from 4 to " + a;
}


function decrement_Operator() { //Function decrements a number
    var b = 4;
    b--;
    document.getElementById("Decrement").innerHTML = "Decremented from 4 to " + b;
}


function random_Number() { //Function randomly generates a number between 1-100
    document.getElementById("Random").innerHTML = Math.random() * 100;
}


function display_Pi() { //Function displays pi
    document.getElementById("Pi").innerHTML = Math.PI;
}