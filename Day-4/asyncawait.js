let userid = 10;
let orderID = 12;

async function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userid);
    }, 1000);
  });
}
async function getOrders() {
  const user = await getUser();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === undefined) reject(new Error("no user"));
      else {
        resolve(orderID);
      }
    }, 2000);
  });
}

async function getOrderDetail() {
  const res = getOrders();
  res.then(
    (result) => console.log(result),
    (error) => console.log("THERE IS AN ERROR"),
  );
}
getOrderDetail();

async function loadDashboard() {
  try {
    console.time("Parallel Execution");
    const res = await Promise.all([fetchUser(), fetchPosts(), todos()]);
    console.timeEnd("Parallel Execution");

    return res;
  } catch (err) {
    return "THIS IS AN ERROR" + err;
  }
}
async function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userid === undefined) reject(new Error("no user"));
      else {
        resolve(userid);
      }
    }, 1000);
  });
}
async function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { content: "hello" },
        { content: "hi" },
        { content: "hola" },
        { content: "ciao" },
      ];
      resolve(posts);
    }, 2000);
  });
}
async function todos() {
  const todo = [
    { todo: "learn css" },
    { todo: "learn html" },
    { todo: "learn react" },
    { todo: "learn js" },
  ];
  return todo;
}
loadDashboard().then((resolve) => console.log(resolve));

// sequential execution
async function seq() {
  console.time("Sequential Execution");
  const us = await fetchUser();
  const po = await fetchPosts();
  const to = await todos();
  console.timeEnd("Sequential Execution");
}
seq();
// parallel execution

async function greet(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("GOOD MORNING " + username);
    },3000);
  });
}
const allusers = ["JOHN", "MIKE", "TAYLOR"];
allusers.forEach(async (element) => {
  const gree = await greet(element);
  console.log(gree);
});
console.log("GREETED ALL")

async function forLoopAwait(params) {
    for(let use of allusers){
        const gree = await greet(use);
      console.log(gree," SECOND RUN");
    }   
    console.log("GREETED ALL AGAIN")
}
forLoopAwait()

async function greetAll() {
    const newProm= await Promise.all(allusers.map(async (name)=>{
        const greet2=await greet(name)
        console.log(greet2,"THIRD RUN")

        return greet2

    }))
    console.log(newProm)
    console.log("GREETING 3 AGAIN")
}

greetAll()