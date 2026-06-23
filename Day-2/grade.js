function gradeToLetter(grade) {
  if (grade >= 90) {
    return "S";
  } else if (grade >= 80) {
    return "A";
  } else if (grade >= 70) {
    return "B";
  } else if (grade >= 60) {
    return "C";
  } else if (grade >= 50) {
    return "D";
  } else {
    return "F";
  }
}
function gradeToLetterSwitch(grade) {
  switch (grade) {
    case grade >= 90:
      return "S";
    case grade >= 80:
      return "A";
    case grade >= 70:
      return "B";
    case grade >= 60:
      return "C";
    case grade >= 50:
      return "D";
    default:
      return "F";
  }
}
function gradeToLetterTernary(grade) {
  return grade >= 90
    ? "S"
    : grade >= 80
      ? "A"
      : grade >= 70
        ? "B"
        : grade >= 60
          ? "C"
          : grade >= 50
            ? "D"
            : "F";
}
let obj1 = {};
for (let i = 0; i < 50; i++) {
  obj1[i] = "F";
}
for (let i = 50; i < 60; i++) {
  obj1[i] = "D";
}
for (let i = 60; i < 70; i++) {
  obj1[i] = "C";
}
for (let i = 70; i < 80; i++) {
  obj1[i] = "B";
}
for (let i = 80; i < 90; i++) {
  obj1[i] = "A";
}
for (let i = 90; i <= 100; i++) {
  obj1[i] = "S";
}
function gradeToLetterLookup(grade) {
  return obj1[grade];
}
console.time("if-loop");
for (let i = 1; i < 1_000_000; i++) {
  gradeToLetter(i);
}
console.timeEnd("if-loop");
console.time("switch");
for (let i = 1; i < 1_000_000; i++) {
  gradeToLetterSwitch(i);
}
console.timeEnd("switch");
console.time("ternary");
for (let i = 1; i < 1_000_000; i++) {
  gradeToLetterTernary(i);
}
console.timeEnd("ternary");
console.time("lookup");
for (let i = 1; i < 1_000_000; i++) {
  gradeToLetterLookup(i);
}
console.timeEnd("lookup");

const maps = new Map();
for (let i = 1; i <= 20; i++) {
  maps.set(String(i), i);
}
function processQueue(items) {
  let keys = items.keys();
  let i = 0;
  let key = keys.next();
  while (items.size !== 0) {
    i++;
    items.delete(key.value);
    key = keys.next();
    console.log("heheheh" + i);
  }
  console.log(items);
}
function processQueue1(items) {
  let keys = items.keys();
  let i = 0;
  let key = keys.next();
  do {
    i++;
    console.log("heheh", i);
    items.delete(key.value);
    key = keys.next();
  } while (items.size !== 0);
  console.log(items);
}
function processQueue2(items) {
  for (let [key, value] of items) {
    console.log("this is key: " + key + "\n" + "this is value " + value);
  }
}
// processQueue2(maps)
const db = {
  fadhil: {
    email: "fadhil@786",
    role: "admin",
  },
};
function validateUser(user) {
  if (
    db[user.name] &&
    user.email == db[user.name].email &&
    user.email.includes("@") &&
    user.role == "admin"
  ) {
    console.log("Valid User");
  } else {
    console.log("Invalid user");
  }
}
let userlog = {
  name: "fadhil",
  email: "fadhil@786",
  role: "admin",
};
validateUser(userlog);

function validateUser1(user){
    if (db[user.name]) {
      if (user.email == db[user.name].email) {
        if (user.email.includes("@")) {
          if (user.role == "admin") {
            return "Valid User"
          } else {
            return "NOT AN ADMIN"
          }
        } else {
          return "INVALID EMAIL FORMAT"
        }
      } else {
        return "INVALID EMAIL"
      }
    } else {
      return "USER DOESNT EXIST"
    }
}
function validateUser2(user){
    if(!db[user.name]){
        return "USER DOESNT EXIST"
    }
    if(!user.email == db[user.name].email){
        return "INVALID EMAIL"
    }
    if(!user.email.includes("@")){
        return "INVALID EMAIL FORMAT"
    }
    if(!user.role == "admin"){
        return "NOT AN ADMIN"
    }
    return "Valid User"
}

console.log(validateUser1(userlog));
console.log(validateUser2(userlog));