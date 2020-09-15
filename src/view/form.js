import {createElement} from "../utils.js";

const createTripFiltersTemplate = (filter) => {
  const {name} = filter;

  return (
    `<div class="trip-filters__filter">
        <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}">
        <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
      </div>`
  );
};

export default class Form {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    const filterItemsTemplate = this._filters.map((filter) => createTripFiltersTemplate(filter)).join(``);

    return (
      `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}
    </form>`
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
