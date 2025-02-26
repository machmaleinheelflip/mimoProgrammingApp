// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = Number(inputElement.value);
  attempts--;

  if (guess === randomNumber) {
    feedbackElement.innerHTML = "Congratulations!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = `Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = `Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }
  
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
    feedbackElement.style.color = "red";
  }
}