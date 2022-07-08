import Card from "./Card";

export default class Column {
    
    cards: Card[] = [];

    constructor(title: string, trackTime: boolean) {

    }


    addCard(newCard: Card) {
        this.cards.push(newCard);
    }


    getTotalTime() {
        return this.cards.forEach(card -> {
            
        })
    }
}