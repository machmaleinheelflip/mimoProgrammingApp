const questions = ["What planet is known as the 'Red Planet'?",
    "Who painted the Mona Lisa?"];
    let currentQuestionIndex = 0;
    const choicesArray = [["Earth","Mars","Jupiter","Saturn"],
    ["Peter","Dieter","Vincent","Thomas"]];
    const correctAnswers = ["Mars","Vincent"];
    let score = 0;
    
    function displayQuestion () {
      if (currentQuestionIndex < questions.length) {
        document.getElementById("question").innerHTML = questions[currentQuestionIndex];
    
        for (let i = 0; i < 4; i++) {
          const btn = document.getElementById(`choice${i+1}`);
          btn.innerHTML = choicesArray[currentQuestionIndex][i];
          btn.value = choicesArray[currentQuestionIndex][i];
        }
      } else {
    document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}!`;
        document.getElementById("question").innerHTML = "";
        document.getElementById("choices").innerHTML = "";
      }
    }
    
    function checkAnswer (button) {
      if (button.value === correctAnswers[currentQuestionIndex]){
        score++;
      }
        currentQuestionIndex++;
        displayQuestion();
    }
    
    displayQuestion();