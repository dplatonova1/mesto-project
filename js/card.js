class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  like(event) {
    if (event.target.closest(".place-card__like-icon")) {
      event.target.classList.toggle("place-card__like-icon_liked");
      event.stopImmediatePropagation();
    }
  }

  delete(event) {
    if (event.target.closest(".place-card__delete-icon")) {
      event.target.parentNode.parentNode.remove();
      event.stopImmediatePropagation();
    }
  }

  create() {
    const placeCard = document.createElement("div");
    placeCard.classList.add("place-card");
    const template = ` 
    <div class='place-card__image place-card__button' style='background-image: url(${this.link})'> 
    <button class='place-card__delete-icon'></button>
    </div>
    <div class='place-card__description'>
    <h3 class='place-card__name'>${this.name}</h3>
    <button class='place-card__like-icon'></button>
    </div>`;
    placeCard.insertAdjacentHTML("beforeend", template);
    return placeCard;
  }
}
