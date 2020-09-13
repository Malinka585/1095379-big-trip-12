import FormTripSortView from "./view/form-sort.js";
import RouteCostView from "./view/route-cost.js";
import TripMenuView from "./view/trip-menu.js";
import FormView from "./view/form.js";
import FilterButtonView from "./view/filter-button.js";
import FormEditView from "./view/form-edit.js";
import TripPointDaysView from "./view/trip-point-days.js";
import TripPointView from "./view/trip-point.js";
import TripEventsListView from "./view/trip-events-list.js";
import PointItemView from "./view/point-item.js";
import {generateWayPoint} from "./mock/trip.js";
import {generateFilter} from "./mock/filter.js";
import {render, RenderPosition} from "./utils.js";

const POINT_COUNT = 3;
const ITEM_COUNT = 20;

const wayPoint = new Array(ITEM_COUNT).fill().map(generateWayPoint);
const filters = generateFilter(wayPoint);

const renderPoint = (listElement, point) => {
  const pointComponent = new PointItemView(point);
  const editFormComponent = new FormEditView(point);

  const replacePointToForm = () => {
    listElement.replaceChild(editFormComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToPoint = () => {
    listElement.replaceChild(pointComponent.getElement(), editFormComponent.getElement());
  };

  pointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replacePointToForm();
  });

  editFormComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceFormToPoint();
  });

  render(listElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripFormSortElement = document.querySelector(`.trip-events`);
const tripMainControlsElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

const formFilter = new FormView(filters);
render(tripMainElement, new RouteCostView().getElement(), RenderPosition.AFTERBEGIN);
render(tripMainControlsElement, new TripMenuView().getElement(), RenderPosition.BEFOREEND);
render(tripMainControlsElement, formFilter.getElement(), RenderPosition.BEFOREEND);
render(formFilter.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);


const formTripSort = new FormTripSortView();
render(tripFormSortElement, formTripSort.getElement(), RenderPosition.BEFOREEND);
const tripPointDay = new TripPointDaysView();

render(tripFormSortElement, tripPointDay.getElement(), RenderPosition.BEFOREEND);

for (let i = 0; i < POINT_COUNT; i++) {
  const tripPoints = new TripPointView(wayPoint[i], i);
  render(tripPointDay.getElement(), tripPoints.getElement(), RenderPosition.BEFOREEND);
  const tripEventsList = new TripEventsListView();
  render(tripPoints.getElement(), tripEventsList.getElement(), RenderPosition.BEFOREEND);
  for (let y = 0; y < wayPoint[y].events.length; y++) {
    const eventsArray = wayPoint[y].events;
    renderPoint(tripEventsList.getElement(), eventsArray[y]);
  }
}
