import { profileName, profileText, avatar } from "./data";


function changeTextProfile(res) {
  profileName.textContent = res.name;
  profileText.textContent = res.about;
}

function changeAvatar(res) {
  avatar.setAttribute('src', res.avatar)
}


export { changeTextProfile, changeAvatar}
