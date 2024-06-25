let array = ["car","bus","bike",1,2,3,6,5,9,10];

console.log(array);
//array methods

let newarr = array.map((item)=>item)
console.log("Copy of array =>",newarr);

let filter = array.filter((item)=>item%2 == 0)
console.log("filter array =>",filter);

let sum = [1,2,3,4,5,6]
let initial = 0
let reduce = sum.reduce((acc,cur)=>
 acc + cur , initial)

console.log("Reducer =>",reduce);

console.log("array length is =>",array.length);

// push method
sum.push(5)
console.log("array after push =>",sum);
//pop method
sum.pop()
console.log("array after pop =>",sum);

//shift
sum.shift()
console.log("array after shift =>",sum);

// unshift
sum.unshift(10)
console.log("array after unshift =>",sum);

// find
let Find = sum.find((item)=>item%2==0)
console.log('array after find => ',Find);

let fill = [1,2,3,8,6,7]
console.log("array after fill" ,fill);

// indexOf
let index = fill.indexOf(8)
console.log("index of =>",index);

//lastundex of
let lastindex = fill.lastIndexOf(6)
console.log("last index of =>",lastindex);

let findIndex = fill.findIndex(num=>num==3)
console.log("find index of =>",findIndex)

// includes
let include= fill.includes(144)
console.log("include of 1 is =>" ,include);

let splicearr = [1,2,3,8,6,7]
let spli = splicearr.splice(1,3)
console.log("splie of array =>",spli);

// short 
let arrSort = [1,2,3,4,8,6,9,7,"a","b","c"]
let ashort = arrSort.sort()
console.log("Sort of array ascending =>",ashort);
let dshort = arrSort.reverse()
console.log("Sort of array descending =>",dshort);

let aarrSplice = [0,2,5]
aarrSplice.splice(1,0,"a")
console.log("splice of array =>",aarrSplice);

// toString
let arrToString = [1,2,3,4,5]
arrToString.toString()
console.log("string array =>",arrToString.toString());

let newarra =  arrToString.concat(arrSort)
console.log("concate new array =>",newarra);

// every
let every = arrToString.every((item)=>item<0)
console.log("every item is greater than 0 =>",every);

// slice
arrToString.slice(1)
console.log("slice of array =>",arrToString.slice(1));

// at
let atindex = arrToString.at(2)
console.log("at index =>",atindex);

// flate
let flat = [1,2,3,4,[6,7,[5]]]
console.log("sub aaray =>",flat);
let flatarr = flat.flat(Infinity)
console.log(`array after flat`,flatarr);
