orders = [
  {
    orderId: 1,
    items: [1, 2, 3, 4],
  },
  {
    orderId: 1,
    items: [5, 6, 7, 8],
  },
];
let parentId = 1;
let Items = orders.flatMap((obj) => {
  if (obj.orderId === parentId) return obj.items;
});
console.log(Items);
arr = [
  "success",
  "Validationerror",
  "success",
  "success",
  "Validationerror",
  "success",
  "success",
];
const test = arr.findLast((el) => {
  return el.includes("error");
});
const test1 = arr.findLastIndex((el) => {
  return el.includes("error");
});
console.log(test);
console.log(test1);

function chunk(arr, size) {
  const chunkArray = [];
  let i;
  for (i = 0; i < arr.length - 1; i += size) {
    chunkArray.push(arr.slice(i, i + size));
  }
  chunkArray.push(arr.slice(i - size + 2));
  return chunkArray;
}

const hey = chunk(arr, 2);
console.log(hey);
console.log("--------------------");

const zip = (...arr) => {
  let array = Array.from(
    {length: Math.max(...arr.map((a) => a.length)) },
    (_, i) => arr.map((a) => a[i]),
  );
  array = array.flat(1);
  console.log(array);
};

zip(["1",2,3,4,5],[11,12,21,45,11])

newarrr=[{name:"john",type:"boy"},{name:"doe",type:"boy"},{name:"rose",type:"girl"},{name:"john",type:"boy"},]
function groupBy(arr, keyFn) {
  return arr.reduce((result, item) => {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
}
console.log(groupBy(newarrr,(type)=>type.type))


function monthDays(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
const monthCalendar = Array.from({ length: 12 }, (_, i) => {
  let month = new Date(0, i).toLocaleDateString("en", { month: "long" });
  let Alldays = monthDays(0, i);
  let days = Array.from({ length: Alldays }, (_, i) => i + 1);
  let obj = {};
  obj[month] = days;
  return obj;
});
console.log(monthCalendar);