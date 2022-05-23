/*function formSubmitHandler (evt) {
  evt.preventDefault(); }

  Отключает стандартное поведение формы.
*/


let buttonOpenEditProfile = document.querySelector(".profile__edit");
let buttonOpenAddCard = document.querySelector(".profile__add");
let popUpProfile = document.querySelector(".pop-up_el_profile-edit");
let buttonCloseEditProfile = popUpProfile.querySelector(".pop-up__close");
let buttonSubmitEditProfile = popUpProfile.querySelector(".pop-up__form");
let popUpAddCard = document.querySelector(".pop-up_el_add-card");
let buttonCloseAddCard = popUpAddCard.querySelector(".pop-up__close");
let buttonSubmitAddCard = popUpAddCard.querySelector(".pop-up__form");
let photoGrid = document.querySelector(".photo__grid");
let cardTemplate = document.querySelector('#card-js');


const urlPlace = ['./images/milandi.jpg', './images/Mombasa.jpg', './images/Kilwa.jpg',
  './images/puntaarneas.jpg', './images/tenerife.jpg', './images/sevilya.jpg'];

const namePlace = ['Миланди', 'Момбаса', 'Килва-Кисивани', 'Пунта-Аренас', 'Тенерифе', 'Севилья'];

function changePlaceholder(element) {
  /* Коректные данные плейсхолдера */
  let name = document.querySelector(".profile__name").textContent;
  let text = document.querySelector(".profile__text").textContent;
  element
    .querySelector(".pop-up__input_el_name")
    .setAttribute("placeholder", `${name}`);
  element
    .querySelector(".pop-up__input_el_text")
    .setAttribute("placeholder", `${text}`);
}

function changeProfile(element) {
  /* Меняет данные в профиле */
  let nameForm = element.querySelector(".pop-up__input_el_name").value;
  let textForm = element.querySelector(".pop-up__input_el_text").value;
  document.querySelector(".profile__name").textContent = nameForm;
  document.querySelector(".profile__text").textContent = textForm;
}

function deleteValueInput(element) {
  /* Удаляет из инпута значение */
  let allInput = element.querySelectorAll(".pop-up__input");
  for (let i = 0; allInput.length !== i; i += 1) {
    allInput[i].value = "";
  }
}

function hidePopUp(element) {
  /* Закрытие окна */
  element.classList.remove("pop-up_active");
}

function openPopUp(element) {
  /* Открытие окна */
  element.classList.add("pop-up_active");
}

function addCard(element) {
  /* Добавление мест из формы */
  let cardItem = cardTemplate.content.querySelector('li').cloneNode(true);
  let nameCard = element.querySelector(".pop-up__input_el_mesto").value;
  let urlImage = element.querySelector(".pop-up__input_el_image-url").value;
  cardItem.querySelector('.card__image').setAttribute('src', urlImage);
  cardItem.querySelector('.card__name').textContent = nameCard;
  cardItem.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  })
  photoGrid.prepend(cardItem);

}


function addCards(a, b) {
  for (let i = 0; a.length !== i; i += 1) {
    let cardItem = cardTemplate.content.querySelector('li').cloneNode(true);
    cardItem.querySelector('.card__image').setAttribute('src', b[i]);
    cardItem.querySelector('.card__name').textContent = a[i];
    photoGrid.prepend(cardItem);
}
}

function addClickLike() {
  let allButtonLike = document.querySelectorAll('.card__like');
  console.log(allButtonLike);
  for (let i = 0; i < allButtonLike.length; i ++) {
    allButtonLike[i].addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like_active');
    })
  }
}


/* Слушатели "Профиля" */

buttonOpenEditProfile.addEventListener("click", function () {
  openPopUp(popUpProfile);
  changePlaceholder(popUpProfile);
});

buttonCloseEditProfile.addEventListener("click", function () {
  hidePopUp(popUpProfile);
});

buttonSubmitEditProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  changeProfile(popUpProfile);
  deleteValueInput(popUpProfile);
  hidePopUp(popUpProfile);
});

/* Слушатели добавления места */

buttonOpenAddCard.addEventListener("click", function () {
  openPopUp(popUpAddCard);
});

buttonCloseAddCard.addEventListener("click", function () {
  hidePopUp(popUpAddCard);
});

buttonSubmitAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addCard(popUpAddCard);
  deleteValueInput(popUpAddCard);
  hidePopUp(popUpAddCard);
});

addCards(namePlace, urlPlace);

addClickLike();
