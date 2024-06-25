
function data1() {
    console.log("get data one");
}
data1()

setTimeout(function () {
    console.log("data received after 2 seconds")
}, 2000)

function data2() {
    console.log("data received");
}
data2()

// Promise all
let Promise1 = Promise.resolve(3)
let promis2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data received after 2 seconds")
    }, 200)
})

Promise.all([Promise1, promis2]).then((values) => {
    console.log(values);
})

// promis resolve reject
let promise = new Promise((resolve, reject) => {
   if(true){
    resolve("data received")
   }else{
    reject("data not received")
   } 
}).then((values)=>{console.log(values);})

// callback 
console.log("======= call-back =====");
function first(ans){
    console.log(ans);
}
function seconds(num1,num2){
    let sum = num1+ num2
    first(sum)
}
seconds(5,5)



const getData = async () => {
    try {
        let response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",)
        if (!response.ok) {
            throw new Error(console.log("error"))
        }
        let data = await response.json()
        console.log(data);
    } catch (err) {
        console.log(err.message);
    }
}
getData();



