//Обработка исходного массива карточек
const container = document.querySelector(".places-list");
container.addEventListener("click", Card.prototype.like);
container.addEventListener("click", Card.prototype.delete);

//Валидаторы форм
const validatorProfile = new FormValidator(document.forms.userprofile);
const validatorPlace = new FormValidator(document.forms.place);

const popupPlace = new Popup("place");
const placeAddButton = document.querySelector(".user-info__button");
placeAddButton.addEventListener("click", () => {
  popupPlace.open();
  validatorPlace.checkEverythingWithoutMessages();
});
const popupPlaceForm = document.querySelector(".popup_place");
popupPlaceForm.addEventListener("submit", () => {
  popupPlace.close.bind(popupPlace);
  document.forms.place.reset();
});
popupPlaceForm.addEventListener("click", popupPlace.close.bind(popupPlace));

const popupProfile = new Popup("profile", "userprofile");

const profileAddButton = document.querySelector(".user-info__edit");
profileAddButton.addEventListener("click", () => {
  popupProfile.open();
  user.setUserInfo();
  validatorProfile.checkEverythingWithoutMessages();
});

const popupProfileForm = document.querySelector(".popup_profile");
popupProfileForm.addEventListener("submit", () => {
  popupProfile.close.bind(popupProfile);
  document.forms.userprofile.reset();
});
popupProfileForm.addEventListener(
  "click",
  popupProfile.close.bind(popupProfile)
);

const popupImage = new ZoomImage("image", container);
const popupImageZoom = document.querySelector(".popup_image");
container.addEventListener("click", popupImage.open.bind(popupImage));
container.addEventListener("click", popupImage.setBgImage.bind(popupImage));
popupImageZoom.addEventListener("click", popupImage.close.bind(popupImage));

//Редактирование пользовательской информации
const user = new UserInfo(
  document.forms.userprofile,
  document.querySelector(".user-info__name"),
  document.querySelector(".user-info__job")
);

document.forms.userprofile.addEventListener("submit", function(event) {
  event.preventDefault();
  user.updateUserInfo();
  api.newUser(//Обновляю пользовательские данные на сервере
    document.forms.userprofile.elements.username.value,
    document.forms.userprofile.elements.job.value
  );
});

const api = new Api({
  baseUrl: "https://praktikum.tk/cohort8",
  headers: {
    authorization: "981e69e9-9d65-4905-b010-97bbc117c8ed",
    "Content-Type": "application/json"
  }
});
//Получаю информацию о пользователе с сервера
api.getUser()
.then(user => {
  document.querySelector(".user-info__name").textContent = user.name;
  document.querySelector(".user-info__job").textContent = user.about;
});

//Получаю данные о карточках с сервера
api.getInitialCards()
.then(function(cards) {
  const newArray = cards.map(function(element) {
    const card = new Card(element.name, element.link);
    return card;
  });
  const cardlist = new CardList(container, newArray);
  cardlist.render();
});

//Добавление пользовательской карточки
document.forms.place.addEventListener("submit", function(event) {
  event.preventDefault();
  const cardNew = new Card(
    document.forms.place.elements.name.value,
    document.forms.place.elements.link.value
  );
  cardlist.addCard(cardNew);
  document.forms.place.reset();
});
