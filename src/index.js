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

import {
  workHideEscape, workHideOverlay, openPopUp, hidePopUp, changeValue,
  deleteCard, likeCard, chageProfile, createCard, addCard, addCards,
  changePopUpImage, submitProfileEdit, submitAddCard, openPopUpProfile
} from './workPopUp.js'

import '../pages/index.css';

setValidationForm();
addCards(place);

buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () => hidePopUp(popUpProfileEdit));

buttonOpenAddCard.addEventListener("click", () => openPopUp(popUpAddCard));

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));
