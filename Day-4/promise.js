let x = 9;
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (x >= 10) {
      resolve("GREATER THAN 10");
    } else {
      reject(new Error("LESS THAN 10"));
    }
  }, 100);
});
promise1.then(
  (result) => console.log(result),
  (reject) => console.log("rejected"),
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error on Promise 2");
  }, 100);
}).catch((error) => console.log(error));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error on promise 3");
  }, 100);
}).then(null, (error) => {
  console.log(error);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error on promise 4");
  }, 100);
})
  .finally(() => console.log("finally of promise 4"))
  .catch((error) => console.log(error));

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error on promise 5");
  }, 100);
})
  .then((result) => console.log("resolved promise 5"))
  .catch((error) => console.log(error));

let userid = 10;
let orderID = 12;
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(userid);
  }, 3000);
});
const getOrders = (userID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userID === undefined) reject(new Error("no user"));
      else {
        resolve(orderID);
      }
    }, 3000);
  });
};
const getOrderDetail = (orderid) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orderid);
    }, 3000);
  });
};
// getUser.then((resolve) =>
//   getOrders(resolve)
//     .then((resolveid) => getOrderDetail(resolveid))
//     .then((result) => console.log("this is order details of", result))
//     .catch((error) => console.log(error)),
// );
const promise10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fooo");
  }, 300);
});
const promises = [promise1, getUser, promise10];
Promise.all(promises)
  .then((values) => {
    console.log(values);
  })
  .catch((error) => console.log("error when promise all"));
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

Promise.race([getUser,promise10]).then((value) => {
  console.log(value, "won race");
});