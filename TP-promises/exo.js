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

async function getVaderBD() {
  try {
    const vader = await axios.get(
      "https://swapi.py4e.com/api/people?search=Darth Vader"
    );
    console.log(vader.data.results[0].birth_year);
  } catch (err) {
    console.error(err);
  }
}

async function getLukeInWookie() {
  try {
    const lukeInWookie = await axios.get(
      "https://swapi.py4e.com/api/people/1?format=wookiee"
    );
    console.log(lukeInWookie.data);
  } catch (err) {
    console.error(err);
  }
}

async function getPlanetsNumber() {
  try {
    const planets = await axios.get("https://swapi.py4e.com/api/planets");
    console.log(planets.data.count);
  } catch (err) {
    console.error(err);
  }
}

async function getR2D2Residents() {
  try {
    const r2 = await axios.get(
      "https://swapi.py4e.com/api/people/?search=r2-d2"
    );
    const r2Homeworld = await axios.get(r2.data.results[0].homeworld);
    const res = [];

    // r2Homeworld.data.residents.forEach((url) => {
    //   const resisdent = await axios.get(url);
    //   resisdent.then((data) => res.push(data));
    // });

    console.log(r2Homeworld.data.residents);
  } catch (err) {
    console.error(err);
  }
}

getVaderBD();
getStartships();
getLukeInWookie();
getPlanetsNumber();
getR2D2Residents();
