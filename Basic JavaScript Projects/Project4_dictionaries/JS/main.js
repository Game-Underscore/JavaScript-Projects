function my_Dictionary() { //Initializes dictionary for the movie Jaws
    var Movie = {
        Name: "Jaws",
        Year: 1975,
        Genre: "Thriller",
        Director: "Steven Spielberg",
        IMDb_Rating: 8.1
    };
    delete Movie.IMDb_Rating; //Deletes IMDb rating key
    document.getElementById("Dictionary").innerHTML = Movie.IMDb_Rating; //Displays the deleted key
}