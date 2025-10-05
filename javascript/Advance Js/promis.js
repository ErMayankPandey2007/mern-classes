// Resolved and Rejected Promises Example
// This code demonstrates how to create a promise that resolves or rejects based on a condition.

// let fetchData=new Promise((resolve,reject)=>{
//     let success=true; // Simulating success or failure
//     setTimeout(()=>{
//         if(success){
//             resolve({name:"mayank", age:20});
//             console.log("successfully fetched data");
//         }
//         else{
//             reject("Error:Failed to fetch data");
//         }
//     },2000)
//  })

//  //Using .then() and .catch() to handle the promise
// fetchData.then((result)=>{
//     console.log("Data",result)
// })
// .catch((error)=>{
//     console.error(error);
// });



//Async and Await Example
 function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"mayank", age:20});
        },2000)
    })
 }

 async function getData() {
    console.log("Fetching Data...");
    let result = await fetchData();
    console.log("Data Received", result);
    
 }
 getData()