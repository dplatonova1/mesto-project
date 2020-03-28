
export class CardList {
  constructor(container, initialArray) {
    this.container = container;
    this.cardArray = initialArray;
  }

  addCard(card) {
    this.container.appendChild(card.create());
  }

  render() {
    const container1 = this.container;
    this.container.innerHTML = "";
    this.cardArray.forEach(function(item) {
      const cardTemplate = item.create();
      container1.appendChild(cardTemplate);
    });
  }
}
