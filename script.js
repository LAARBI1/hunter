// Triggers when the user clicks the image
function revealHiddenData() {
    // Encrypted Part 1: "aHR0cHM6Ly93d3cuaW5zdGFncmFt"
    alert("📡 Signal Detected:  aHR0cHM6Ly93d3cuaW5zdGFncmFt]");
    console.log("System Alert: Data fragment recovered. Search for Part 2.");
}

// Validates the secret keyword
function validateSolution() {
    const input = document.getElementById('flagInput').value.trim().toUpperCase();
    const feedback = document.getElementById('feedback');

    // The keyword for this challenge
    const secretKey = "RED TEAM ANONYMOS";

    if (input === secretKey) {
        feedback.style.color = "#4ade80";
        feedback.innerText = "🎊 [ACCESS GRANTED] Congratulations! You have mastered the challenge.";
        document.querySelector('.card').style.borderColor = "#4ade80";
        document.querySelector('.card').style.boxShadow = "0 0 30px #4ade80";
    } else {
        feedback.style.color = "#f87171";
        feedback.innerText = "❌ Access Denied. Incorrect keyword.";
    }
}
