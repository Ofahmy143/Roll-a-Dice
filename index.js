var player1 = prompt("First Player's name: ");
var player2 = prompt("second Player's name: ");

document.querySelector("#firstPlayer").textContent = player1;
document.querySelector("#secondPlayer").textContent = player2;





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

if(randomNumber1 > randomNumber2){
    // alert("Player 1 wins");
    document.querySelector("#firstPlayer").classList.add("winner");
    document.querySelector("#winnerDisplay").textContent = player1+ " is the winner";
}else if(randomNumber1 === randomNumber2){
    // alert("Draw");
    document.querySelector("#secondPlayer").classList.add("winner");
    document.querySelector("#firstPlayer").classList.add("winner");
    document.querySelector("#winnerDisplay").textContent = "It's a Draw";


}else{
    // alert("Player 2 wins");
    document.querySelector("#secondPlayer").classList.add("winner");
    document.querySelector("#winnerDisplay").textContent = player2+" is the winner";


}