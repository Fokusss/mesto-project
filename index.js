const place = [
  {
    link: "./images/milandi.jpg",
    name: "Миланди",
  },
  {
    link: "./images/Mombasa.jpg",
    name: "Момбаса",
  },
  {
    link: "./images/Kilwa.jpg",
    name: "Килва-Кисивани",
  },
  {
    link: "./images/puntaarneas.jpg",
    name: "Пунта-Аренас",
  },
  {
    link: "./images/tenerife.jpg",
    name: "Тенерифе",
  },
  {
    link: "./images/sevilya.jpg",
    name: "Севилья",
  },
  {
    link: "./images/mys-dobroy-nadejdi.jpg",
    name: "Мыс Доброй Надежды",
  },
  {
    link: "./images/ostrov-santa-krus.jpg",
    name: "Санта-Крус",
  },
  {
    link: "./images/guam.jpg",
    name: "Гуам",
  },
  {
    link: "./images/sebu.jpg",
    name: "Себу",
  },
  {
    link: "./images/Tidore.jpg",
    name: "Тидоре",
  },
  {
    link: "./images/Castillo_Santiago_Sanlucar.jpg",
    name: "Санлукар-де-Баррамеда",
  },
];

const popUpProfileEdit = document.querySelector(".pop-up_el_profile-edit");
const buttonOpenProfilEdit = document.querySelector(".profile__edit");
const formProfileEdit = document.querySelector('form[name="profile-edit"]');
const buttonClosePopUpProfile =
  popUpProfileEdit.querySelector(".pop-up__close");

const popUpAddCard = document.querySelector(".pop-up_el_add-card");
const buttonOpenAddCard = document.querySelector(".profile__add");
const formAddCard = popUpAddCard.querySelector('form[name="card-add"]');
const buttonCloseAddCard = popUpAddCard.querySelector(".pop-up__close");
const templateCard = document.querySelector("#card-js").content;
const cardsContainer = document.querySelector(".photo__grid");

const popUpImage = document.querySelector(".pop-up_el_image");
const buttonCloseImage = popUpImage.querySelector(".pop-up__close");

const formInputName = popUpProfileEdit.querySelector('input[name="name"]');
const formInputText = popUpProfileEdit.querySelector('input[name="text"]');
const profileName = document.querySelector(".profile__name");
const profileText = document.querySelector(".profile__text");

/* Валидация  */

const showInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = input.validationMessage
  input.classList.add('form__input_type_error');
  error.classList.add('form__input_error-active');
}

const hideInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = ''
  input.classList.remove('form__input_type_error');
  error.classList.remove('form__input_error-active');
}

const isValid = (form, input) => {
  if (!input.validity.valid){
    showInputError(form, input);
  } else {
    hideInputError(form, input);
  }
}

const hasValidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
}

const toggleActiveButton = (inputList, button) => {
  if (hasValidInput(inputList)) {
    button.classList.add('form__save_disabled');
    button.setAttribute('disabled', '');
  } else {
    button.classList.remove('form__save_disabled');
    button.removeAttribute('disabled', '');
  }
}


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonSave = formElement.querySelector('.form__save');
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(formElement, input)
      toggleActiveButton(inputList, buttonSave);
    });
  });
}

const setValidationForm = () => {
  const forms = Array.from(document.forms);
  forms.forEach(form => {
    setEventListeners(form);
  })
}

setValidationForm();

/* Работа формы */

const formInputMestoName = popUpAddCard.querySelector(
  'input[name="mesto-name"]'
);
const formInputUrlImage = popUpAddCard.querySelector('input[name="url-image"]');

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

addCards(place);




/* Cлушатели */

buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () => hidePopUp(popUpProfileEdit));

buttonOpenAddCard.addEventListener("click", () => openPopUp(popUpAddCard));

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));
