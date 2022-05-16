console.log(document);

let popUpOpen = document.querySelector('.profile__edit');
let popUpClose = document.querySelector('.pop-up__close');
let popUp = document.querySelector('.pop-up');
let popUpSave = document.querySelector('.pop-up__save');

function popUpO() {
  popUp.classList.add('pop-up_active');
}

function popUpX() {
  popUp.classList.remove('pop-up_active');
}

function popUpS() {
  let profileName = document.querySelector('.pop-up__input_el_name');
  let profileText = document.querySelector('.pop-up__input_el_text');
  document.querySelector('.profile__name').textContent = '${profileName}';
  document.querySelector('.rpofile__text').textContent = '${profileText}';
  return false;
}

popUpOpen.addEventListener('click', popUpO);
popUpClose.addEventListener('click', popUpX);
popUpSave.addEventListener('click', popUpS);







