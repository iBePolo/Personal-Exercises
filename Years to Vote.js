// Years to Vote
document.getElementById("messageButton").onclick = testCode;


function testCode() {

    var userAge = prompt("What is your age?")
    var yearsToVote = userAge - 18;
    if (!userAge) {
        alert("Come on, play along!");
    } else if (userAge == 0) {
        alert("Holy smokes! You are a very advanced new born!!! I think that you should have the right to vote, right now!");
    } else if (yearsToVote == -1) {
        alert("You're almost there! You have to wait one more year before you can legally vote.");
    } else if (yearsToVote < 0 && yearsToVote !== -1) {
        var newYearCalc = yearsToVote - yearsToVote - yearsToVote;
        alert("You, my friend, have to wait " + newYearCalc + " years before you can legally vote");
    } else if (yearsToVote == 0) {
        alert("You are 18 years old. You are now old enough to vote. Why not vote for a paaaarrrrrtyyy!!! Woo-hoo!");
    } else if (yearsToVote > 0) {
        alert("You are over the age of 18, which means that you already have the legal right to vote.");
    }

}