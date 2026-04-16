// deck.js
import Card from "./card.js";

class Deck {
    constructor() {
        this.cards = [];
        this.cardBackPath = "";
    }

    // Create the 52-card deck
    async createDeck() {
        try {
            // Fetch card values from config
            const response = await fetch('../scripts/config.json');
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

    // Fisher-Yates Shuffle Algorithm
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    // Deal one card
    dealCard() {
        if (this.cards.length === 0) {
            console.warn("Deck is empty! Cannot deal more cards.");
            return null;
        }
        return this.cards.pop();
    }
}

export default Deck;