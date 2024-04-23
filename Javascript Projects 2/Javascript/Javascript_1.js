//Function that asks the user their favorite genre using switch method
function Genre_Function() {
    var Genre_Output;
    var Genres = document.getElementById("Genre_Input").value;
    var Genre_String = " is a great genre!";
    switch(Genres) {
        case "Pop":
            Genre_Output = "Pop" + Genre_String;
        break;
        case "Electronic":
            Genre_Output = "Electronic" + Genre_String;
        break;
        case "Rap":
            Genre_Output = "Rap" + Genre_String;
        break;
        case "Classical":
            Genre_Output = "Classical" + Genre_String;
        break;
        case "Rock":
            Genre_Output = "Rock" + Genre_String;
        break;
        case "Jazz":
            Genre_Output = "Jazz" + Genre_String;
        break;
        case "Country":
            Genre_Output = "Country" + Genre_String;
        break;
        default:
        Genre_Output = "Please enter a genre exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Genre_Output;
}

//*Function that changes text using getElementsByClassName
function Text_Change_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "This text has changed!"
}

//*Function that uses canvas to draw a gradient colored circle
function Canvas_Function() {
    var myCanvas = document.getElementById("Canvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fill();
}