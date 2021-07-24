player1Name = localStorage.getItem("Player1Name");
player2Name = localStorage.getItem("Player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    getAnswer = document.getElementById("input_check_box").value;
    console.log(getAnswer);
    if (getAnswer == actual_answer) {
        if (answer_turn == "player1") {
            console.log("Inside if condition");
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        } else {
            console.log("Inside else");
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
    } else {
        question_turn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    } else {
        answer_turn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }
    document.getElementById("output").innerHTML = "";

}