// Name Length Checker
document.getElementById("messageButton").onclick = testCode;

function testCode() {


    var userFirstName = prompt("What is your first name?");
    if (!userFirstName) {
        alert("So you don't want to cooperate, huh!?!...I'll show ya!");
    }
    if (userFirstName.length >= 9) {
        alert("hold on a minute, " + userFirstName + "! We're gonna run out of letters pretty soon!!!");
    }

    if (userFirstName.length > 6 && userFirstName.length < 9) {
        alert("That's a long name, " + userFirstName + "!");
    }

    if (userFirstName.length === 6) {
        alert("The length of your name is on the border of short & long, " + userFirstName + ".");
    }

    if (userFirstName.length < 6 && userFirstName.length > 3) {
        alert("That's a medium length name, " + userFirstName + ".");
    }

    if (userFirstName.length === 3) {
        alert("You have a compact name, " + userFirstName + ":).");

    }

    if (userFirstName.length === 2) {
        alert("Wow! I don't think your name can get any shorter, " + userFirstName + "!!!");
    }

    if (userFirstName.length === 1) {
        alert("Who are you!?!...Prince!!!");
    }



}