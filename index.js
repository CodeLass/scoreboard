let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById('score-home');
let guestEl = document.getElementById('score-guest');

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function add(scoreboard, num) {
    if (scoreboard === "home") {
        homeScore += num;
        homeEl.textContent = homeScore;
    } else if (scoreboard === "guest") {
        guestScore += num;
        guestEl.textContent = guestScore;
    } else return;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
}