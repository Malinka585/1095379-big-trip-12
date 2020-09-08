import {getRandomInteger} from "../utils.js";

const OFFER_NAMES = [`Order Uber`, `Add luggage`, `Switch to comfort`, `Rent a car`, `Add breakfast`, `Book tickets`, `Lunch in city`];

export const generateOffers = () => {
  const generateOffer = () => {
    return {
      offerName: OFFER_NAMES[getRandomInteger(0, OFFER_NAMES.length - 1)],
      offerPrice: getRandomInteger(5, 300)
    };
  };

  return new Array(getRandomInteger(1, 5)).fill().map(generateOffer);
};
