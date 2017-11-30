var guesses = 6;
var word= "";
var guessedLetters= [];
var easy = ["HELLO", "APPLES",  "DOGS", "GIRAFFE", "KOALA", "STRAWBERRY", "COFFEE"];
var medium = ["CHOCOLATE", "BASEBALL", "PENGUIN", "BISON", "DIVORCE"];
var hard = ["DOG-PARK", "TANGERINE", "FONDUE", "RESTAURANT", "TELEVISION", "BANKRUPTCY"];
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "-"];

function startGame(difficulty){
    guesses = 6;
    guessedLetters= [];
    document.getElementById("lose").innerHTML = "";
    document.getElementById("win").innerHTML = "";
    document.getElementById("image").innerHTML = "";

    if(difficulty == 3){
        var runEasy = easy[Math.floor(Math.random() * easy.length)];
        word = runEasy;
        console.log(word);
    }
    if(difficulty == 2){
        var runMedium = medium[Math.floor(Math.random() * medium.length)];
        word = runMedium;
        console.log(word);
    }
    if(difficulty == 1){
        var runHard = hard[Math.floor(Math.random() * hard.length)];
        word = runHard;
        console.log(word);
    }
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
        document.getElementById("ret").innerHTML = ret;
        document.getElementById("guess").innerHTML = "You have " + guesses + " guesses remaining after this!";
    }
    console.log(ret);
    return ret;
}

function letters(userGuess){
    if(guesses > 0) {
        guessedLetters.push(userGuess);
        console.log("before=" + guesses);
        if (word.indexOf(userGuess) <= -1) {
            guesses--;
            console.log("after=" + guesses);
            hangmanImage();
        }
        var ret = printWord();
        if (ret.indexOf("_") == -1) {
            return document.getElementById("win").innerHTML = "You have won the game!";
        }
        letterPopulate();
    } else {
       document.getElementById("lose").innerHTML = "You have lost the game! Select a different level of difficulty to play again.";
    }
}

function hangmanImage(){
    document.getElementById("image").innerHTML = "<img src = 'img/guess" + guesses + ".png'>'";
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
