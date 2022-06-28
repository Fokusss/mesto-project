import {
  popUpProfileEdit,
  popUpAddCard,
  formAddCard,
  popUpImage,
  formInputName,
  formInputText,
  profileName,
  profileText,
  formInputMestoName,
  formInputUrlImage,
  validateConfig,
  buttonSubmitPopUpDelete,
  postSection,
  popUpDelete,
  popUpAvatarEdit,
  formAvatarLinkInput,
  formAvatarEdit,
} from "./data.js";

import { toggleActiveButton } from "./validate.js";

import { addCard } from "./card.js";

import {
  changeProfile,
  toSendCard,
  deleteCardApi,
  avatarEditApi,
} from "./api.js";
import { changeTextProfile, changeAvatar } from "./until.js";

function workHideEscape(evt) {
  if (evt.key === "Escape") {
    const activPopUp = document.querySelector(".pop-up_active");
    hidePopUp(activPopUp);
  }
}

function renderSubmit(button, boolean, text) {
  if (boolean) {
    button.textContent = text;
  } else {
    button.textContent = text;
  }
}

function workHideOverlay(evt) {
  if (evt.target.classList.contains("pop-up")) {
    hidePopUp(evt.target);
  }
}

function changePopUpDelete(card) {
  buttonSubmitPopUpDelete.setAttribute("id", card.id);
}

function changePopUpImage(name, urlImage) {
  const image = popUpImage.querySelector(".pop-up__images");
  image.src = urlImage;
  image.alt = name;
  popUpImage.querySelector(".pop-up__caption").textContent = name;
  openPopUp(popUpImage);
}

function openPopUp(element) {
  element.classList.add("pop-up_active");
  document.addEventListener("keydown", workHideEscape);
  document.addEventListener("mousedown", workHideOverlay);
}

function updateButtonSave(element) {
  const inputList = Array.from(element.querySelectorAll(".form__input"));
  const buttonSave = element.querySelector(".form__save");
  toggleActiveButton(inputList, buttonSave, validateConfig);
}

function hidePopUp(element) {
  element.classList.remove("pop-up_active");
  document.removeEventListener("keydown", workHideEscape);
  document.removeEventListener("mousedown", workHideOverlay);
}

function changeValue() {
  formInputName.value = profileName.textContent;
  formInputText.value = profileText.textContent;
}

function submitProfileEdit(evt) {
  evt.preventDefault();
  const button = document.querySelector(".form__save");
  renderSubmit(button, true, "Сохранить...");
  changeProfile(formInputName.value, formInputText.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      changeTextProfile(res);
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderSubmit(button, false, "Сохранить");
    });
  hidePopUp(popUpProfileEdit);
}

function submitAddCard(evt) {
  evt.preventDefault();
  const button = popUpAddCard.querySelector(".form__save");
  renderSubmit(button, true, "Сохранение...");
  const date = {
    name: formInputMestoName.value,
    link: formInputUrlImage.value,
  };
  toSendCard(date)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      addCard(res);
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderSubmit(button, false, "Создать");
    });
  formAddCard.reset();
  hidePopUp(popUpAddCard);
}

function submitDeleteCard(evt) {
  evt.preventDefault();
  const button = evt.target.querySelector(".form__save");
  renderSubmit(button, true, "Удаление...");
  deleteCardApi(button)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      if (res.message === "Пост удалён") {
        const cardsList = Array.from(
          postSection.querySelectorAll(".card__delete")
        );
        let cardDelete = cardsList.find((item) => {
          return item.id == button.id;
        });
        cardDelete.closest("li").remove();
        hidePopUp(popUpDelete);
      }
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderSubmit(button, false, "Да");
    });
}

function submitAvatarEdit(evt) {
  evt.preventDefault();
  const button = evt.target.querySelector(".form__save");
  renderSubmit(button, true, "Сохранение...");
  const link = { avatar: formAvatarLinkInput.value };
  avatarEditApi(link)
    .then((res) => {
      changeAvatar(res);
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderSubmit(button, true, "Сохранить");
      hidePopUp(popUpAvatarEdit);
      formAvatarEdit.reset();
    });
}

function openPopUpProfile() {
  changeValue();
  openPopUp(popUpProfileEdit);
  updateButtonSave(popUpProfileEdit);
}

function openPopUpAddCard() {
  updateButtonSave(popUpAddCard);
  openPopUp(popUpAddCard);
}

function openPopUpAvatarEdit() {
  openPopUp(popUpAvatarEdit);
  updateButtonSave(popUpAvatarEdit);
}

export {
  workHideEscape,
  workHideOverlay,
  openPopUp,
  hidePopUp,
  changeValue,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
  openPopUpAddCard,
  changePopUpImage,
  changePopUpDelete,
  submitDeleteCard,
  openPopUpAvatarEdit,
  submitAvatarEdit,
};
