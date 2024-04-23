function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(character.innerHTML + " has to fight against " + characterType + "!");
}