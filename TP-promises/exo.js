const lengthMoreThanTwenty = (str) => {
  return new Promise((resolve, reject) => {
    if (str.length > 20) reject();
    else resolve(true);
  });
};

const moreThan = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a <= b) reject();
    else resolve(a - b);
  });
};

const isMajor = (date) => {
  return new Promise((resolve, reject) => {
    const dateNow = new Date(Date.now());
    const dateToCompare = new Date(date);
    const majorAge = 18 * 31557600000;

    if (dateNow - dateToCompare >= majorAge) resolve(true);
    else reject();
  });
};
