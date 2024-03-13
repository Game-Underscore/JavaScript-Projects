//*Concatenate method
function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "an example of";
    var part_3 = " a full ";
    var part_4 = "sentence."
    var sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = sentence;
}

//*Slice method
function sliced_Sentence() {
    var Slice_Function_Sentence = "The quick brown fox jumped over the lazy dog.";
    var Section = Slice_Function_Sentence.slice(10, 20);
    document.getElementById("Slice").innerHTML = Section;
}

//*Numbers to string method
function string_Method() {
    var x = 294;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

//*To precision method
function precision_Method() {
    var y = Math.PI;
    document.getElementById("Precision").innerHTML = y.toPrecision(9);
}