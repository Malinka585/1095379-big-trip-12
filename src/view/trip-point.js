import {createElement} from "../utils.js";

const createTripPointTemplate = (wayPoint, index) => {
  const {currentDate} = wayPoint;

  const DAY_GAP = 1;
  const dayNumber = index + DAY_GAP;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber}</span>
        <time class="day__date" datetime="${currentDate}">${currentDate}</time>
      </div>
    </li>`
  );
};

export default class TripPoint {
  constructor(wayPoints, index) {
    this._element = null;
    this._index = index;
    this._wayPoints = wayPoints;
  }

  getTemplate() {
    return createTripPointTemplate(this._wayPoints, this._index);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
