import {createElement} from "../utils.js";

export default class FilterButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return (
      `<button class="visually-hidden" type="submit">Accept filter</button>`
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
