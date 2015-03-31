// City name add .push();
document.getElementById("messageButton").onclick = testCode;

function testCode() {
    var cities = ["Akron", "Brooklyn", "Canton"];
    alert("we have an array named \"Cities\" and it's contents are " + cities);
    var userCity = prompt("Now, please enter a city name and I will add it to the end of the array.");
    if (!userCity) {
        alert("Don't be that way!");
    } else {
    cities.push(userCity);
    alert("The updated contents of the \"Cities\" array are " + cities + ".");
}
}