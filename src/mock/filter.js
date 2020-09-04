const tripToFilterMap = {
  everything: (points) => points.length,
  future: (points) => points.filter((point) => point.eventStartDate).length,
  past: (points) => points.filter((point) => point.eventEndDate).length
};

export const generateFilter = (points) => {
  return Object.entries(tripToFilterMap).map(([filterName, countPoints]) => {
    return {
      name: filterName,
      count: countPoints(points),
    };
  });
};
