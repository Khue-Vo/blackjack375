// deck.js
import Card from "./card.js";


/**
 * Represents a deck of playing cards.
 * Provides methods to create a standard 52-card deck,
 * shuffle it, and deal cards.
 *
 * Card data is loaded from a configuration file (config.json),
 * which defines suits, card names, values, and asset paths.
 *
 * @see Card
 */

class Deck {
    /**
     * Creates a new, empty Deck instance.
     */
    constructor() {
        this.cards = [];
        this.cardBackPath = "";
    }

    
    
    /**
     * Creates a standard 52-card deck using configuration data.
     * Fetches suit and card information from config.json,
     * initializes Card objects, and stores the card back image path.
     *
     * @returns {Promise<void>}
     */
    async createDeck() {
        try {
            // Fetch card values from config
            const response = await fetch(new URL("../config.json", import.meta.url));
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Store card back image path for later use in UI rendering
            this.cardBackPath = data.assets.cardBack;
            this.cards = [];

            // Create cards based on suits and card info from config
            for (let suit of data.suits) {
                for (let cardInfo of data.cards) {
                    const newCard = new Card(suit, cardInfo.name, cardInfo.value);
                    this.cards.push(newCard);
                }
            }
            console.log(`Deck initialized with ${this.cards.length} cards.`);
        } catch (error) {
            console.error("Error creating deck:", error);
        }
    }


    /**
     * Randomizes the order of cards in the deck using
     * the Fisher-Yates shuffle algorithm.
     *
     * @returns {void}
     */
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }


    /**
     * Deals one card from the top of the deck.
     *
     * @returns {Card|undefined} The dealt card, or undefined if the deck is empty
     */
    dealCard() {
        if (this.cards.length === 0) {
            console.warn("Deck is empty! Cannot deal more cards.");
            return null;
        }
        return this.cards.pop();
    }
}

export default Deck;