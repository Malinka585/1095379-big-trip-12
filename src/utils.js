export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArray = (array, count) => {
  const randomArray = [];

  for (let i = 0; i <= getRandomInteger(1, count); i++) {
    const randomIndex = getRandomInteger(0, array.length - 1);
    randomArray.push(array[randomIndex]);
  }

  return randomArray;
};

export const isEventExpired = (dueDate) => {
  const currentDate = new Date();
  return currentDate.getTime() > dueDate.getTime();
};

export const isEventComing = (dueDate) => {
  const currentDate = new Date();
  return currentDate.getTime() <= dueDate.getTime();
};
