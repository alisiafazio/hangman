var guesses = 6;
var word= "";
var guessedLetters= [];
var words = ["HELLO", "APPLES", "CHOCOLATE", "BASEBALL", "DOG-PARK", "RESTAURANT", "PENGUIN", "BISON", "DOGS", "GIRAFFE",
    "KOALA", "STRAWBERRY", "TANGERINE", "FONDUE"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "-"];

function startGame(){
    guesses = 6;
    guessedLetters= [];
    var rand = words[Math.floor(Math.random() * words.length)];
    console.log(rand);
    word = rand;
    printWord();
    letterPopulate();
}

function printWord(){
    var ret = " ";
    for (var i = 0; i < word.length; i++){
            if (guessedLetters.indexOf(word[i])>-1){
        ret += word[i];
        }else{
            ret += "_ ";
        }
        // if(ret != "_ "){
        //     return document.getElementById("win").innerHTML = "You have won the game!";
        // }
    }
    console.log(ret);

        document.getElementById("ret").innerHTML = ret;
        document.getElementById("guess").innerHTML = "You have " + guesses + " guesses remaining!";
}

function letters(userGuess){
    guessedLetters.push(userGuess);
    console.log(guesses);
    if(word.indexOf(userGuess) <= -1 ) {
        guesses--;
    }
    if(guesses <= 0){
        return document.getElementById("lose").innerHTML = "You have lost the game!";
    }
    printWord();
    letterPopulate();
    // if(word.indexOf(userGuess) == 5 ){
    //     return document.getElementById("image").innerHTML = '<img src="img/hangman1.png">'
    // }
    // if(word.indexOf(userGuess) == 4 ){
    //     return document.getElementById("image1").innerHTML = '<img src="img/hangman2.png">'
    // }
    // if(word.indexOf(userGuess) == 3 ){
    //     return document.getElementById("image2").innerHTML = '<img src="img/hangman3.png">'
    // }
    // if(word.indexOf(userGuess) == 2 ){
    //     return document.getElementById("image3").innerHTML = '<img src="img/hangman4.png">'
    // }
    // if(word.indexOf(userGuess) == 1 ){
    //     return document.getElementById("image4").innerHTML = '<img src="img/hangman5.png">'
    // }
    // if(word.indexOf(userGuess) == 0 ){
    //     return document.getElementById("image5").innerHTML = '<img src="img/hangman6.png">'
    // }
}

function letterPopulate(){
    var rt = "";
    for (var i = 0; i < alphabet.length; i++) {
        if (guessedLetters.indexOf(alphabet[i]) > -1) {
            //yes, we found it!
            rt += "<button class= 'userGuess' onclick = 'letters(this.value)' value ='" + alphabet[i] + "'disabled >" + alphabet[i] + "</button>"
        }else{
            //nope, nothing here
            rt += "<button class= 'userGuess' onclick = 'letters(this.value)' value ='" + alphabet[i] + "'>" + alphabet[i] + "</button>"
        }
    }
    return document.getElementById("buttons").innerHTML = rt;
}

function levelOfDifficulty(){
    if(word.indexOf(userGuess) <= -1 ){

    }
}
