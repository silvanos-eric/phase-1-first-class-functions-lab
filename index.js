// Code your solution in this file!
const returnFirstTwoDrivers = function (scuberDriversArray) {
  return [scuberDriversArray[0], scuberDriversArray[1]];
};

const returnLastTwoDrivers = function (scuberDriversArray) {
  return [
    scuberDriversArray[scuberDriversArray.length - 2],
    scuberDriversArray[scuberDriversArray.length - 1],
  ];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => multiplier * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDriversArray, cb) {
  return cb(scuberDriversArray);
}
