const createCounter = function () {
  let counter = 0;
  return {
    increment() {
      counter += 1;
    },
    decrement() {
      counter -= 1;
    },
    getCount() {
      return counter;
    },
    reset() {
      counter = 0;
    },
  };
};

const counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());

const memoize = function (fn) {
  const cache = new Map();
  return (...args) => {
    let strkey = args.join(",");
    console.log(strkey);
    if (!cache.get(strkey)) {
      cache.set(strkey, fn.apply(this, args));
    }
    return cache.get(strkey);
  };
};

const fibonacci = function (num) {
  if (num == 1) {
    return 1;
  }
  if (num == 0) {
    return 0;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacciMemoize = memoize(fibonacci);

// console.log(fibonacciMemoize(40));
// console.log(fibonacciMemoize(40));

const once = function (fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

const oncefibonacci = once(fibonacci);
console.log(oncefibonacci(10));
console.log(oncefibonacci(10));

const createRateLimiter = function (fn,maxCalls, windowMs) {
  let calls = [];
  return (...args)=> {
    const newcalls=[]
    for (const call of calls){
        if(Date.now() - call < windowMs){
            newcalls.push(call)
        }
    }
    if (newcalls.length >= maxCalls) {
      throw new Error(
        "Max Calls reached"
      );
    }
    calls.push(Date.now());
    return fn.apply(this,args);
  };
};

const maxfibonacci = createRateLimiter(fibonacci, 3,5000);
console.log(maxfibonacci(4))
console.log(maxfibonacci(4))
console.log(maxfibonacci(4))
setTimeout(() => {
console.log(maxfibonacci(4))
}, 5000);