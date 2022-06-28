import { templateCard, cardsContainer, popUpDelete, configApi} from "./data.js";
import { openPopUp, changePopUpImage, changePopUpDelete} from "./modal.js";
import {toPutLike} from './api.js'


function deleteCard(evt) {
  const card = evt.target
  openPopUp(popUpDelete)
  changePopUpDelete(card)
}

function likeCard(evt) {
  const card = evt.target
  if (card.classList.contains('card__like_active')){
    toPutLike(card, 'DELETE')
      .then((res) => {
        wasLike(configApi, card, res.likes)
      })
      .catch((res) => console.log(res))
  } else {
    toPutLike(card, 'PUT')
    .then((res) => {
      wasLike(configApi, card, res.likes)
    })
    .catch((res) => console.log(res))
  }
}

function wasLike(config, button, likes){
  const countLike = button.parentElement.querySelector('.card__linke-count')
  countLike.textContent = likes.length
  if (likes.length === 0){
    return;
  }
  let like = likes.find((item) => item._id === config.id);
  console.log(like)
  if (like != undefined){
    button.classList.add('card__like_active')
  } else {
    button.classList.remove('card__like_active')
  }
}

function activDeleteButton(config, date, button){
  if (date._id != config.id){
    button.classList.add('card__delete_inactive')
  }
}

function createCard(date) {
  const cardLi = templateCard.querySelector("li").cloneNode(true);
  const buttonDeleteCard = cardLi.querySelector(".card__delete");
  const buttonLikeCard = cardLi.querySelector(".card__like");
  const cardImage = cardLi.querySelector(".card__image");
  const countLikes = cardLi.querySelector('.card__linke-count')

  cardLi.querySelector(".card__name").textContent = date.name;
  cardImage.src = date.link;
  cardImage.alt = date.name;

  buttonDeleteCard.setAttribute('id', date._id);
  buttonLikeCard.setAttribute('id', date._id);
  countLikes.textContent = date.likes.length

  activDeleteButton(configApi, date.owner, buttonDeleteCard)
  wasLike(configApi, buttonLikeCard, date.likes)

  buttonDeleteCard.addEventListener("click", (evt) => deleteCard(evt));
  buttonLikeCard.addEventListener("click", (evt) => likeCard(evt));
  cardImage.addEventListener("click", (evt) =>
    changePopUpImage(date.name, date.link)
  );
  return cardLi;
}

function addCard(date) {
  const newCard = createCard(date);
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
