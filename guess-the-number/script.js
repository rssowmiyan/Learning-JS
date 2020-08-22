let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`random number -->${randomNumber}`)
let x = document.getElementById("finished");
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

      function checkGuess() {
        // convert string to int
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = 'Spot on!';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = '#c0392b';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      // Enter key keycode is 13
      guessField.addEventListener("keyup", function(event) {
        console.log(event.keyCode)
        if (event.keyCode === 13) {
         event.preventDefault();
         guessSubmit.click();
        }
      });



      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        x.style.visibility = "visible";
        x.autofocus
        x.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');  //selects all the paras in the div(resultparas)
        console.log(typeof resetParas)
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        x.style.visibility = "hidden";
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'transparent';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }