import {
  places,
  popUpProfileEdit,
  formProfileEdit,
  buttonOpenProfilEdit,
  buttonClosePopUpProfile,
  popUpAddCard,
  buttonOpenAddCard,
  formAddCard,
  buttonCloseAddCard,
  popUpImage,
  buttonCloseImage,
  validateConfig,
} from "./components/data.js";

import {
  setValidationForm,
} from "./components/validate.js";

import {
  hidePopUp,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
  openPopUpAddCard,
} from "./components/modal.js";

import {
  addCard,
} from "./components/card.js";

import { configApi } from "./components/data.js";

import { updateUser, toSendCard, updateCards } from "./components/api.js";

import "./pages/index.css";




setValidationForm(validateConfig);

updateUser(configApi);
updateCards(configApi);






buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () =>
  hidePopUp(popUpProfileEdit)
);

buttonOpenAddCard.addEventListener("click", () => openPopUpAddCard());

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));
