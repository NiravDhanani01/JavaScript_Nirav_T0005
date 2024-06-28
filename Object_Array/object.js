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
    sub:45
}
let obj3 = {
    name : "hari",
    lastName : "Dhanani",
    id:25
}

let obj4 = Object.assign(obj1,obj2,obj3)
console.log('assign object value => ',obj4);
console.log("===================");

//freeze
Object.freeze(obj1)
obj1.name = "raj"

console.log('object1 after freezing =>',obj1);


// combining of two obj 

let names = {
    name : "ABC",
    age : 26,
    id : 3,
}
let add = {
    name : "xyz",
    id : 3,
}
console.log({...names,...add});
console.log(Object.assign("combine two obj",names,add))

function swapKeysAndValues(obj) {
    let newObj = {}

    for (let i in obj) {
        newObj[obj[i]] = i
    }
    return newObj
}

let swap = {
    name: "ABC",
    id: 6,
}
console.log(swapKeysAndValues(swap))

// Write a function that takes an array of objects and a key, and returns an array of the values corresponding to that key in each object.
function objs(arrval) {
    let newarr = []
   for(let i=0;i<arrval.length;i++){
    newarr.push(arrval[i].name)
    newarr.push(arrval[i].id)
   }
   return newarr
}
let arrval = [
    { name: "ABC", id: 1 },
    { name: "EFG", id: 2 },
]
console.log(objs(arrval));

// sort obj by key 

// Write a function that takes an array of objects and a key, and returns a new array of objects sorted by the values corresponding to that key.


function sorting(objsort,key) {
    return objsort.slice().sort((a,b)=>a[key] - b[key] )
}


function sorting(objsort, key) {

    for (let i = 0; i < objsort.length; i++) {
        for (let j = 0; j < objsort.length; j++) {
            if (objsort[i][key] > objsort[j][key]) {
                let temp = objsort[i];
                objsort[i] = objsort[j];
                objsort[j] = temp;
            }
        }
    }
    return objsort
}

let objsort = [
    {
        name: "ABC",
        age: 16,
    },
    {
        name: "EFG",
        age: 12,
    },
    {
        name: "XYZ",
        age: 1,
    },
    {
        name: "XYZ",
        age: 16,
    },
    {
        name: "XYZ",
        age: 20,
    }
]
console.log(sorting(objsort, "age"));










