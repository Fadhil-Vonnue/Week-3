let user = ["heyy", "hell123"];
let user1 = ["heyy", "heloo"];
console.log(user);
function updateUser(users, id, changes) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (i === id) {
      users[i] = changes;
    }
  }
}
updateUser(user, 1, "heloo");
console.log(user);

function updateUser1(users, id, changes) {
  let count = 0;
  let temp = users.slice();
  console.log("hii");
  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    if (i === id) {
      temp[i] = changes;
    }
  }
  console.log(user1);
  console.log(temp);
  return temp;
}
console.log(updateUser1(user1, 1, "heloo123"));
console.log(user1);

const fs = require("node:fs");

function parseCSV(csv) {
  try {
    const data = fs.readFileSync(csv, "utf8");
    const dataline = data.split("\n");
    const csvcolumns=dataline[0].split(',')
    const datacom = [];
    for (let index=1 ; index<dataline.length;index++) {
      datacom.push(dataline[index].split(","));
    }
    
    const newcsv = [];
    for (let [ind, i] of datacom.entries()) {
      const obj = {};
      for (let index=0 ; index<datacom[0].length;index++) {
        obj[csvcolumns[index]] = i[index];
      }
      newcsv.push(obj);
    }
    return newcsv;
  } catch (err) {
    console.error(err);
  }
}
console.log("---------------------------")
const newcsv=parseCSV("/home/mohammad.fadhil/Desktop/Week-3/Day-3/newcsv.csv")
function validateRows(csv1) {
    const csv=structuredClone(csv1)
  for(let [index,el] of csv.entries()){
        if(el.age>=18)
        {
            el["valid"]=true;
        }
        else el["valid"]=false;
    }
    return csv
  }

function transformRows(csv1){
     const csv=structuredClone(csv1)
    for(let [index,el] of csv.entries()){
        if(typeof el.age!=="number"){
            el.age=Number(el.age)
        }
    }
    return csv
}

function filterInvalid(csv1){
     const csv=structuredClone(csv1)
    const updated = csv.filter(el => el.valid !== false);
    return updated
}

function formatOutput(csv1){
     const csv=structuredClone(csv1)
    for(let [index,el] of csv.entries()){
        delete el.valid
    }
    return csv
}



function fiveStepPipeline(csv1){
const parsedcsv=parseCSV(csv1)
const validatedcsv=validateRows(parsedcsv)
const transformedcsv=transformRows(validatedcsv)
const validcsv=filterInvalid(transformedcsv)
const finalcsv=formatOutput(validcsv)

return finalcsv
}
console.log(fiveStepPipeline("/home/mohammad.fadhil/Desktop/Week-3/Day-3/newcsv.csv"))

function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
     Object.freeze(obj);
     Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
   }
 return obj;
};