class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(fn) {
    this.observers.push(fn);
  }
  notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
const render = (data) => {
  const main = document.querySelector("body");
  main.innerHTML = "";
  if(data[0]===undefined) return
  for (let d of data) {
    const el = document.createElement("div");
    el.classList.add("cart");
    el.textContent = `item: ${d.item}, quantity:${d.quantity}, price:${d.price}`;
    main.appendChild(el);
  }
};
const listener = new Subject();
listener.addObserver(render);
class Stack {
  stack = [];
  add(item) {
    this.stack.push(item);
  }
  remove() {
    this.stack.pop();
  }
  display() {
    for (let i of this.stack) {
      console.log(i);
    }
  }
}
class Cart {
  constructor(stack, ...items) {
    this.items = items.flat(1);
    stack.add(this.items);
    this.stack = stack;
    this.total = 0;
    listener.notifyObservers(this.items);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
  addItem(item) {
    return new Cart(this.stack, ...this.items, item);
  }
  removeItem(itemId) {
    const newcart = this.items.filter((i) => i.id !== itemId);
    return new Cart(this.stack, newcart);
  }
  updateQuantity(itemId, quant) {
    const cloneItems = structuredClone(this.items);
    for (let item of cloneItems) {
      if (item.id == itemId) {
        item["quantity"] = quant;
      }
    }
    return new Cart(this.stack, cloneItems);
  }
  applyCoupon(couponName) {
    let coupon = Number(couponName.slice(-2));
    if (isNaN(coupon)) {
      alert("");
    } else {
      let total = this.getTotal();
      return total - (total * coupon) / 100;
    }
  }
  getTotal() {
    let total = 0;
    for (let it of this.items) {
      total += it.quantity * it.price;
    }
    return total;
  }
  undo() {
    let stackarr = this.stack["stack"];
    console.log(stackarr)
    stackarr.pop();
    let previousState = stackarr.pop();
    return new Cart(this.stack, previousState);
  }
}
const newstack = new Stack();
console.log("---------------------");
let cart;
if (localStorage.getItem("cart") !== null) {
  cart = new Cart(newstack,JSON.parse(localStorage.getItem("cart")))
}
else cart= new Cart(newstack)