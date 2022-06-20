import {
  place,
  popUpProfileEdit,
  formProfileEdit,
  buttonOpenProfilEdit,
  buttonClosePopUpProfile,
  popUpAddCard,
  buttonOpenAddCard,
  formAddCard,
  buttonCloseAddCard,
  templateCard,
  cardsContainer,
  popUpImage,
  buttonCloseImage,
  formInputName,
  formInputText,
  profileName,
  profileText,
  formInputMestoName,
  formInputUrlImage,
  validateConfig,
} from "./components/data.js";

import {
  showInputError,
  hideInputError,
  isValid,
  hasValidInput,
  toggleActiveButton,
  setEventListeners,
  setValidationForm,
} from "./components/validate.js";

import {
  workHideEscape,
  workHideOverlay,
  openPopUp,
  hidePopUp,
  changeValue,
  chageProfile,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
} from "./components/modal.js";

import {
  createCard,
  addCard,
  addCards,
  changePopUpImage,
  deleteCard,
  likeCard,
} from "./components/card.js";

import "./pages/index.css";

setValidationForm(validateConfig);
addCards(place);

buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () =>
  hidePopUp(popUpProfileEdit)
);

buttonOpenAddCard.addEventListener("click", () => openPopUp(popUpAddCard));

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));
