// Assigning both player 1 and player 2 starting score to 501 and legs won to 0

let startScore = 501;
let startLegs = 0;
let p1Score = document.getElementById("p1Score").innerHTML = startScore;
let p2Score = document.getElementById("p2Score").innerHTML = startScore;
let p1Legs = document.getElementById("p1LegsCount").innerHTML = startLegs;
let p2Legs = document.getElementById("p2LegsCount").innerHTML = startLegs;

// Getting user score from the HTML document

document.getElementById("p1Btn").onclick = function() {
    let p1Turn = document.getElementById("p1Turn").value;
    let p1UpdatedScore = p1Score - p1Turn;
    document.getElementById("p1Turn").value = '';

// Making sure the user has entered a valid score whilst checking to see if the user has bust their score
// If the turn isn't bust or invalid it is subracted from the their current score and their current score which is updated 

    if (p1Turn > 180 || p1Turn < 0) {
        console.log("Enter a valid score");
        alert("Enter a valid score");
    } else if (p1Turn > p1Score) {
        console.log("Player 1 has bust");
        alert("Player 1 has bust");    
    } else if (p1UpdatedScore === 1) {
        console.log("Player 1 has bust");
        alert("Player 1 has bust");
    } else {
        console.log(p1Turn);  
        p1Score = p1UpdatedScore;
    }

    console.log(p1Score);
    document.getElementById("p1Score").innerHTML = p1Score;

// Checking to see if users score is 0, if it is their leg total is updated by 1

    if (p1Score === 0) {
        p1Score = startScore;
        document.getElementById("p1Score").innerHTML = p1Score;
        p2Score = startScore;
        document.getElementById("p2Score").innerHTML = p2Score;
        p1Legs ++;
        document.getElementById("p1LegsCount").innerHTML = p1Legs; 
    }

// Checking to see if players leg count has reached the winning number total according to the radio btn selections, if so player is declared the winner.  

    let p1Win = false;
    if (document.getElementById("rb1").checked && p1Legs === 1 || document.getElementById("rb2").checked && p1Legs === 3 || document.getElementById("rb3").checked && p1Legs === 5) {
        p1Win = true;
    } 
    if (p1Win === true) {
        console.log("test");
        alert("Player 1 is the winner! Refresh the browser to start a new game.")
    }
  
}

// Initalising Player 2 score with the same code

document.getElementById("p2Btn").onclick = function() {
    let p2Turn = document.getElementById("p2Turn").value;
    let p2UpdatedScore = p2Score - p2Turn; 
    document.getElementById("p2Turn").value = '';

    if (p2Turn > 180 || p2Turn < 0) {
        console.log("Enter a valid score");
        alert("Enter a valid score");
    } else if (p2Turn > p2Score) {
        console.log("Player 2 has bust");
        alert("Player 2 has bust");
    } else if (p2UpdatedScore === 1) {
        console.log("Player 2 has bust");
        alert("Player 2 has bust");
    } else {
        console.log(p2Turn); 
        p2Score = p2UpdatedScore;
    }

    console.log(p2Score);
    document.getElementById("p2Score").innerHTML = p2Score;

    if (p2Score === 0){
        p1Score = startScore;
        document.getElementById("p1Score").innerHTML = p1Score;
        p2Score = startScore;
        document.getElementById("p2Score").innerHTML = p2Score;
        p2Legs ++;
        document.getElementById("p2LegsCount").innerHTML = p2Legs;
    }

    let p2Win = false;
    if (document.getElementById("rb1").checked && p2Legs === 1 || document.getElementById("rb2").checked && p2Legs === 3 || document.getElementById("rb3").checked && p2Legs === 5) {
        p2Win = true;
    } 
    if (p2Win === true) {
        console.log("test");
        alert("Player 2 is the winner! Refresh the browser to start a new game.")
    }
}

 