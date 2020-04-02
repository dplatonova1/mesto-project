import {errors} from './errors.js'

export class FormValidator {
  constructor(form) {
    this.form = form;
    this.submit = Array.from(this.form.elements).find(
      item => item.type === "submit"
    );
    this.setEventListeners(this.form);
  }

  checkInputValidity(element) {
    const error = document.querySelector(`#${element.name}Error`);
    if (!element.checkValidity()) {
      if (element.validity.valueMissing) {
        error.textContent = errors.validationRequired;
        return;
      }
      if (element.validity.tooShort) {
        error.textContent = errors.validationLength;
        return;
      }
      if (element.validity.typeMismatch) {
        error.textContent = errors.validationLink;
        return;
      }
    } else {
      error.textContent = "";
    }
    return true;
  }

  setSubmitButtonState(button, state) {
    if (state) {
      button.classList.remove("popup__button_disabled");
      button.classList.add("popup__button");
      button.removeAttribute("disabled");
    } else {
      button.classList.add("popup__button_disabled");
      button.classList.remove("popup__button");
      button.setAttribute("disabled", "disabled");
    }
  }

  checkInputState(array) {
    let result = true;
    array.forEach(element => {
      if (element.type !== "submit") {
        result = result && this.checkInputValidity(element);
      }
    });
    this.setSubmitButtonState(this.submit, result);
  }

  setEventListeners() {
    const inputs = Array.from(this.form.elements);
    const self = this;
    inputs.forEach(function (element) {
      if (element.type !== "submit") {
        element.addEventListener("input", self.checkEverything.bind(self));
      }
    });
  }

  checkEverything() {
    const inputs = Array.from(this.form.elements);
    this.checkInputState(inputs);
  }

  //Валидация формы при открытии попапа

  checkEverythingWithoutMessages() {
    const inputs = Array.from(this.form.elements);
    this.checkInputStateWithoutMessages(inputs);
  }

  checkInputStateWithoutMessages(array) {
    let result = true;
    array.forEach(element => {
      if (element.type !== "submit") {
        result = result && this.checkInputValidityWithoutMessages(element);
      }
    });
    this.setSubmitButtonState(this.submit, result);
  }

  checkInputValidityWithoutMessages(element) {
    return element.checkValidity();
  }
}
