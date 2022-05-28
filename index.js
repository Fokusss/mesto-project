const place = [
  {
    link: "./images/milandi.jpg",
    name: "Миланди"
  },
  {
    link: "./images/Mombasa.jpg",
    name: "Момбаса"
  },
  {
    link: "./images/Kilwa.jpg",
    name: "Килва-Кисивани"
  },
  {
    link: "./images/puntaarneas.jpg",
    name: "Пунта-Аренас"
  },
  {
    link: "./images/tenerife.jpg",
    name: "Тенерифе"
  },
  {
    link: "./images/sevilya.jpg",
    name: "Севилья"
  }
]

const popUpProfileEdit = document.querySelector(".pop-up_el_profile-edit");
const buttonOpenProfilEdit = document.querySelector(".profile__edit");
const buttonSaveProfileEdit = document.querySelector('form[name="profile-edit"]');
const buttonClosePopUpProfile = popUpProfileEdit.querySelector(".pop-up__close");

const popUpAddCard = document.querySelector('.pop-up_el_add-card');
const buttonOpenAddCard = document.querySelector('.profile__add');
const buttonSaveAddCard = popUpAddCard.querySelector('form[name="card-add"]');
const buttonCloseAddCard = popUpAddCard.querySelector('.pop-up__close');
const templateCard = document.querySelector('#card-js').content;
const cardList = document.querySelector('.photo__grid');

const popUpImage = document.querySelector('.pop-up_el_image');
const buttonCloseImage = popUpImage.querySelector('.pop-up__close');


let formInputName = popUpProfileEdit.querySelector('input[name="name"]');
let formInputText = popUpProfileEdit.querySelector('input[name="text"]');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');

let formInputMestoName = popUpAddCard.querySelector('input[name="mesto-name"]');
let formInputUrlImage = popUpAddCard.querySelector('input[name="url-image"]');


function openPopUp(element) {
  element.classList.add("pop-up_active");
}

function hidePopUp(element) {
  element.classList.remove("pop-up_active");
}

function changePlaceholder() {
  formInputName.setAttribute('placeholder', profileName.textContent);
  formInputText.setAttribute('placeholder', profileText.textContent);
}

function deleteValueInput(a, b) {
  a.value = '';
  b.value = '';
}

function chageProfile() {
  profileName.textContent = formInputName.value;
  profileText.textContent = formInputText.value;
}

function addCard(name, urlImage) {
  let cardLi = templateCard.querySelector('li').cloneNode(true);
  let buttonDeleteCard = cardLi.querySelector('.card__delete');
  let buttonLikeCard = cardLi.querySelector('.card__like');
  let buttonRaiseImage = cardLi.querySelector('.card__image');

  cardLi.querySelector('.card__name').textContent = name;
  cardLi.querySelector('.card__image').src = urlImage;
  buttonDeleteCard.addEventListener('click', (evt) => {
    evt.target.closest('li').remove();
  });
  buttonLikeCard.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });
  buttonRaiseImage.addEventListener('click',  (evt) => {
    openPopUp(popUpImage);
    changePopUpImage(evt);
  });
  cardList.prepend(cardLi);
}

function moreCards(place) {
  place.forEach((item) => {
    addCard(item.name, item.link);
  })
}



function changePopUpImage(evt) {
  popUpImage.querySelector('.pop-up__images').src = evt.target.src;
}

function addButtons() {
  let buttonsOpenImage = document.querySelectorAll('.card__image');
  let buttonsDeleteCard = document.querySelectorAll('.card__delete');
  let buttonsLikeCard = document.querySelectorAll('.card__like');
  buttonsOpenImage.forEach((item) => {
    item.addEventListener('click', (evt) => {
      openPopUp(popUpImage);
      changePopUpImage(evt);
    })
  })
  buttonsLikeCard.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_active');
    })
  })
  buttonsDeleteCard.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.target.closest('li').remove();
    })
  })
}

addButtons();

moreCards(place);


/* Слушатели */

buttonOpenProfilEdit.addEventListener("click", () => {
  changePlaceholder();
  openPopUp(popUpProfileEdit);
});

buttonSaveProfileEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  chageProfile();
  deleteValueInput(formInputName, formInputText);
  hidePopUp(popUpProfileEdit);
});

buttonClosePopUpProfile.addEventListener("click", () => {
  hidePopUp(popUpProfileEdit);
});

buttonOpenAddCard.addEventListener('click', () => {
  openPopUp(popUpAddCard);
});

buttonSaveAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(formInputMestoName.value, formInputUrlImage.value);
  deleteValueInput(formInputMestoName, formInputUrlImage);
  hidePopUp(popUpAddCard);
});

buttonCloseAddCard.addEventListener('click', () => {
  hidePopUp(popUpAddCard);
});


buttonCloseImage.addEventListener('click', () => {
  hidePopUp(popUpImage);
})


