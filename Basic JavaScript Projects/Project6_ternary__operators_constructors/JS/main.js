function Ride_Function() { //Function to determine if you are tall enough to ride
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //Function to determine if you can vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) { //Function utilizes This keyword to initialize vehicle variables
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Vehicle_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Movie(Genre, Director, Release_Year) { //Function utilizes This keyword to initialize movie variables
    this.Movie_Genre = Genre;
    this.Movie_Director = Director;
    this.Movie_Year = Release_Year;
}
var Jaws = new Movie("Thriller", "Steven Spielberg", 1975);
var Mario_Movie = new Movie("Comedy", "Aaron Horvath", 2023);
var Polar_Express = new Movie("Adventure", "Robert Zemeckis", 2004);
function Movie_Function() {
    document.getElementById("New_and_This").innerHTML = "The movie Jaws, released in " + Jaws.Movie_Year + ", was directed by " + Jaws.Movie_Director;
}

function multiply_Ten() { //Created nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 7;
        function Times_ten() {Starting_point = Starting_point * 10;}
        Times_ten();
        return Starting_point;
    }
}