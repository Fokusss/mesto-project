const milandiImage = new URL('../images/milandi.jpg', import.meta.url)
const mombasaImage = new URL('../images/Mombasa.jpg', import.meta.url)
const kilwaImage = new URL('../images/Kilwa.jpg', import.meta.url)
const puntaarneasImage = new URL("../images/puntaarneas.jpg", import.meta.url)
const tenerifeImage = new URL("../images/tenerife.jpg", import.meta.url)
const sevilyaImage = new URL("../images/sevilya.jpg", import.meta.url)
const mysNadejdiImage = new URL("../images/mys-dobroy-nadejdi.jpg", import.meta.url)
const ostrovSantaKrusImage = new URL("../images/ostrov-santa-krus.jpg", import.meta.url)
const guamImage = new URL("../images/guam.jpg", import.meta.url)
const sebuImage = new URL("../images/sebu.jpg", import.meta.url)
const tidoreImage = new URL("../images/Tidore.jpg", import.meta.url)
const castilioImage = new URL("../images/Castillo_Santiago_Sanlucar.jpg", import.meta.url)

const place = [
  {
    link: milandiImage,
    name: "Миланди",
  },
  {
    link: mombasaImage,
    name: "Момбаса",
  },
  {
    link: kilwaImage,
    name: "Килва-Кисивани",
  },
  {
    link: puntaarneasImage,
    name: "Пунта-Аренас",
  },
  {
    link: tenerifeImage,
    name: "Тенерифе",
  },
  {
    link: sevilyaImage,
    name: "Севилья",
  },
  {
    link: mysNadejdiImage,
    name: "Мыс Доброй Надежды",
  },
  {
    link: ostrovSantaKrusImage,
    name: "Санта-Крус",
  },
  {
    link: guamImage,
    name: "Гуам",
  },
  {
    link: sebuImage,
    name: "Себу",
  },
  {
    link: tidoreImage,
    name: "Тидоре",
  },
  {
    link: castilioImage,
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

export {
  place, popUpProfileEdit, formProfileEdit, buttonOpenProfilEdit, buttonClosePopUpProfile,
  popUpAddCard, buttonOpenAddCard, formAddCard, buttonCloseAddCard, templateCard,
  cardsContainer, popUpImage, buttonCloseImage, formInputName, formInputText,
  profileName, profileText, formInputMestoName, formInputUrlImage
}
