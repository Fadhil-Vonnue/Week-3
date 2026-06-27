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
const render=(data)=>{
     
       const main=document.querySelector("body")
       main.innerHTML=""
    for(let d of data){
        const el=document.createElement("div")
        el.classList.add("cart")
        el.textContent=`item: ${d.item}, quantity:${d.quantity}, price:${d.price}`
        main.appendChild(el)
    }
}
const listener=new Subject()
listener.addObserver(render)
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
    listener.notifyObservers(this.items)
    sessionStorage.setItem("cart",JSON.stringify(this.items))
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
}
const newstack = new Stack();
console.log("---------------------");
if(sessionStorage.getItem("cart")!==null){
  render(JSON.parse(sessionStorage.getItem("cart")))
}
const cart = new Cart(
  newstack,
  { id: 1, item: "banana", quantity: 2, price: 50 },
  { id: 2, item: "apple", quantity: 3, price: 100 },
);
const new1 = cart.addItem({ id: 3, item: "mango", quantity: 5, price: 80 });
const new2 = new1.removeItem(2);
console.log("---------------------------------------------------");
// console.log(new2.updateQuantity(1, 9));
const new3 = new2.updateQuantity(1, 9);
console.log("---------------------------------------------------");
// newstack.display();
console.log(new3.getTotal());
console.log(new3.applyCoupon("COUPON10"));


