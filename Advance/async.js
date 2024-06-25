
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

let Promis = new Promise(function(resolve,reject){
    if(resolve){
        resolve("success");
    } else{
       reject("Error");
    }
})