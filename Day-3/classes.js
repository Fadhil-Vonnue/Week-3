class Shape{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    describe() {
        console.log("This is a SHape")   
    }
    static compare(a,b){
        if(a.area()>=b.area())

            return a
        else

            return b
    }
}
class Circle extends Shape{
    constructor(name,color,radius){
        super(name,color)
        this.radius=radius
    }
    describe(){

        console.log("This is a Circle")   
    }
    area(){

        return Math.PI*this.radius*this.radius
    }
    perimeter(){

        return 2*Math.PI*this.radius
    } 
}
class Rectangle extends Shape{
    constructor(name,color,len,breadth){
        super(name,color)
        this.len=len
        this.breadth=breadth
    }
    describe(){

        console.log("This is a Rectangle")   
    }
    area(){

        return 2*this.len*this.breadth
    }
    perimeter(){

        return 2*(this.len+this.breadth)
    } 
}
class Triangle extends Shape{
    constructor(name,color,base, height){
        super(name,color)
        this.base=base
        this.height=height
    }
    describe(){
        console.log("This is a Triangle")   
    }
    area(){

        return 0.5*this.base*this.height
    }
}
const shape1= new Circle("circle1","red",10)
const shape2= new Rectangle("rectangle1","blue",10,20)
const shape3= new Triangle("Triangle1","blue",10,20)
// circle1.describe()
console.log(shape1.area())
console.log(shape2.area())
console.log(shape1.area())

class ShapeCollection{
    constructor(){
        this.collection={}
        this.id=1
    }
    add(shape){
        this.collection[this.id]=shape
        this.id++
    }
    print(){
        console.log(this.collection)
        for(let i in this.collection){
            console.log(this.collection[i])
        }
    }
    removeById(id){
        delete this.collection[id]
    }
    getByType(type){
        let temp=[]
        for(let i in this.collection){
            if((this.collection[i].constructor.name)==type){
                temp.push(this.collection[i])
            }
        }
        
        return temp
    }
    sortByArea(){
        let arr=Object.values(this.collection)
        arr.sort((a, b) => a.area() - b.area());

        return arr
    }
    getTotalArea(){
        let tot=0
        for(let i in this.collection){
            tot+=this.collection[i].area()
        }

        return tot

    }

}
const coll=new ShapeCollection()

coll.add(shape1)
coll.add(shape2)
coll.add(shape3)
coll.print()
coll.removeById(1)
coll.print()
console.log(coll.getTotalArea())
console.log(Object.getPrototypeOf(shape1) === Circle.prototype)
console.log(shape1 instanceof Circle)
console.log(shape1.constructor.name)