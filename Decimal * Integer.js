// Decimal * Integer
document.getElementById("messageButton").onclick = testCode;

function testCode() {
    var userDec1 = prompt("Please enter a decimal that you want to keep as a decimal.");
    var userDec2 = prompt("Now, enter a second decimal you would like to round down.");

    alert("Your first number, " + userDec1 + ", multiplied by your second number, " + userDec2 + ", after the decimals have been removed, equals " + parseFloat(userDec1) * parseInt(userDec2) + ".");
}