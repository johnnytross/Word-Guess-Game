// alert("hello");

// var shuri = ["_","_","_","_","_"];


// var blackPantherGame = {
    
//     wakandaForever: function() {
//         alert("WAKANDA FOREVER");
//     },
// };
var gameWords = ["shuri","bas","panther","marvel"]
var blankSpots=[];
var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];



//get randome word 


//loop throught and push _ to chosenWord


//check guess against index in chosenWord 
// document.lastModified() function wordBlanks (){
//     for (i=0;i<randomWord.length;i++){
//         blankSpots.push("_");
//         console.log(blankSpots);
//         $("#wordDiv").html("test");
//     }
// }
document.onkeyup = function(event) {
    var wins = 0;
    var guesses = 9;
    var letter = event.key.toLocaleLowerCase();
    console.log(letter);
    letterCheck(letter);
    // for ()

    // if (letter === "s") {
    //         console.log("You typed S!");
        
    //     if (letter === "h"){
    //         console.log("You typed H!");
    //     } 
    // }

    
    
    // else {
    //         console.log("You guessed wrong!")
    //         guesses = guesses - 1;
    //         console.log(guesses);
    // } 
    
    

    // var letter = event.key.toLowerCase();
    // if ( letter === "w") {
    //     blackPantherGame.wakandaForever();
    // }
    // for (var i=0;i<shuri.length;i++){
    //     //document.write(shuri[i]);
    //     $("#empty-div").html(shuri[i]);
    // }
};

function letterCheck (letter, wins, guesses){
    console.log(letter);

    for(i=0;i<randomWord.length;i++){
        if (letter === randomWord.charAt(i)){
            console.log(true);
            blankSpots[i] = letter;
            document.getElementById("wordDiv").innerHTML = blankSpots.join("");
            
        } else {
            console.log(false);
        }
        // if (blankSpots === randomWord[i]){
        //     document.getElementById("winText").innerHTML = "You win!";
        // }
    }
}
letterCheck();