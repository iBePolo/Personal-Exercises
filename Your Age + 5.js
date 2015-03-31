// Your Age + 5
document.getElementById("messageButton").onclick = testCode;


function testCode() {


    var userNum = prompt("What is your age?");
    var num = 5;

    if (!userNum) {
        alert("Be that way!");
    } else {
        alert("Your age plus the number 5 equals " + (parseInt(userNum) + num) + ".");
    }

}