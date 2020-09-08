const createTripFiltersTemplate = (filter) => {
  const {name} = filter;

  return (
    `<div class="trip-filters__filter">
        <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}">
        <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
      </div>`
  );
};

export const createFormTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter) => createTripFiltersTemplate(filter)).join(``);

  return (
    `<form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}
    </form>`
  );
};
