var x = 20;
function defaultBinding() {
  console.log(this);
}
defaultBinding();

function implicitBinding() {
  var books = {
    name: "implicit",
    print: function () {
      console.log(this.name);
    },
  };
  books.print();
}
implicitBinding();

function explicitBinding() {
  let print = function (age) {
    console.log(this.firstName + " " + this.lastName + " " + "age" + age);
  };
  const name = {
    firstName: "John",
    lastName: "Doe",
  };
  print.call(name, 18);
}

explicitBinding();
function test(age, name) {
  this.age = age;
  this.name = name;
}
const BookProduct = test.bind(null, "Books");
const test1 = new BookProduct("JavaScript Guide");
console.log(test1.age);
console.log(test1.name);

//this-loss
class newTest {
    x=10
  showTest() {
    console.log(this);
  }
}

const loss =new newTest();
const newloss= loss.showTest
newloss();

//this-loss fix with bind
class newTest1 {
    x=10
  showTest1() {
    console.log(this.x);
  }
}

const loss1 =new newTest1();
const newloss1= loss1.showTest1.bind(loss1)
loss1.showTest1()
newloss1();

//this-loss fix with arrow inside constructor
class newTest2 {
    x=10
    constructor(){
        this.showTest2= ()=>{
            console.log(this.x);
        }
    }

}

const loss2 =new newTest2();
const newloss2= loss2.showTest2
newloss2();

//this-loss fix with class fields
class newTest3 {
    x=20
    showTest3= ()=>{
            console.log(this.x);
    }
}

const loss3 =new newTest3();
const newloss3= loss3.showTest3
newloss3();

//BindAll function
function bindAll(obj){
    for(let ob of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))){
        if(typeof obj[ob] == "function"){
           obj[ob]=obj[ob].bind(obj)
        }
    }
}

bindAll(loss1)
const newloss111= loss1.showTest1
newloss111()


// arrowclass fields fix in setTimeout
class testt {
  x = 0;
  newt(){
    setTimeout(()=> {
      console.log(this.x); 
    }, 1000);
  }
}
const test12 = new testt();
test12.newt()