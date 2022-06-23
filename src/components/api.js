import { profileName, profileText} from "./data.js";
import {addCards} from './until.js'
import {addCard, wasLike} from './card.js'

function changeTextProfile(res) {
  profileName.textContent = res.name;
  profileText.textContent = res.about;
}

function changeAvatar(res) {
  const avatar = document.querySelector('.profile__avatar');
  avatar.setAttribute('src', res.avatar)
}

function updateUser(config) {
  fetch(`${config.url}/users/me`, {
    headers: {
      authorization: `${config.token}`,
    },
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      changeTextProfile(res);
      changeAvatar(res);
    });
}

function changeProfile(config, importName, importText) {
  fetch(`${config.url}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${importName}`,
      about: `${importText}`,
    })
  })
    .then((res) => res.json())
    .then((res) => changeTextProfile(res));
}

function toSendCard(config, date){
  fetch(`${config.url}/cards`,{
    method: 'POST',
    headers: {
      authorization: `${config.token}`,
      'Content-Type': 'application/json',
    },
    body: date,
  })
    .then((res) => res.json())
    .then((res) => {
      const name = res.name
      const link = res.link
      const id = res._id
      addCard(name, link, id)
    })
}

function updateCards(config){
  fetch(`${config.url}/cards`, {
    method: 'GET',
    headers: {
      authorization: `${config.token}`
    }
  }).then((res) => res.json())
    .then((res) => {
      addCards(res)
    })
}

function toPutLike(config, card, metod){
  fetch(`${config.url}/cards/likes/${card.id}`,{
    method: metod,
    headers: {
      authorization: `${config.token}`
    }
  }).then((res) => res.json())
    .then((res) => wasLike(config, card, res.likes))
}


export { updateUser, changeProfile, toSendCard, updateCards, toPutLike,};
