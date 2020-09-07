import {isEventExpired, isEventComing} from "../utils.js";

const tripToFilterMap = {
  everything: (points) => points.length,
  future: (points) => points.filter((point) => isEventComing(point.currentDate)).length,
  past: (points) => points.filter((point) => isEventExpired(point.currentDate)).length
};

export const generateFilter = (points) => {
  return Object.entries(tripToFilterMap).map(([filterName, countPoints]) => {
    return {
      name: filterName,
      count: countPoints(points),
    };
  });
};
