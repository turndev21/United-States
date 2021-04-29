function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == "Red, White, and Blue") {
        correct++;
    }
    if (question2 == "Canada and Mexico") {
        correct++;
    }
    if (question3 == "Joe Biden") {
        correct++;
    }
    if (question4 == "yes") {
        correct++;
    }
    if (question5 == "Dollar") {
        correct++;
    }

    var messages = ["Great job!", "You did ok", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 5) {
        score = 1;
    }

    if (correct == 5) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}