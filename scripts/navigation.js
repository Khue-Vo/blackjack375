export default function initNavigation() {
    const homeBtn = document.getElementById("home");
    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    const instructionBtn = document.getElementById("instruction");
    if (instructionBtn) {
        instructionBtn.addEventListener("click", () => {
            window.location.href = "instruction.html";
        });
    }

    const joinBtn = document.getElementById("join");
    if (joinBtn) {
        joinBtn.addEventListener("click", () => {
            window.location.href = "player.html";
        });
    }

    const leaderboardBtn = document.getElementById("leaderboard");
    if (leaderboardBtn) {
        leaderboardBtn.addEventListener("click", () => {
            window.location.href = "leaderboard.html";
        });
    }

    window.addEventListener("keydown", event => {
        switch (event.key.toLowerCase()) {
            case 'escape':
                window.location.href = "index.html";
                break;
            case 'i':
                window.location.href = "instruction.html";
                break;
            case 'l':
                window.location.href = "leaderboard.html";
                break;
            case 'enter':
            case 'enter':
                window.location.href = "player.html";
                break;
        }
    });
}