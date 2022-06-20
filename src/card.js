import { templateCard, cardsContainer, popUpImage } from "./data.js";
import { openPopUp } from "./modal.js";

function changePopUpImage(name, urlImage) {
  const image = popUpImage.querySelector(".pop-up__images");
  image.src = urlImage;
  image.alt = name;
  popUpImage.querySelector(".pop-up__caption").textContent = name;
  openPopUp(popUpImage);
}

function deleteCard(evt) {
  evt.target.closest("li").remove();
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like_active");
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
  return cardLi;
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

export {
  createCard,
  addCard,
  addCards,
  changePopUpImage,
  deleteCard,
  likeCard,
};
