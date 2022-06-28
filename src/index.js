import {
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
  buttonClosePopUpDelete,
  popUpDelete,
  buttonOpenAvatarEdit,
  buttonCloseAvatarEdit,
  popUpAvatarEdit,
  formAvatarEdit,
} from "./components/data.js";

import { setValidationForm } from "./components/validate.js";

import {
  hidePopUp,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
  openPopUpAddCard,
  submitDeleteCard,
  openPopUpAvatarEdit,
  submitAvatarEdit,
} from "./components/modal.js";

import { addCard } from "./components/card.js";

import { updateUser, updateCards } from "./components/api.js";

import "./pages/index.css";
import { changeAvatar, changeTextProfile } from "./components/until.js";

function addCards() {
  updateCards()
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      res.reverse();
      res.forEach((item) => {
        addCard(item);
      });
    })
    .catch((res) => console.log(res));
}

function updateProfele() {
  updateUser()
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      changeTextProfile(res);
      changeAvatar(res);
    })
    .catch((res) => console.log(res));
}

setValidationForm(validateConfig);

updateProfele();
addCards();

buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () =>
  hidePopUp(popUpProfileEdit)
);

buttonOpenAddCard.addEventListener("click", () => openPopUpAddCard());

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));

buttonClosePopUpDelete.addEventListener("click", () => hidePopUp(popUpDelete));

popUpDelete.addEventListener("submit", submitDeleteCard);

buttonOpenAvatarEdit.addEventListener("click", openPopUpAvatarEdit);

formAvatarEdit.addEventListener("submit", submitAvatarEdit);

buttonCloseAvatarEdit.addEventListener("click", () =>
  hidePopUp(popUpAvatarEdit)
);
