import {
  place, popUpProfileEdit, formProfileEdit, buttonOpenProfilEdit, buttonClosePopUpProfile,
  popUpAddCard, buttonOpenAddCard, formAddCard, buttonCloseAddCard, templateCard,
  cardsContainer, popUpImage, buttonCloseImage, formInputName, formInputText,
  profileName, profileText, formInputMestoName, formInputUrlImage
} from './data.js'

import {
  showInputError, hideInputError, isValid, hasValidInput, toggleActiveButton,
  setEventListeners, setValidationForm
} from './validation.js'

function workHideEscape (evt) {
  if (evt.key === 'Escape'){
    const activPopUp = document.querySelector('.pop-up_active');
    hidePopUp(activPopUp);
  }
}

function workHideOverlay (evt) {
  if (evt.target.classList.contains('pop-up')){
    hidePopUp(evt.target);
  }
}

function openPopUp(element) {
  if (!element.classList.contains('pop-up_el_image')){
    const inputList = Array.from(element.querySelectorAll('.form__input'));
    const buttonSave = element.querySelector('.form__save');
    toggleActiveButton(inputList, buttonSave);
  }
  element.classList.add("pop-up_active");
  document.addEventListener('keydown', workHideEscape);
  document.addEventListener('mousedown', workHideOverlay);
}

function hidePopUp(element) {
  element.classList.remove("pop-up_active");
  document.removeEventListener('keydown', workHideEscape);
  document.removeEventListener('mousedown', workHideOverlay);
}

function changeValue() {
  formInputName.value = profileName.textContent;
  formInputText.value = profileText.textContent;
}

function deleteCard(evt) {
  evt.target.closest("li").remove();
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like_active");
}

function chageProfile() {
  profileName.textContent = formInputName.value;
  profileText.textContent = formInputText.value;
}

function createCard(name, urlImage) {
  const cardLi = templateCard.querySelector("li").cloneNode(true);
  const buttonDeleteCard = cardLi.querySelector(".card__delete");
  const buttonLikeCard = cardLi.querySelector(".card__like");
  const cardImage = cardLi.querySelector(".card__image");

  cardLi.querySelector(".card__name").textContent = name;
  cardImage.src = urlImage;
  cardImage.alt = name;
  buttonDeleteCard.addEventListener("click", (evt) => deleteCard(evt));
  buttonLikeCard.addEventListener("click", (evt) => likeCard(evt));
  cardImage.addEventListener("click", (evt) =>
    changePopUpImage(name, urlImage)
  );
  return cardLi
}

function addCard(name, urlImage) {
  const newCard = createCard(name, urlImage);
  cardsContainer.prepend(newCard);
}

function addCards(place) {
  place.forEach((item) => {
    addCard(item.name, item.link);
  });
}

function changePopUpImage(name, urlImage) {
  const image = popUpImage.querySelector(".pop-up__images");
  image.src = urlImage;
  image.alt = name;
  popUpImage.querySelector(".pop-up__caption").textContent = name;
  openPopUp(popUpImage);
}

function submitProfileEdit(evt) {
  evt.preventDefault();
  chageProfile();
  hidePopUp(popUpProfileEdit);
}

function submitAddCard(evt) {
  evt.preventDefault();
  addCard(formInputMestoName.value, formInputUrlImage.value);
  formAddCard.reset();
  hidePopUp(popUpAddCard);

}

function openPopUpProfile() {
  changeValue();
  openPopUp(popUpProfileEdit);
}

export {
  workHideEscape, workHideOverlay, openPopUp, hidePopUp, changeValue,
  deleteCard, likeCard, chageProfile, createCard, addCard, addCards,
  changePopUpImage, submitProfileEdit, submitAddCard, openPopUpProfile
}
