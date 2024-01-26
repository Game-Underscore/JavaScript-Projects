function displayDate() {
    var date = "The date is "; //Defined variable date
    date += Date();            //Concatendated the date to the string
    document.getElementById("Date").innerHTML = date; //Displays the full string whenever the text is clicked
}