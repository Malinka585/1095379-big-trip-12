import {createElement} from "../utils.js";

const humanizeDate = (date) => {
  return date.toLocaleString(`en-US`, {hour12: false, hour: `numeric`, minute: `numeric`});
};

const createOfferTemplate = (offer) => {
  const {offerName, offerPrice} = offer;
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${offerName}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offerPrice}</span>
     </li>`
  );
};

const createSelectedOffersTemplate = (tripOffers) => {
  const createdOffer = tripOffers.map((offer) => createOfferTemplate(offer)).join(``);
  return `<ul class="event__selected-offers">
            ${createdOffer}
          </ul>`;
};

export default class PointItem {
  constructor(points) {
    this._points = points;
    this._typePoint = this._points.typePoint;
    this._destination = this._points.destination;
    this._eventStartDate = this._points.eventStartDate;
    this._eventEndDate = this._points.eventEndDate;
    this._cost = this._points.cost;
    this._eventDuratioun = this._points.eventDuratioun;
    this._offers = this._points.offers;
    this._element = null;
  }

  getTemplate() {
    return (
      `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${this._typePoint} to ${this._destination}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${humanizeDate(this._eventStartDate)}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${humanizeDate(this._eventEndDate)}</time>
          </p>
          <p class="event__duration">${this._eventDuratioun}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${this._cost}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        ${createSelectedOffersTemplate(this._offers)}

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
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
