// navigation.js

/**
 * Initializes the Home navigate button.
 * Redirects the user to the home page when clicked.
 * 
 * @returns {void}
 */
export function initHomeButton() {
    const homeBtn = document.getElementById("home");
    if (!homeBtn) return;

    homeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

/**
* Initializes the Instruction navigate button.
* Redirects the user to the instruction page when clicked.
*
* @returns {void}
*/
export function initInstructionButton() {
    const instructionBtn = document.getElementById("instruction");
    if (!instructionBtn) return;

    instructionBtn.addEventListener("click", () => {
        window.location.href = "instruction.html";
    });
}

/**
 * Initializes the Join navigate button.
 * Redirects the user to the player page when clicked.
 * 
 * @returns {void}
 */
export function initJoinButton() {
    const joinBtn = document.getElementById("join");
    if (!joinBtn) return;

    joinBtn.addEventListener("click", () => {
        window.location.href = "player.html";
    });
}

/**
 * Initializes the Leaderboard navigate button.
 * Redirects the user to the leaderboard page when clicked.
 * 
 * @returns {void}
 */
export function initLeaderboardButton() {
    const leaderboardBtn = document.getElementById("leaderboard");
    if (!leaderboardBtn) return;

    leaderboardBtn.addEventListener("click", () => {
        window.location.href = "leaderboard.html";
    });
}

/**
 * Initializes keyboard navigation for the application.
 * Defines the following shortcuts:
 * - Escape: Navigate to the home page (index.html)
 * - I: Navigate to the instruction page (instruction.html)
 * - L: Navigate to the leaderboard page (leaderboard.html)
 * - Enter: Navigate to the player page (player.html)
 * 
 * @returns {void}
 */
export function initKeyboardNavigation() {
    window.addEventListener("keydown", event => {
        switch (event.key.toLowerCase()) {
            case "escape":
                window.location.href = "index.html";
                break;

            case "i":
                window.location.href = "instruction.html";
                break;

            case "l":
                window.location.href = "leaderboard.html";
                break;

            case "enter":
                window.location.href = "player.html";
                break;
        }
    });
}

/**
 * Initializes all navigation buttons and keyboard shortcuts for the 
 * application.
 * This function should be called once when the application loads to set 
 * up navigation.
 * 
 * @returns {void}
 */
export function initNavigation() {
    initHomeButton();
    initInstructionButton();
    initJoinButton();
    initLeaderboardButton();
    initKeyboardNavigation();
}