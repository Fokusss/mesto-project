const configApi = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "69e1601f-6c3f-4190-af86-3fd180da8137",
    "Content-Type": "application/json",
  },
};

const avatar = document.querySelector(".profile__avatar");
const popUpProfileEdit = document.querySelector(".pop-up_el_profile-edit");
const buttonOpenProfilEdit = document.querySelector(".profile__edit");
const formProfileEdit = document.querySelector('form[name="profile-edit"]');
const buttonClosePopUpProfile =
  popUpProfileEdit.querySelector(".pop-up__close");
const buttonSaveProfile = popUpProfileEdit.querySelector(".form__save");

const popUpAddCard = document.querySelector(".pop-up_el_add-card");
const buttonOpenAddCard = document.querySelector(".profile__add");
const formAddCard = popUpAddCard.querySelector('form[name="card-add"]');
const buttonCloseAddCard = popUpAddCard.querySelector(".pop-up__close");
const templateCard = document.querySelector("#card-js").content;
const cardsContainer = document.querySelector(".photo__grid");

const popUpImage = document.querySelector(".pop-up_el_image");
const buttonCloseImage = popUpImage.querySelector(".pop-up__close");
const image = popUpImage.querySelector(".pop-up__images");

const formInputName = popUpProfileEdit.querySelector('input[name="name"]');
const formInputText = popUpProfileEdit.querySelector('input[name="text"]');
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");

const formInputMestoName = popUpAddCard.querySelector(
  'input[name="mesto-name"]'
);
const formInputUrlImage = popUpAddCard.querySelector('input[name="url-image"]');

const popUpDelete = document.querySelector(".pop-up_el_delete");
const buttonClosePopUpDelete = popUpDelete.querySelector(".pop-up__close");
const buttonSubmitPopUpDelete = popUpDelete.querySelector(".form__save");

const buttonOpenAvatarEdit = document.querySelector(".profile__avatar-button");
const popUpAvatarEdit = document.querySelector(".pop-up_el_avatar-edit");
const buttonCloseAvatarEdit = popUpAvatarEdit.querySelector(".pop-up__close");
const formAvatarEdit = popUpAvatarEdit.querySelector(".pop-up__form");
const formAvatarLinkInput = formAvatarEdit.querySelector(
  'input[name="avatar-lik"]'
);

const postSection = document.querySelector(".photo__grid");

const validateConfig = {
  formSelector: ".pop-up__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_active",
};

export {
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
  avatar,
  popUpDelete,
  buttonClosePopUpDelete,
  buttonSubmitPopUpDelete,
  postSection,
  popUpAvatarEdit,
  buttonCloseAvatarEdit,
  formAvatarEdit,
  buttonOpenAvatarEdit,
  formAvatarLinkInput,
  configApi,
  image,
  buttonSaveProfile
};
