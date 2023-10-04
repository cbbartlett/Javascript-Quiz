const questions = [["Inside which HTML element do we put the JavaScript?", "<script>"], ["How do we log information in the JavaScript console", "console.log"]];
var questionNo = 1;
var score = 0;

function clickButton(){
  questions.shift();
  questionNo++;
  setup();

}

function setup(){
  if(questions.length != 0){
  document.getElementById("question").innerHTML = questions[0][0];
  document.getElementById("questionNo").innerHTML = "Question " + questionNo;
  }
  else{
    document.getElementById("questionNo").innerHTML = "You have completed the quiz!";
    document.getElementById("question").innerHTML = "High Score: " + score;
    document.getElementById("text-field").remove();
    document.getElementById("button").remove();
  }
}
  function check(){
    if(document.getElementById("text-field").value == questions[0][1]){
      console.log("correct");
      score++;
      document.getElementById("text-field").value = "";
    }
  }
