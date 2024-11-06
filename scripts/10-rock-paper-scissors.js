let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  looses: 0,
  ties: 0
};
// the above code is same as below, if the score is null then it sets the values of wins, looses, ties as 0

/*
if (score == null){
  score = {
    wins: 0,
    looses: 0,
    ties: 0
  };
}*/



updateScore();



 
function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result ='';
  
  if(playerMove == 'scissors'){

    if(computerMove === 'Rock'){
      result = 'You Loose!'
    } else if(computerMove === 'Paper'){
      result = 'You Win!'
    }else{
      result = 'Tie!'
    }

  } else if(playerMove == 'paper'){

          if(computerMove === 'Rock'){
            result = 'You Win!'
          } else if(computerMove === 'Paper'){
            result = 'Tie!'
          }else{
             result = 'You Loose!'
          }

  } else if(playerMove == 'rock'){

        if(computerMove === 'Rock'){
           result = 'Tie!'
        } else if(computerMove === 'Paper'){
            result = 'You Loose!'
        }else{
          result = 'You Win!'
    }

  }

  if(result== 'You Win!'){
    score.wins+=1;
  }else if(result=='Tie!'){
    score.ties+=1;
  }else if(result=='You Loose!'){
    score.looses+=1;
  }

  // local storage only supports the strings
  localStorage.setItem('score',JSON.stringify(score));

  updateScore();


  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = ` You <img src="Images/${playerMove}-emoji.png" class="move-icon" alt="">
  Computer <img src="Images/${computerMove}-emoji.png" class="move-icon" alt="">`;

  



}


function updateScore(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Looses: ${score.looses}, Tiess: ${score.ties}`;

}


function pickComputerMove(){
  let computerMove = '';

  const randomNumber = Math.random();

  if(randomNumber>=0 && randomNumber< 1/3){
  computerMove='rock'; 

  }else if(randomNumber>= 1/3 && randomNumber<2/3){
  computerMove= 'paper';
  } else{
  computerMove = 'scissors';
  }

  return computerMove;

}