import { profileName, profileText, avatar, configApi } from "./data";


function changeTextProfile(res) {
  profileName.textContent = res.name;
  profileText.textContent = res.about;
}

function changeAvatar(res) {
  avatar.setAttribute('src', res.avatar)
}

function changeId(res) {
  configApi.id = res._id;
}


export { changeTextProfile, changeAvatar, changeId}
