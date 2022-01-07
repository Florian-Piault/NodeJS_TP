function lengthMoreThanTwenty(str) {
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

    if ((dateNow - dateToCompare) / majorAge) resolve(true);
    else reject(`they're a minor`);
  });
}

lengthMoreThanTwenty("a very long string of char to test catch")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

moreThan(1, 2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

isMajor("23/04/2000")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function execute() {
  try {
    await lengthMoreThanTwenty("not much");
    await moreThan(3, 2);
    await isMajor("01/01/2018");
  } catch (e) {
    console.error(e);
  }
}

execute();
