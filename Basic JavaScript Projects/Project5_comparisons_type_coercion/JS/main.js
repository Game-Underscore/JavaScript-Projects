function typeCoercion() { //Initializes function typeCoercion
    A = 11;
    document.write("Variable A is a " + typeof A); //Utilizes Type Of operator

    document.write("<br> Here is an example of type coercion: " + "36" + 5); //Utilizes type coercion

    notANumber = 0/0; 
    document.write("<br> The result of 0/0 is " + notANumber); //Displays NaN

    numberTestA = "This is not a number";
    document.write("<br> Is variable numberTestA not a number: " + isNaN(numberTestA)); //isNaN displays true

    numberTestB = 20;
    document.write("<br> Is variable numberTestB not a number: " + isNaN(numberTestB)); //isNaN displays false

    document.write("<br> This displays infinity: " + 3E400); //Displays infinity

    document.write("<br> This displays negative infinity: " + -3E400); //Displays negative infinity

    booleanTestA = 2 > 19;
    document.write("<br> Is 2 > 19? " + booleanTestA); //Displays false using Boolean

    document.write("<br> Is 2 < 19? " + (2 < 19)); //Displays true using Boolean
    
    console.log(20 / 5); //Console displays 4

    booleanConsole = 5 > 10;
    console.log(booleanConsole); //Console displays false

    booleanTestC = 11 == 11;
    document.write("<br> Does 11 = 11? " + booleanTestC); //Displays true using double equal sign

    booleanTestD = 11 == 22;
    document.write("<br> Does 11 = 22? " + booleanTestD); //Displays false using double equal sign

    booleanTestE = "20" === "20";
    document.write("<br> Is the string <q>20</q> the same as string <q>20</q>? " + booleanTestE); //Displays true using triple equal sign

    booleanTestF = "20" === 30;
    document.write("<br> Is the string <q>20</q> the same as number <q>30</q>? " + booleanTestF); //Displays false using triple equal sign

    booleanTestG = "20" === 20;
    document.write("<br> Is the string <q>20</q> the same as number <q>20</q>? " + booleanTestG); //Displays false using triple equal sign
    
    booleanTestF = "20" === "30";
    document.write("<br> Is the string <q>20</q> the same as string <q>30</q>? " + booleanTestF); //Displays false using triple equal sign

    andOperatorA = 2 < 19 && 5 < 10;
    document.write("<br> Is 2 less than 19 AND 5 is less than 10? " + andOperatorA); //Displays true using AND operator

    andOperatorB = 2 > 19 && 5 < 10;
    document.write("<br> Is 2 greater than 19 AND 5 is less than 10? " + andOperatorB); //Displays false using AND operator

    orOperatorA = 2 < 19 || 5 > 10;
    document.write("<br> Is 2 less than 19 OR 5 is greater than 10? " + orOperatorA); //Displays true using OR operator

    orOperatorB = 2 > 19 || 5 > 10;
    document.write("<br> Is 2 greater than 19 OR 5 is greater than 10? " + orOperatorB); //Displays false using OR operator

    notOperatorA = !(2 > 19);
    document.write("<br> Is 2 NOT greater than 19? " + notOperatorA); //Displayers true using NOT operator

    notOperatorA = !(2 < 19);
    document.write("<br> Is 2 NOT less than 19? " + notOperatorA); //Displayers false using NOT operator
}