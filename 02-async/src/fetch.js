export const fetchDataCallback = (cb) => {
  setTimeout(() => {
    console.log("wait 3.5 sec.");
    cb('peanut butter');
  }, 3500);
};

export const fetchDataPromise = () => {
  return new Promise(resolve => {
    return setTimeout(() => {
      console.log("wait 3.5 sec.");
      resolve('peanut butter');
    }, 3500);
  });
}

export const fetchDataThrowError = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log("wait 3.5 sec.");
      reject('error reason');
    }, 3500);
  });
}