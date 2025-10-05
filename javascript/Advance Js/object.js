// // boject in js

// //creating  an object

// let person={
//     name:"mayank pandey",
//     age:21,

//     occupation:"Developer"

// }

// // Accessing properties

// console.log(person['age']);
// console.log(person['occupation']);
// console.log(person['name']);

// // Adding properties

// person.location="india";
// console.log(person);
// console.log(person['location']);

// //updating properties

// person.age=91;
// console.log(person);

// //Removing properties

// delete person.age;
// console.log(person);

// //object Methods:-

// // 1.object.keys():-Return an array of property keys.
// // 2.object.value():-Return an array of property values
// // 3.object.entries():-Return an array of key-value pairs

// //1.object.keys():-

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// task to create the data of a student





let student={
    name:"Mayank Pandey",
    age:21,
    college:"GPS kanpur dehat",
    mobile:7549910025,
    occupation:"WEb Developer",
    stream:"Computer Science & Engineering",
    training_center:"DigiCoder Technology PVT.LTD",
batch:15,
location:"varanasi Uttar Pradesh"
}

console.log(Object.entries(student))
