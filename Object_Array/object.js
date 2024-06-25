let obj = {
    name : "ABC",
    lastName : "xyz",
    phone : 123,
}
console.log(`first =>`,obj);

obj.name = "raj"
console.log( `after change name =>`,obj );

obj.id = "01"
console.log("Adding new Property id =>",obj);

delete obj.name
console.log("delete name property => ",obj)
console.log("===================");


/// 
let data = {
    movie :{
        name : "abc",
        time : "02:50",
        genre : "comedy"
    },
    play:{
        name : "abc",
        time : "02:50",
        genre : "drama"
    }
}
console.log("access only movie =>",data.movie);
console.log("access only play =>",data.play);
console.log("===================");

// values
console.log("This is obj values",Object.values(obj));
console.log("This is obj keys",Object.keys(obj));
console.log("This is obj entries",Object.entries(obj));
console.log("===================");

// assing method 

let obj1 = {
    name : "ABC",
}
let obj2 ={
    lastName : "xyz",
}

let obj3 = Object.assign(obj1,obj2)
console.log('assign object value => ',obj3);
console.log("===================");

//freeze
Object.freeze(obj1)
obj1.name = "raj"

console.log('object1 after freezing =>',obj1);