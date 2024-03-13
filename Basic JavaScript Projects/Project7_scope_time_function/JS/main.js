//*Global variable function
var globalVar = 12;
function  Math_Numbers_1() {
    document.write(globalVar * 2 + "<br>");
}
Math_Numbers_1();

//*Local variable function
function Math_Numbers_2() {
    var localVar = 25;
    document.write(localVar - 4 + "<br>");
}

function Math_Numbers_3() { //*This function will produce an error in console log
    console.log(localVar *3);
}
Math_Numbers_2();
Math_Numbers_3();

//*Function to greet depending on time of day
function get_Date() {
    if (new Date().getHours() < 19 && new Date().getHours() > 7) {
        document.getElementById("Greeting").innerHTML = "How is your day?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "How is your night?";
    }
}

//*Function to determine whether you pass or fail depending on grade
function Grade_Function() {
    Grade = document.getElementById("Grade").value;
    if (Grade >= 60) {
        Result = "You passed!";
    }
    else {
        Result = "You failed.";
    }
    document.getElementById("Grade_Result").innerHTML = Result;
}

//*Else if function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;
}