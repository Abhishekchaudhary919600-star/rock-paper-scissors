const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scr = document.querySelector("#scr");
let computerText = document.querySelector("#computerScore");
let userText = document.querySelector("#userScore");
let messag = document.querySelector("#message");
let ccc2 = document.querySelector("#ccc2");



let computerScore = 0;
let userScore = 0;

alert("ARE YOU READY , TO PLAY GAME");


let message = "";



function getComputerChoice() {
    let a = Math.random()*10;
    let b = Math.floor(a);
    let cc;
    if(b>=0 && b<=3){ cc ="ROCK"}
    else if (b>=4 && b<=7){ cc ="PAPER"}
    else {cc = "SCISSORS"}
    ccc2.textContent =`COMPUTER CHOICE : ${cc}`;
return cc;
    
}









rock.addEventListener('click',function(){
    let cc = getComputerChoice();

if (cc === "ROCK") {
    message = "It's a DRAW";
    messag.style.backgroundColor = "#4a5568";
}
if(cc === "PAPER"){
    message = "You Lose ,..   Paper beats you";
    computerScore ++;
    computerText.textContent = `COMPUTER SCORE : ${computerScore}`;
messag.style.backgroundColor = "#f60d0d";
}
if(cc === "SCISSORS"){
    message = "You WON !!!!..... you beat Scissors"
    userScore ++;
    userText.textContent = `YOUR SCORE : ${userScore}`;
    messag.style.backgroundColor ="#4ef84e";
}
messag.textContent = `${message}`;
});




paper.addEventListener('click',function () {
let cc = getComputerChoice();
if(cc === "PAPER"){
     message = "It's a DRAW";
    messag.style.backgroundColor = "#4a5568";
}
    
if(cc === "SCISSORS"){
      message = "You Lose ,..   Scissors beats you";
    computerScore ++;
    computerText.textContent = `COMPUTER SCORE : ${computerScore}`;
messag.style.backgroundColor = "#f60d0d";
}

if(cc === "ROCK"){
      message = "You WON !!!!..... you beat Rock"
    userScore ++;
    userText.textContent = `YOUR SCORE : ${userScore}`;
    messag.style.backgroundColor ="#4ef84e";
}
messag.textContent = `${message}`;


})


scr.addEventListener('click',function () {
    let cc = getComputerChoice();
if(cc === "SCISSORS"){
     message = "It's a DRAW";
    messag.style.backgroundColor = "#4a5568";
}
   if(cc === "ROCK"){
      message = "You Lose ,..   Rock beats you";
    computerScore ++;
    computerText.textContent = `COMPUTER SCORE : ${computerScore}`;
messag.style.backgroundColor = "#f60d0d";
   } 

   if(cc === "PAPER"){
      message = "You WON !!!!..... you beat Paper";
    userScore ++;
    userText.textContent = `YOUR SCORE : ${userScore}`;
    messag.style.backgroundColor ="#4ef84e";
   }
   messag.textContent = `${message}`;



})
