const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DONE"), 300);
});

promise1.then((resolve) => console.log(resolve));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DONE2"), 300);
  resolve("DONE22");
});

promise2.then((resolve) => console.log("CONSOLE", resolve));

const promise3 = new Promise((resolve, reject) => {
  resolve("DONE3");
  setTimeout(() => resolve("DONE33"), 300);
});

promise3.then((resolve) => console.log("CONSOLE", resolve));

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DONE4"), 300);
  queueMicrotask(() => {
    console.log("executing microtask4");
  });
});
promise4.then((resolve) => console.log(resolve));

const promise5 = new Promise((resolve, reject) => {
  resolve("DONE 5");
});

promise5.then((resolve) => {
  queueMicrotask(() => {
    console.log("executing microtask5");
  });
  console.log(resolve);
});

const promise6 = new Promise((resolve, reject) => {
  resolve("DONE 6");
  queueMicrotask(() => {
    console.log("executing microtask6");
  });
});

promise6.then((resolve) => console.log(resolve));

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DONE 7"), 300);
});

promise7.then((resolve) => {
  queueMicrotask(() => {
    console.log("executing microtask7");
  });
  console.log(resolve);
});

const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("DONE8"), 300);
  queueMicrotask(() => {
    console.log("executing microtask8");
  });
  console.log("consoling for 8");
}).then((resolve) => console.log(resolve));

queueMicrotask(() => {
  console.log("executing microtask 9");
});

const promise9 = new Promise((resolve, reject) => {
  resolve("DONE 9");
}).then((result) => console.log(result));

const promise10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    queueMicrotask(() => {
      console.log("executing microtask10");
    });
    resolve("DONE 10");
    console.log("consoling 10");
  }, 300);
}).then((resolve) => {
  console.log(resolve);
});
