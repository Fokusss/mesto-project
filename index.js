console.log(document);

let profileEdit = document.querySelector('.profile__edit');

function popUpOppen() {
  let popUp = document.querySelector('.pop-up');
  popUp.classList.add('pop-up_active');
}

profileEdit.addEventListener('click', popUpOppen);

