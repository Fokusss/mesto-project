import { addCard } from './card.js'

function addCards(places) {
  places.forEach((item) => {
    addCard(item.name, item.link, item._id, item.likes);
  });
}

export {addCards}
