export const createTripPointTemplate = (wayPoint, index) => {
  const {currentDate} = wayPoint;

  const DAY_GAP = 1;
  const dayNumber = index + DAY_GAP;

  const dateByDataTime = (date) => {
    return `${date.toLocaleString(`en-US`, {year: `numeric`})}-${date.toLocaleString(`en-US`, {month: `2-digit`})}-${date.toLocaleString(`en-US`, {day: `2-digit`})}`;
  };

  const dayDate = (Date) => {
    return Date.toLocaleString(`en-US`, {month: `short`, day: `numeric`});
  };


  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber}</span>
        <time class="day__date" datetime="${dateByDataTime(currentDate)}">${dayDate(currentDate)}</time>
      </div>

      <ul class="trip-events__list">

      </ul>
    </li>`
  );
};
