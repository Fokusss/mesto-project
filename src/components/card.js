import { templateCard, cardsContainer, popUpImage, configApi} from "./data.js";
import { openPopUp } from "./modal.js";
import {toPutLike} from './api.js'

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
  const id = evt.target.id
  toPutLike(configApi, id)
}

function createCard(name, urlImage, id, likes) {
  const cardLi = templateCard.querySelector("li").cloneNode(true);
  const buttonDeleteCard = cardLi.querySelector(".card__delete");
  const buttonLikeCard = cardLi.querySelector(".card__like");
  const cardImage = cardLi.querySelector(".card__image");
  const countLikes = cardLi.querySelector('.card__linke-count')
  cardLi.querySelector(".card__name").textContent = name;
  cardImage.src = urlImage;
  cardImage.alt = name;
  buttonLikeCard.setAttribute('id', id);
  countLikes.textContent = likes.length
  buttonDeleteCard.addEventListener("click", (evt) => deleteCard(evt));
  buttonLikeCard.addEventListener("click", (evt) => likeCard(evt));
  cardImage.addEventListener("click", (evt) =>
    changePopUpImage(name, urlImage)
  );
  return cardLi;
}

function addCard(name, urlImage, id, likes) {
  const newCard = createCard(name, urlImage, id, likes);
  cardsContainer.prepend(newCard);
}

export {
  createCard,
  addCard,
  changePopUpImage,
  deleteCard,
  likeCard,
};
