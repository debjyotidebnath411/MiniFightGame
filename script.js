// Initial health values
let health1 = 100;
let health2 = 100;

// Fight button functionality
document.getElementById("fightButton").addEventListener("click", function () {
    // Generate random damage values
    const damage1 = Math.floor(Math.random() * 20) + 1; // Random damage between 1 and 20
    const damage2 = Math.floor(Math.random() * 20) + 1;

    // Reduce health
    health1 = Math.max(0, health1 - damage2); // Fighter 1 takes damage
    health2 = Math.max(0, health2 - damage1); // Fighter 2 takes damage

    // Update health display
    document.getElementById("health1").textContent = `Health: ${health1}`;
    document.getElementById("health2").textContent = `Health: ${health2}`;

    // Display result
    if (health1 === 0 && health2 === 0) {
        document.getElementById("result").textContent = "It's a draw!";
    } else if (health1 === 0) {
        document.getElementById("result").textContent = "Fighter 2 wins!";
    } else if (health2 === 0) {
        document.getElementById("result").textContent = "Fighter 1 wins!";
    } else {
        document.getElementById("result").textContent = "The fight continues!";
    }
});
