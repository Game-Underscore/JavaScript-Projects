//*COuntdown While Loop
function countdown() {
    var Digit = "";
    var i = 10;
    while (i > -1) {
        Digit += "<br>" + i;
        i += -1;
    }
    document.getElementById("Countdown").innerHTML = Digit;
}

//* List of instruments For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML = Content;
}

//* Array function
function array_Function() {
    var Food_Time = [];
    Food_Time[0] = "breakfast";
    Food_Time[1] = "lunch";
    Food_Time[2] = "dinner";
    Food_Time[3] = "dessert";
    document.getElementById("Array").innerHTML = "It is time for " + Food_Time[3] + ".";
}

//*Let function
function let_Function() {
    var X = 73;
    var Let_Content = X;
    {
        let X =  101;
        Let_Content += "<br>" + X;
    }
    Let_Content += "<br>" + X;
    document.getElementById("Let_Keyword").innerHTML = Let_Content;
}

//*Object Function
function object_Function() {
    let game = {
        name: "Fortnite", 
        genre: "battle royale", 
        developer: "Epic Games",
        year: "2017",
        description: function() {
            return "The " + this.genre + " game " + this.name + " released in " + this.year + " was developed by " + this.developer;
        }
    };
    document.getElementById("Game_Object").innerHTML = game.description();
}