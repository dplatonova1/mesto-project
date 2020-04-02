import {Popup} from './popup.js';

export class ZoomImage extends Popup {
  constructor(popuptype, container) {
    super(popuptype);
    this.container = container;
  }
  setBgImage(event) {
    if (event.target.closest(".place-card__image")) {
      const bgLink = event.target.attributes.style.value;
      const bgFull = document.querySelector(".popup__content-full");
      bgFull.setAttribute("style", bgLink);
    }
  }
}
