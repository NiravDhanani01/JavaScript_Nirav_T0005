// object litrals
var person = {
    fname: "jony",
    lname: "parker"
}
console.log(person);
console.log("=====");

// constructore function 
function person2(){
    this.name = "hello";
    this.age = 20;
}
let person3 = new person2()
console.log(new person2);
console.log(person3.name);
console.log(person3.age);
console.log("=====");

for (let i in person2){
    console.log(i);
}

const obj = {name:"hello" , age : 21}
console.log(obj);
obj.name = "raj"
console.log(obj);
obj.age = 56
console.log(obj);
// obj = {name:"jj",age: 56} // here throw an error
console.log("=====");

// property descripter
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
console.log(Object.keys(obj));

function Student(){
    this.name = "hello",
    this.age = 20
}

var student1 = new Student;
console.log(student1);
Object.defineProperty(student1,"name",{writable : false})
student1.name = "hi";
console.log("change name hello to hi=>",student1.name);
console.log(student1);
student1.age = 23;
console.log("change aeg 20 to 23 => ", student1.age);
console.log(student1);

// define new property 
function latest(){
    this.name = "hello"
    this.age = 20
}

let old = new latest()
console.log(old);
console.log(old.name);