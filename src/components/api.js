import { configApi } from "./data"


const updateCards = () => {
  return fetch(`${configApi.url}/cards`, {
    method: 'GET',
    headers: configApi.headers})
}

const updateUser = () => {
  return fetch(`${configApi.url}/users/me`, {
    headers: configApi.headers,
    method: "GET",
  })
}

const changeProfile = (importName, importText) => {
  return fetch(`${configApi.url}/users/me`, {
    method: 'PATCH',
    headers: configApi.headers,
    body: JSON.stringify({
      name: `${importName}`,
      about: `${importText}`,
    })
  })
}

const toSendCard = (date) => {
  return fetch(`${configApi.url}/cards`,{
    method: 'POST',
    headers: configApi.headers,
    body: JSON.stringify(date),
  })
}

const toPutLike = (card, metod) => {
  return fetch(`${configApi.url}/cards/likes/${card.id}`,{
    method: metod,
    headers: configApi.headers
  })
    .then((res) => {
    if (res.ok){
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  })
}

const deleteCardApi = (card) => {
  return fetch(`${configApi.url}/cards/${card.id}`, {
    method: 'DELETE',
    headers: configApi.headers
  })
}

const avatarEditApi = (link) => {
  return fetch(`${configApi.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: configApi.headers,
    body: JSON.stringify(link)
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
}

export { updateUser, changeProfile, toSendCard, updateCards, toPutLike, deleteCardApi, avatarEditApi};
