var timer = 100;
function timerFunction() {
    setInterval(function(){
        timer--;
        console.log();
    },1000)
}


var questionAnswers = [
    {
        question:"what is the first programming language?",
        answers:['Cobol',"C","C++","Java","C#"],
        correctAnswer: "Cobol"
    },
    {
        question:"what is the most used computer operating system?",
        answers:["windows","macOS","linux","chrome","unix"],
        correctAnswer: "windows"
    },
    {
        question:"what is the most popular browser?",
        answers:["internet explorer","safari","netscape","firefox","opera"],
        correctAnswer: "internat explorer"
    },
    {
        question:"what city houses most tech companies?",
        answers:["paris","silicon valley","tampa","new york","atlanta"],
        correctAnswer: "silicon valley"
    },
    {
        question:"what is the most popular car make?",
        answers:["toyota","honda","chrysler","general motors","hyundai"],
        correctAnswer: "toyota"
    }
    
]

var questionIndex = 0

function getAnswers() {
    var titleElement = document.getElementById ("questions-title");
    var titleQuestion = questionAnswers[questionIndex];
    titleElement.textContent = titleQuestion.question;
    var createElement = document.createElement("ol");
    createElement.setAttribute("id", "list");
    titleElement.appendChild(createElement);

    for (var i = 0; i < questionAnswers[questionIndex].answers.length; i++) {
        var listEl = document.createElement("li");
        listEl.setAttribute("onclick","nextQuestion(event)")
        listEl.textContent = questionAnswers[questionIndex].answers[i];
        createElement.appendChild(listEl);
    } 

   
    
}
function nextQuestion(e) {
    questionIndex++;
    document.getElementById("list").remove();
    getAnswers();
}

function startQuiz(){
    getAnswers();
    timerFunction();

}

