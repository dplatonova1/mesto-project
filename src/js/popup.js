export class Popup {
  constructor(popuptype) {
    this.popup = document.querySelector(`.popup_${popuptype}`);
  }
  open() {
    this.popup.classList.add("popup_is-opened");
  }
  close(event) {
    if (
      event.target.closest(".popup__close") ||
      event.target.type === "submit"
    ) {
      this.popup.classList.remove("popup_is-opened");
    }
  }
}
