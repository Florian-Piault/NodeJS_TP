const axios = require("axios");

async function lengthMoreThanTwenty(str) {
  return new Promise((resolve, reject) => {
    if (str.length > 20) reject(`"${str}" has less than 20 characters`);
    else resolve(true);
  });
}

function moreThan(a, b) {
  return new Promise((resolve, reject) => {
    if (a <= b) reject(`${a} is less than ${b} (or equal)`);
    else resolve(a - b);
  });
}

function isMajor(date) {
  return new Promise((resolve, reject) => {
    const dateNow = Date.now();
    const dateToCompare = new Date(date);
    const majorAge = 18 * 31557600000;

    if (dateNow - dateToCompare >= majorAge) resolve(true);
    else reject(`they're a minor`);
  });
}

lengthMoreThanTwenty("a very long string of char to test catch")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

moreThan(1, 2)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

isMajor("23/04/2000")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function execute() {
  try {
    const a = await lengthMoreThanTwenty("not much");
    const b = await moreThan(3, 2);
    const c = await isMajor("01/01/2018");
    console.log(a, b, c);
  } catch (e) {
    console.error(e);
  }
}

execute();

async function useLukeSkywalker() {
  try {
    const luke = await axios.get("https://swapi.dev/api/" + "people/1/");
    lengthMoreThanTwenty(luke.data.name).then((data) => console.log(data));
    moreThan(luke.data.mass, luke.data.height).then((data) =>
      console.log(data)
    );
  } catch (err) {
    console.error(err);
  }
}

useLukeSkywalker();
