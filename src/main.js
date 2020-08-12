import {createRouteCostTemplate} from "./view/route-cost.js";
import {createTripMenuTemplate} from "./view/trip-menu.js";
import {createFormTemplate} from "./view/form.js";
import {createTripFiltersTemplate} from "./view/trip-filters.js";
import {createFilterButtonTemplate} from "./view/filter-button.js";
import {createFormTripSortTemplate} from "./view/form-sort.js";
import {createTripSortTemplate} from "./view/trip-sort.js";
import {createFormEditTemplate} from "./view/form-edit.js";
import {createTripPointDaysTemplate} from "./view/trip-point-days.js";
import {createTripPointTemplate} from "./view/trip-point.js";
import {createPointItemTemplate} from "./view/point-item.js";

const FILTER_COUNT = 3;
const POINT_COUNT = 3;
const ITEM_COUNT = 4;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainControlsElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, createRouteCostTemplate(), `afterbegin`);
render(tripMainControlsElement, createTripMenuTemplate(), `beforeend`);
render(tripMainControlsElement, createFormTemplate(), `beforeend`);

const tripFormElement = tripMainElement.querySelector(`.trip-filters`);

for (let i = 0; i < FILTER_COUNT; i++) {
  render(tripFormElement, createTripFiltersTemplate(), `beforeend`);
}

render(tripFormElement, createFilterButtonTemplate(), `beforeend`);

const tripFormSortElement = document.querySelector(`.trip-events`);

render(tripFormSortElement, createFormTripSortTemplate(), `beforeend`);

const tripEventsTripSortElement = tripFormSortElement.querySelector(`.trip-events__trip-sort`);

render(tripEventsTripSortElement, createTripSortTemplate(), `beforeend`);
render(tripFormSortElement, createTripPointDaysTemplate(), `beforeend`);

const tripDaysElement = tripFormSortElement.querySelector(`.trip-days`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripDaysElement, createTripPointTemplate(), `beforeend`);
}

const tripEventsListElements = tripDaysElement.querySelectorAll(`.trip-events__list`);
const tripEventsListElement = tripDaysElement.querySelector(`.trip-events__list`);

for (let j = 0; j < tripEventsListElements.length; j++) {
  const listElements = tripEventsListElements[j];
  for (let y = 0; y < ITEM_COUNT; y++) {
    render(listElements, createPointItemTemplate(), `beforeend`);
  }
}

const tripEventsItemElement = tripEventsListElement.querySelector(`.trip-events__item`);

tripEventsItemElement.querySelector(`.event`).remove();
render(tripEventsItemElement, createFormEditTemplate(), `beforeend`);
