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
} from "./data.js";

import { setValidationForm } from "./validate.js";

import {
  hidePopUp,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
  openPopUpAddCard,
  submitDeleteCard,
  openPopUpAvatarEdit,
  submitAvatarEdit,
} from "./modal.js";

import { addCard } from "./card.js";

import { updateUser, updateCards } from "./api.js";

import "../pages/index.css";
import { changeAvatar, changeTextProfile, changeId } from "./utils.js";


setValidationForm(validateConfig);

Promise.all([updateCards(), updateUser()])
  .then((values) => {
    const resCards = values[0];
    const resUser = values[1];
    changeTextProfile(resUser);
    changeAvatar(resUser);
    changeId(resUser);
    resCards.reverse();
    resCards.forEach((item) => {
      addCard(item)
    })
  }).catch((err) => console.log(err))


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
