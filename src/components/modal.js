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
  configApi
} from "./data.js";

import { toggleActiveButton } from "./validate.js";

import { addCard } from "./card.js";

import {changeProfile, toSendCard} from './api.js'

function workHideEscape(evt) {
  if (evt.key === "Escape") {
    const activPopUp = document.querySelector(".pop-up_active");
    hidePopUp(activPopUp);
  }
}

function workHideOverlay(evt) {
  if (evt.target.classList.contains("pop-up")) {
    hidePopUp(evt.target);
  }
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

function chageProfile() {
  profileName.textContent = formInputName.value;
  profileText.textContent = formInputText.value;
}

function submitProfileEdit(evt) {
  evt.preventDefault();
  changeProfile(configApi, formInputName.value, formInputText.value) /* Работа с API*/
  hidePopUp(popUpProfileEdit);

}

function submitAddCard(evt) {
  evt.preventDefault();
  const dateJson = JSON.stringify({
    name: formInputMestoName.value,
    link: formInputUrlImage.value,
  })
  toSendCard(configApi,dateJson);
  formAddCard.reset();
  hidePopUp(popUpAddCard);
}

function openPopUpProfile() {
  changeValue();
  openPopUp(popUpProfileEdit);
}

function openPopUpAddCard() {
  updateButtonSave(popUpAddCard);
  openPopUp(popUpAddCard);
}

export {
  workHideEscape,
  workHideOverlay,
  openPopUp,
  hidePopUp,
  changeValue,
  chageProfile,
  submitProfileEdit,
  submitAddCard,
  openPopUpProfile,
  openPopUpAddCard,
};
