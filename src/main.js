import {createRouteCostTemplate} from "./view/route-cost.js";
import {createTripMenuTemplate} from "./view/trip-menu.js";
import {createFormTemplate} from "./view/form.js";
import {createFilterButtonTemplate} from "./view/filter-button.js";
import {createFormTripSortTemplate} from "./view/form-sort.js";
import {createTripSortTemplate} from "./view/trip-sort.js";
import {createFormEditTemplate} from "./view/form-edit.js";
import {createTripPointDaysTemplate} from "./view/trip-point-days.js";
import {createTripPointTemplate} from "./view/trip-point.js";
import {createPointItemTemplate} from "./view/point-item.js";
import {generateWayPoint} from "./mock/trip.js";
import {generateFilter} from "./mock/filter.js";

const POINT_COUNT = 3;
const ITEM_COUNT = 20;

const wayPoint = new Array(ITEM_COUNT).fill().map(generateWayPoint);
const filters = generateFilter(wayPoint);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripMainControlsElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, createRouteCostTemplate(), `afterbegin`);
render(tripMainControlsElement, createTripMenuTemplate(), `beforeend`);
render(tripMainControlsElement, createFormTemplate(filters), `beforeend`);

const tripFormElement = tripMainElement.querySelector(`.trip-filters`);

render(tripFormElement, createFilterButtonTemplate(), `beforeend`);

const tripFormSortElement = document.querySelector(`.trip-events`);

render(tripFormSortElement, createFormTripSortTemplate(), `beforeend`);

const tripEventsTripSortElement = tripFormSortElement.querySelector(`.trip-events__trip-sort`);

render(tripEventsTripSortElement, createTripSortTemplate(), `beforeend`);
render(tripFormSortElement, createTripPointDaysTemplate(), `beforeend`);

const tripDaysElement = tripFormSortElement.querySelector(`.trip-days`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripDaysElement, createTripPointTemplate(wayPoint[i], i), `beforeend`);
}

const tripEventsListElements = tripDaysElement.querySelectorAll(`.trip-events__list`);
const tripEventsListElement = tripDaysElement.querySelector(`.trip-events__list`);

for (let j = 0; j < tripEventsListElements.length; j++) {
  const listElements = tripEventsListElements[j];
  for (let y = 0; y < wayPoint[j].events.length; y++) {
    const eventsArray = wayPoint[j].events;
    render(listElements, createPointItemTemplate(eventsArray[y]), `beforeend`);
  }
}

const tripEventsItemElement = tripEventsListElement.querySelector(`.trip-events__item`);

tripEventsItemElement.querySelector(`.event`).remove();
render(tripEventsItemElement, createFormEditTemplate(wayPoint[0].events[0]), `beforeend`);


