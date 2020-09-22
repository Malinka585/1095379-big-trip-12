import FormTripSortView from "./view/form-sort.js";
import RouteCostView from "./view/route-cost.js";
import TripMenuView from "./view/trip-menu.js";
import FormView from "./view/form.js";
import FilterButtonView from "./view/filter-button.js";
import FormEditView from "./view/form-edit.js";
import TripPointDaysView from "./view/trip-point-days.js";
import TripPointView from "./view/trip-point.js";
import NoPointView from "./view/no-point.js";
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

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  pointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replacePointToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  editFormComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceFormToPoint();
  });

  editFormComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(listElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripFormSortElement = document.querySelector(`.trip-events`);
const tripMainControlsElement = tripMainElement.querySelector(`.trip-main__trip-controls`);

render(tripMainElement, new RouteCostView().getElement(), RenderPosition.AFTERBEGIN);

const formFilter = new FormView(filters);
render(tripMainControlsElement, new TripMenuView().getElement(), RenderPosition.BEFOREEND);
render(tripMainControlsElement, formFilter.getElement(), RenderPosition.BEFOREEND);
render(formFilter.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);

const renderBoard = (boardContainer, boardWayPoint) => {

  const formTripSort = new FormTripSortView();
  render(boardContainer, formTripSort.getElement(), RenderPosition.BEFOREEND);

  const tripPointDay = new TripPointDaysView();

  render(boardContainer, tripPointDay.getElement(), RenderPosition.BEFOREEND);
  if (boardWayPoint.length === 0) {
    render(boardContainer, new NoPointView().getElement(), RenderPosition.BEFOREEND);
  } else {
    for (let i = 0; i < POINT_COUNT; i++) {
      const tripPoints = new TripPointView(boardWayPoint[i], i);
      render(tripPointDay.getElement(), tripPoints.getElement(), RenderPosition.BEFOREEND);
      const tripEventsList = new TripEventsListView();
      render(tripPoints.getElement(), tripEventsList.getElement(), RenderPosition.BEFOREEND);
      for (const event of boardWayPoint[i].events) {
        renderPoint(tripEventsList.getElement(), event);
      }
    }
  }
};
renderBoard(tripFormSortElement, wayPoint);
