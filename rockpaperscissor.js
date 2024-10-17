let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const ShowWinner=(userwin,userChoice,compChoice)=>{
  if(userwin){
    // console.log("you win!");
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`You win!  your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }
  else{

    // console.log("computer wins");
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`You lost. ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
};
const DrawGame=()=>{
  // console.log("game was draw.");
  msg.innerText="Game was draw. Play again"
  msg.style.backgroundColor="#081b31";
};
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userChoice)=>{
  //  console.log("user Choice =",userChoice);
   const compChoice=genCompChoice();
  //  console.log("computer choice= ",compChoice);

   if(userChoice===compChoice){
    DrawGame();
   }else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userwin=compChoice==="scissor"?false:true;
    }else{
         userwin=compChoice==="rock"?false:true;
    }
    ShowWinner(userwin,userChoice,compChoice);
   }
};
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
  })
})