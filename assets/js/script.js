// Starts timer when "Start Quiz" button is clicked.
document.getElementById("startButton").addEventListener("click", function() {
    var secondsLeft = 75;

    var timer = setInterval(function functionTimer(){
        document.getElementById("timer").innerHTML = "Timer: " + secondsLeft;

    secondsLeft -= 1;
    if(secondsLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's Up";
    }
    }, 1000);
});

// Variables for questions.
var question1 = document.getElementById("card1");
var question2 = document.getElementById("card2");
var question3 = document.getElementById("card3");
var question4 = document.getElementById("card4");
var question5 = document.getElementById("card5");

console.log(question1, question2, question3, question4, question5);

const questions = [
    {question1,
      correctAnswer: "B."
    },
    {
      question2,
      correctAnswer: "C."
    },
    {
      question3,
      correctAnswer: "D."
    },
    {
      question4,
      correctAnswer: "B."
    },
    {
      question5,
      correctAnswer: "A."
    }
  ];

  console.log(questions);