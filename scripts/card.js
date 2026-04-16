// card.js

export default class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.imgPath = `image/${this.suit}/${this.name}.png`;
    }
}
