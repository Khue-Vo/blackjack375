# Assignment 3: Refactoring Blackjack
## Task 1: Architecture Analysis & Proposal
### 1.1 Current Architecture Description
#### There are 8 JavaScript files:
1. main.js: Acted as the primary entry point for the player page; handled all event listeners for game actions (clicks, drags) and coordinated the flow between the UI and game logic.
2. game.js: Managed the high-level game state, including player hands, dealer hands, scoring logic, and win/loss calculations.
3. deck.js: Handled the creation of the card array and the Fisher-Yates shuffle algorithm.
4. card.js: Defined the structure of a single card and contained the render() logic for generating card HTML elements.
5. home.js: Controlled the landing page, specifically handling the username input and navigation to the game and other pages.
6. instruction.js: Managed navigation and keyboard shortcuts for the Instructions page.
7. leaderboard.js: Handled the display of high scores and navigation back to the home page.
8. utils.js: Contributed helper functions used across multiple pages, such as updating the displayed username from localStorage.
#### Problems with the Structure:
- Overlapping responsibilities: the instruction.js and leaderboard.js share the same navigation to Home page.
- Mixing responsibilities: the main.js file contains DOM updates, event handlers, game state, and betting logic all mixed together.
- Loading duplication: deck.js and main.js both fetch config.json.
#### Visualization of Current Code Organization:
![image](https://lucid.app/publicSegments/view/c7f65bc6-9282-4558-a9ab-2c35bc0d2806/image.png)
### 1.2 Proposed Modular Design
#### Proposed Modules
##### Module 1 - card.js: Defined the structure of a single card and handles its visual representation.
- class Card
##### Module 2 - deck.js: Manages the collection of cards, including initialization and randomization.
- class Deck
##### Module 3 - game-logic.js: Managed the high-level game state, including player hands, dealer hands, scoring logic, and win/loss calculations.
- class Game
##### Module 4 - game-state.js: Tracks the current status of the game. 
- gameState: Sets up initial state of game.
- resetRoundState(game): Reset the game back to initial state.
##### Module 5 - betting.js: Manages the betting system, including current stakes, and bankroll updates.
- placeBet(amount): Function to place an amount of bet.
- settleBet(result): Function to calculate amount of money win/loss based on bet result.
##### Module 6 - ui-controler.js: Manages all direct updates to the HTML, including score displays and message alerts.
- ui: Setting up the game play ground before placing the first bet.
- setGameplayActive(active): Setting up the game play ground after placing a bet.
- updateBettingDisplay(), updateWinLossDisplay(), updateHistoryList(): Updating the game play ground based on the progress of the game.
##### Module 7 - game-action.js: Attaches and manages listeners for player actions.
- startRound(game, betAmount): Function to start a round of game play.
- dealerTurn(game): Funtion to run dealer's turn after player's turn is done.
##### Module 8 - game.js: Acts as the central controller for the game play, it coordinates between the UI and game logic.
##### Module 9 - util.js: Contributed helper functions used across multiple pages, such as updating the displayed username from localStorage.
- updateUsername()
##### Module 10 - navigation.js: Handles all transitions between the home page, instructions, leaderboard, and the game play ground.
- initHomeButton(), initInstructionButton(), initJoinButton(), initLeaderboardButton(), initKeyboardNavigation(), initNavListeners(): Sets up click and keyboard events for all navigate buttons (Home, Join Game, Instruction, Leaderboard).
#### Visualization of Proposed Code Organization:
![image](https://lucid.app/publicSegments/view/7baf3079-49e8-41bd-b0f6-0f8f32fbd782/image.png)
## Task 2: Implementation Details
### Refactor 1: Navigation Module
- Remove leaderboard.js and instructions.js: Removes the duplicated navigation code.
- Add navigation.js: Creates the module specifically for navigating between UIs, other modules don't have to recode anymore, just import the functions from navigation.js
- Update leaderboard.html and instructions.html: link to navigation.js to use the navigate buttons.
- Update home.js: import and use the Home, Instruction, and Leaderboard buttons from the navigation module; keep the orginal code for Join button for loading username to localStorage.
- Update main.js: import and use the Home button from the navigation module.
### Refactor 2: Game State Module
- Add game-state.js: Creates the module specifically for setting up initial state of game, containt the initial state and the reset function.
- Update main.js: change initial game state code from hard-code data to data import from game-state.js; import resetRoundState() function to reset a game.
