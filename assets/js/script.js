var timer = 100;
function timerFunction() {
    setInterval(function(){
        timer--;
        console.log();
    },1000)
}
var buttonEl = document.getElementByClassName("start");
var nextQuestionBtn = getElementByClassName("next-question");

var questionAnswers = [
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    },
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    },
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    },
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    },
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    }
    
]

var questionIndex = 0

function getAnswers() {
    var titleElement = document.getElementById ("questions-title")
    var titleQuestion = questionAnswers[questionIndex]
    titleElement.textContent = titleQuestion.question

    for (var i = 0; i , questionAnswers[questionIndex].answers.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = questionAnswers[questionIndex].answers[i];
        listEl.clssName = "answers-for-questions";
        document.getElemment("question-answer-container").appendChild(listEl);
    }
    questionIndex++;
    
}

function startQuiz(){

    buttonEl.removeAttribute("start");
    buttonEl.setAttribute("class","next-question");
    console.log()

}
    buttonEl.addEventListner
  

})

timerFunction();