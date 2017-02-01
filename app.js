var currentQuestion = 0;
var score = 0 ;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionsEl = document.getElementById('question');
var opt1 = document.getElementById ('opt1');
var opt2 = document.getElementById ('opt2');
var opt3 = document.getElementById ('opt3');
var opt4 = document.getElementById ('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById ('result');

function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionsEl.textContent = (questionIndex + 1)+ ".  "+ q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;

};

function loadNextQuestion() {
  var selecetedOption = document.querySelector("input [type=radio]:checked");

  document.getElementById('nextButton').on("click", loadNextQuestion());

    if (!selecetedOption){
      alert ('Please select your answer!');
      return;
    }
    var answer = selecetedOption.value;
      if (questions[currentQuestion].answer === answer) {
        score += 10;
      }
      selecetedOption.checked = false;
      currentQuestion++;
        if (currentQuestion === totQuestions - 1 ){
        nextButton.textContent= 'finish';
      }
        if (currentQuestion === totQuestions){
        container.style.display= "none";
        resultCont.style.display = '';
        resultCont.textContent = "Your Score "+ score;
        return;
      }  loadQuestion (currentQuestion);
}

loadQuestion(currentQuestion);
