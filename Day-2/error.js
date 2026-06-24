class ValidationError extends Error {
  constructor(message, statusCode, field) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = statusCode;
    this.field = field;
  }
}

function test() {
  try {
    throw new ValidationError("Invalid User", 404, "password");
  } catch (err) {
    console.log(err.name + err.message + err.statusCode + err.field);
  }
}
// test()

function parseUserInput(input) {
  try {
    if (typeof input !== "number") {
      throw new TypeError("error");
    }
    if (input > 100) {
      throw new RangeError("error");
    }
    if (input < 18) {
      throw new ValidationError("UnderAge");
    }
  } catch (err) {
    if (err instanceof TypeError) {
      console.log("TypeError: Not a Number");
    } else if (err instanceof RangeError) {
      console.log("RangeError: Not in Range");
    } else if (err instanceof ValidationError) {
      console.log("ValidationError: Under Age");
    }
  }
}

parseUserInput(111);

const logs = document.querySelector(".logs");
window.onerror = (a, b, c, d, e) => {
  logs.innerText =
  logs.innerText+
    `message: ${a}` +
    `\n` +
    `source: ${b}` +
    `\n` +
    `lineno: ${c}` +
    `\n` +
    `colno: ${d}` +
    `\n` +
    `error: ${e}`;
  return true;
};
function errorButton() {
  throw new Error("This is an Error");
}

function errorButton1() {
    Promise.reject("This is a rejection")

}
const logs1 = document.querySelector(".logs1");
window.addEventListener("unhandledrejection", (event) => {
    logs1.innerText =
    logs1.innerText+`\n`+`${event.reason}`
});
