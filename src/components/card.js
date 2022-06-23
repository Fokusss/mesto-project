import { templateCard, cardsContainer, popUpImage, configApi,} from "./data.js";
import { openPopUp } from "./modal.js";
import {toPutLike, updateLike} from './api.js'

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
  const card = evt.target
  if (card.classList.contains('card__like_active')){
    toPutLike(configApi, card, 'DELETE')
  } else {
    toPutLike(configApi, card, 'PUT')
  }

}

function wasLike(config, button, likes){
  const countLike = button.parentElement.querySelector('.card__linke-count')
  countLike.textContent = likes.length
  likes.forEach((item) => {
    if (item._id === config.id){
      button.classList.add('card__like_active');
    } else {
      button.classList.remove('card__like_active')
    }
  })
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
  wasLike(configApi, buttonLikeCard, likes)
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
  wasLike
};
