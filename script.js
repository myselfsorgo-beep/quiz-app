const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const scoreDisplay = document.getElementById("score");
const questions = [
    {
         text: "In which year did the Ottomans conquer Constantinople?",
         options: ["1355", "1453", "1520"],
         answer: "1453"
    },
    {
         text: "Who was the 37th President of the USA?",
         options: ["Richard Nixon", "John F. Kennedy", "Lyndon Johnson"],
         answer: "Richard Nixon"
    },
    {
        text: "In which year did FC Barcelona win their first UCL (European Cup)",
        options: ["1992", "2006", "1998"],
        answer: "2006"
    }


];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
  questionText.textContent = questions[currentQuestion].text;

  const currentOptions = questions[currentQuestion].options;

  for (let i = 0; i < currentOptions.length; i++) {
     const btn = document.createElement("button");
     btn.textContent = currentOptions[i];
     
    btn.addEventListener("click", function () {
      if  (currentOptions[i] === questions[currentQuestion].answer){
          score = score + 1;
          scoreDisplay.textContent = score;
       }   
      
      currentQuestion = currentQuestion + 1;
      
      if (currentQuestion < questions.length) {
          optionsContainer.innerHTML = "";
          loadQuestion();
       }   
       else {
          questionText.textContent = `Quiz complete! Final score: ${score}`;
          optionsContainer.innerHTML = "";
       }

    });
  optionsContainer.appendChild(btn);
  }
}

loadQuestion();