export const createTripPointTemplate = (wayPoint, index) => {
  const {currentDate} = wayPoint;

  const DAY_GAP = 1;
  const dayNumber = index + DAY_GAP;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${dayNumber}</span>
        <time class="day__date" datetime="${currentDate}">${currentDate}</time>
      </div>

      <ul class="trip-events__list">

      </ul>
    </li>`
  );
};
