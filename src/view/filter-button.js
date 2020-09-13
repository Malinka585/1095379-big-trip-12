import {createElement} from "../utils.js";

const createFilterButtonTemplate = () => {
  return (
    `<button class="visually-hidden" type="submit">Accept filter</button>`
  );
};

export default class FilterButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilterButtonTemplate();
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
