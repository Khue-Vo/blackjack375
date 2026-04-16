// card.js


/**
 * Represents a playing card in a standard deck.
 * A card has a suit, name, numeric value, and an associated image.
 * 
*/
class Card {
    
    /**
     * Creates a new Card instance.
     *
     * @param {string} suit - The suit of the card (hearts, diamonds, clubs, spades)
     * @param {string} name - The card name (2–10, J, Q, K, A)
     * @param {number} value - The numerical value of the card used in game logic
     */
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.imgPath = `image/${this.suit}/${this.name}.png`;
    }

    
    /**
     * Renders the card as an HTML image element.
     *
     * @returns {HTMLImageElement} The image element representing the card
     */
    render() {
        const cardImg = document.createElement("img");
        cardImg.src = this.imgPath;
        cardImg.alt = `${this.name} of ${this.suit}`;
        cardImg.classList.add("card");
        return cardImg;
    }
}
