var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


switch(randomNumber1){
    case 1:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice1.png");
        break;
    case 2:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice2.png");
        break;
    case 3:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice3.png");
        break;
    case 4:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice4.png");
        break;
    case 5:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice5.png");
        break;
    case 6:
        document.querySelector("#player1").setAttribute("src" , "dice images/dice6.png");
        break;
}

switch(randomNumber2){
    case 1:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice1.png");
        break;
    case 2:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice2.png");
        break;
    case 3:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice3.png");
        break;
    case 4:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice4.png");
        break;
    case 5:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice5.png");
        break;
    case 6:
        document.querySelector("#player2").setAttribute("src" , "dice images/dice6.png");
        break;
}

// if(randomNumber1 > randomNumber2){
//     alert("Player 1 wins");
// }else if(randomNumber1 === randomNumber2){
//     alert("Draw");
// }else{
//     alert("Player 2 wins");

// }