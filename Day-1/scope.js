if(true){
    var a="hello"
}
console.log(a)
if(true){
    const b="hello"
}
console.log(b)
if(true){
    let b1="hello"
}
console.log(b1)


//-------------------------------------------------------------------//

var f=10
var f=20
console.log(f)

let g=20
let g=30
console.log(g)

const h=20
const h=30
console.log(h)

//-------------------------------------------------------------------//

const i=10
i=i+10
console.log(i)

let j=10
j=j+10
console.log(j)

var k=10
k=k+10
console.log(k)
// ---------------------------------------------------------------------//

for (let l = 0; l < 3; l++) {
    console.log(l); 
}

console.log(l);

for (var m = 0; m < 3; m++) {
    console.log(m); 
}

console.log(m);

for (const n = 0; n < 3; n++) {
    console.log(n); 
}

console.log(n);
//-------------------------------------------------------------------//
console.log(c)
var c="hell0"
console.log(c)

console.log(d)
let d = 10
console.log(d)

console.log(e)
let e = 10
console.log(e)

// ---------------------------------------------------------------------//

if(true){
    let a=1
    if(true){
        let b=2
        if(true){
            let c=a+b
            console.log(c, a,b)
        }
    }
}

//-------------------------------------------------------------------//

for (var i = 0; i < 5; i++) {
   setTimeout(() => {
     console.log(i)
   })
}

for (let i = 0; i < 5; i++) {
   setTimeout(() => {
     console.log(i)
   })
}