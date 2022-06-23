const milandiImage = new URL("../images/milandi.jpg", import.meta.url);
const mombasaImage = new URL("../images/Mombasa.jpg", import.meta.url);
const kilwaImage = new URL("../images/Kilwa.jpg", import.meta.url);
const puntaarneasImage = new URL("../images/puntaarneas.jpg", import.meta.url);
const tenerifeImage = new URL("../images/tenerife.jpg", import.meta.url);
const sevilyaImage = new URL("../images/sevilya.jpg", import.meta.url);
const mysNadejdiImage = new URL(
  "../images/mys-dobroy-nadejdi.jpg",
  import.meta.url
);
const ostrovSantaKrusImage = new URL(
  "../images/ostrov-santa-krus.jpg",
  import.meta.url
);
const guamImage = new URL("../images/guam.jpg", import.meta.url);
const sebuImage = new URL("../images/sebu.jpg", import.meta.url);
const tidoreImage = new URL("../images/Tidore.jpg", import.meta.url);
const castilioImage = new URL(
  "../images/Castillo_Santiago_Sanlucar.jpg",
  import.meta.url
);

const places = [
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pillar_of_Vasco_da_Gama.jpg/1024px-Pillar_of_Vasco_da_Gama.jpg?1655847610112',
    name: "Миланди",
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Mombasa-MarketHall.jpg?1655847506025',
    name: "Момбаса",
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ruins_of_Kilwa_Kisiwani_and_Ruins_of_Songo_Mnara-108261.jpg/1024px-Ruins_of_Kilwa_Kisiwani_and_Ruins_of_Songo_Mnara-108261.jpg',
    name: "Килва-Кисивани",
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/9/92/PArenas_Magallanes.JPG',
    name: "Пунта-Аренас",
  },
  {
    link: 'https://wikiway.com/upload/hl-photo/c81/be3/ostrov-tenerife_206.jpg',
    name: "Тенерифе",
  },
  {
    link: 'https://wikiway.com/upload/hl-photo/7c8/24f/sevilya_80.jpg',
    name: "Севилья",
  },
  {
    link: 'https://wikiway.com/upload/hl-photo/81d/5f9/mys-dobroy-nadezhdy_60.jpg',
    name: "Мыс Доброй Надежды",
  },
  {
    link: 'https://wikiway.com/upload/hl-photo/903/0f6/ostrov-santa-krus_33.jpg',
    name: "Санта-Крус",
  },
  {
    link: 'https://wikiway.com/upload/resize_cache/uf/735/1024_800_1/guam_3.jpg',
    name: "Гуам",
  },
  {
    link: 'https://cdn.skyrisecities.com/sites/default/files/images/cities/14653/14653-42004.jpg',
    name: "Себу",
  },
  {
    link: 'https://www.ratnadewi.me/wp-content/uploads/2017/03/tidore.jpg',
    name: "Тидоре",
  },
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Castillo_Santiago_Sanlucar.JPG/800px-Castillo_Santiago_Sanlucar.JPG',
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

const validateConfig = {
  formSelector: ".pop-up__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_active",
};

const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
  token: '69e1601f-6c3f-4190-af86-3fd180da8137',
  id: '1c333a798ca5f742474a346e', /* Возможно, есть смысл переделать это в константу и вызывать функцию*/
}



export {
  places,
  popUpProfileEdit,
  formProfileEdit,
  buttonOpenProfilEdit,
  buttonClosePopUpProfile,
  popUpAddCard,
  buttonOpenAddCard,
  formAddCard,
  buttonCloseAddCard,
  templateCard,
  cardsContainer,
  popUpImage,
  buttonCloseImage,
  formInputName,
  formInputText,
  profileName,
  profileText,
  formInputMestoName,
  formInputUrlImage,
  validateConfig,
  configApi,
};
