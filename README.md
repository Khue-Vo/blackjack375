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
- Each JavaScript file is not true modules. The logic relied on Global Scope, meaning that each file had to be loaded in a specific order to the HTML files for the game to work. If not, the game would break. It also means that many variables (playerMoney, currentBet, etc.) were accesible by every scripts, making it hard to prevent overrides.
- The responsibilities are mixed as well. Some JavaScript files contain more than 1 type of logic (main.js, game.js for game logic and DOM manipulation), making it difficult to track where a piece of data was being modified, increasing the risk of breaking the code when bugs occur. The same type of logic is stored in different files as well (instruction.js, leaderboard.js for UI).
#### Visualization of Current Code Organization:
![image](https://lucid.app/publicSegments/view/6a751f5b-94c8-4ea2-ae49-1fd434d7088c/image.png)
### 1.2 Proposed Modular Design
#### Proposed Modules
##### Module 1 - card.js: Defines the Card data structure and basic visual properties for an individual playing card. 
- "Card" class : Encapsulates card properties (suit, name, value).
- "this.imgPath": Variable that stores the specific asset path for the card's image.
- "export default Card": Allows other modules to instantiate new card objects.
##### Module 2 - deck.js: Manages the creation, shuffling, and dealing of the 52-card deck. 
- "Deck" class : A container for the cards array and the "cardBackPath".
- "createDeck()": An asynchronous method that fetches "config.json" and populates the deck.
- "shuffleDeck()": Implementation of the Fisher-Yates algorithm to randomize card order.
- "dealCard()": Method to pop and return the top card from the deck array.
##### Module 3 - game.js: Acts as the game engine by managing the state of the game round and enforcing the rules. 
- "Game" class : Manages "playerHands", "dealerHand", and tracks "isRoundOver" and game mode such as "splitMode".
- "calculateScore(hand)": Pure logic to calculate totals and handle Ace adjustments.
- "hit() / stand() / splitHand()/ etc.": Methods that update internal game state based on actions.
- "getRoundResult()": Determines the outcome (win/loss/tie) for betting settlement.
##### Module 4 - util.js: Contributed helper functions used across multiple pages, such as updating the displayed username from localStorage. 
- "updateUsername()": Retrieves the username from "localStorage" and updates the DOM if the element exists.
##### Module 5 - main.js: Acts as the central controller for the player page, it coordinates between the UI and game logic. 
- "game": An instance of the "Game" class
-  "showHands()": Orchestrates the visual rendering of the dealer and player hands
-  Event Listeners: Manages all user interactions (drag-and-drop, buttons, and betting).
#### Visualization of Proposed Code Organization:
![image](https://lucid.app/publicSegments/view/2f0ba05a-5111-4e68-9c3d-4d6e0252d9e9/image.png)
## Task 2: Implementation Details
### Refactor 1:
### Refactor 2:
