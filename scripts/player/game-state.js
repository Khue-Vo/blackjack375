// game-state.js

/**
 * Represents the overall state of the blackjack game.
 * Tracks player money, current bet, win/loss counts, game history, and 
 * the last result message.
 * 
 * @type{{
 *   playerMoney: number,
 *   currentBet: number,
 *   winCount: number,
 *   lossCount: number,
 *   gameHistory: string[],
 *   lastResult: string,
 *   delayDealerReveal: boolean
 * }}.
 */
export const gameState = {
  playerMoney: 1000,
  currentBet: 0,
  winCount: 0,
  lossCount: 0,
  gameHistory: [],
  lastResult: "Place a bet to deal.",
  delayDealerReveal: false,
};


/**
 * Resets the state of the current round
 * Clears player hands and dealer hand, reset round status, disables split 
 * mode, and clears round results.
 * 
 * This function is called at the start of a new round.
 * 
 * @param {object} game - The active Game instance whose round state is 
 * being reset.
 * @return {void}
 */
export function resetRoundState(game) {
  game.playerHands = [[]];
  game.currentHandIndex = 0;
  game.dealerHand = [];
  game.isRoundOver = true;
  game.splitMode = false;
  game.roundResults = [];
}
