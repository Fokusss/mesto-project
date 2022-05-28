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

const formInputMestoName = popUpAddCard.querySelector(
  'input[name="mesto-name"]'
);
const formInputUrlImage = popUpAddCard.querySelector('input[name="url-image"]');

function openPopUp(element) {
  element.classList.add("pop-up_active");
}

function hidePopUp(element) {
  element.classList.remove("pop-up_active");
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

function addCard(name, urlImage) {
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
  cardsContainer.prepend(cardLi);
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

/* Слушатели */

buttonOpenProfilEdit.addEventListener("click", () => openPopUpProfile());

formProfileEdit.addEventListener("submit", (evt) => submitProfileEdit(evt));

buttonClosePopUpProfile.addEventListener("click", () => hidePopUp(popUpProfileEdit));

buttonOpenAddCard.addEventListener("click", () => openPopUp(popUpAddCard));

formAddCard.addEventListener("submit", (evt) => submitAddCard(evt));

buttonCloseAddCard.addEventListener("click", () => hidePopUp(popUpAddCard));

buttonCloseImage.addEventListener("click", () => hidePopUp(popUpImage));
