/*function formSubmitHandler (evt) {
  evt.preventDefault(); }

  Отключает стандартное поведение формы.
*/

/* Функиция открытия и закрытия попапа */

let popUpBodyList = document.querySelector('.pop-up_el_profile-edit');
let editOpenButton = document.querySelector('.profile__edit');
let editCloseButton = document.querySelector('.pop-up__close');
let editSaveButton = document.querySelector('.pop-up__save');


function openProfileEdit() {
  let profileName = document.querySelector('.profile__name').textContent;
  let profileText = document.querySelector('.profile__text').textContent;
  let inputName = document.querySelector('.pop-up__input_el_name');
  let inputText = document.querySelector('.pop-up__input_el_text');
  inputName.setAttribute('placeholder', `${profileName}`);
  inputText.setAttribute('placeholder', `${profileText}`);
  popUpBodyList.classList.add('pop-up_active');
}

editOpenButton.addEventListener('click', openProfileEdit);

function closeProfileEdit() { // Функция закрытия Попапа
  popUpBodyList.classList.remove('pop-up_active');
}

editCloseButton.addEventListener('click', closeProfileEdit);

function saveProfileEdit(evt) {
  evt.preventDefault()
  let inputValueName = document.querySelector('.pop-up__input_el_name').value;
  let inputValueText = document.querySelector('.pop-up__input_el_text').value;
  if (inputValueName !== '' && inputValueText !== '') {
    document.querySelector('.profile__name').textContent = inputValueName;
    document.querySelector('.profile__text').textContent = inputValueText;
    closeProfileEdit()
    document.querySelector('.pop-up__input_el_name').value = '';
    document.querySelector('.pop-up__input_el_text').value = '';
  }
}

editSaveButton.addEventListener('click', saveProfileEdit);

