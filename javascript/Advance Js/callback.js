// function callbackFunction(){
//     console.log("callback function executed");

// }

// function mainFunction(callback){
//     //do work
//     callback();
//     console.log("callback");
//     let a=5;
//     let b=3;
//     let c=a+b;
//     console.log(c);
//     callback();

// }

// mainFunction(callbackFunction);


// Fetching data---Main Function

function fetchData(callback){
    console.log("Fetching Data...")
    setTimeout(()=>{
        let data={name:"mayank",age:20}
        callback(data)
    },2000)
}
// display data after fetching

function DisplayData(result){
    console.log("Data Received",result)

}
fetchData(DisplayData)