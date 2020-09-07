import {getRandomInteger, getRandomArray} from "../utils.js";
import {generateOffers} from "./offers.js";

const MAX_HOURS_GAP = 3;

const generateTypePoint = () => {
  const typePoint = [
    `Taxi`,
    `Bus`,
    `Train`,
    `Ship`,
    `Transport`,
    `Drive`,
    `Flight`,
    `Check-in`,
    `Sightseeng`,
    `Restaurant`
  ];

  const randomIndex = getRandomInteger(0, typePoint.length - 1);
  return typePoint[randomIndex];
};

const generateDestination = () => {
  const destination = [
    `Geneva`,
    `Amsterdam`,
    `Chamonix`
  ];

  const randomIndex = getRandomInteger(0, destination.length - 1);
  return destination[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  return getRandomArray(descriptions, 5);
};

const photo = `http://picsum.photos/248/152?r=${Math.random()}`;

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateStartTime = (date) => {
  const hoursGap = getRandomInteger(-MAX_HOURS_GAP, MAX_HOURS_GAP);
  const currentDate = date;

  currentDate.setHours(currentDate.getHours() + hoursGap);

  return new Date(currentDate);
};

const generateEndTime = (startTime) => {
  return new Date(startTime.getTime() + getRandomInteger(1, MAX_HOURS_GAP) * 60 * 60 * 1000);
};

const generateEvent = (tripDate) => {
  const startEvent = generateStartTime(tripDate);
  const endEvent = generateEndTime(startEvent);
  const differenceDate = endEvent - startEvent;

  return {
    typePoint: generateTypePoint(),
    destination: generateDestination(),
    offers: generateOffers(),
    description: generateDescription(),
    photos: photo,
    cost: getRandomInteger(20, 250),
    eventStartDate: startEvent,
    eventEndDate: endEvent,
    eventDuratioun: differenceDate
  };
};

export const generateWayPoint = () => {
  const tripDate = generateDate();
  const events = [];

  for (let i = 0; i < 5; i++) {
    events.push(generateEvent(tripDate));
  }

  return {
    currentDate: tripDate,
    events
  };
};
