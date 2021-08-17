// import functions and grab DOM elements
const myButton = document.getElementById('buttonEl'); 
const myInput = document.getElementById('guess');
const endDisplay = document.getElementById('display-results');
//const restart = document.getElementById('reset');
// initialize global state
let correctAnswer = 21;
const hint = document.getElementById('hint');
let chance =4;
const chanceText = document.getElementById('chances');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  myButton.addEventListener('click', () => {
    let userGuess = Number(myInput.value);
    console.log(userGuess);
    if (correctAnswer === userGuess){
      endDisplay.textContent = 'You Win!';
    }else if (correctAnswer !== userGuess && chance === 4) {
     
      
    hint.textContent = 'I am a legal age in America.';
    chanceText.textContent = `You have ${chance} remaining.`
    chance--;
    } else if (correctAnswer !== userGuess && chance ===3){  
     hint.textContent = 'I was born in the 1990s';
     chanceText.textContent = `You have ${chance} remaining.`;
     chance--;
    }

    
  })