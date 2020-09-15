import {createElement} from "../utils.js";

export default class TripPoint {
  constructor(wayPoints, index) {
    this._element = null;
    this._index = index;
    this._wayPoints = wayPoints;
    this._currentDate = this._wayPoints.currentDate;
  }

  getTemplate() {
    const DAY_GAP = 1;
    const dayNumber = this._index + DAY_GAP;

    return (
      `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber}</span>
        <time class="day__date" datetime="${this._currentDate}">${this._currentDate}</time>
      </div>
    </li>`
    );
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
