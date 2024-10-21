// premitive datatypes: 
//  7 types 
/* string
   number
   boolean
   null
   undefined
   symbol  is used for making a component unique
   BigInt

*/

const score = 100;
const scoreValue = 100.1;
const isLoggedIn = false;
const outSideTemp = null;

// in symbol if we pass same figure but if we compare them it will result false

const id = Symbol('123')
const anotherId = Symbol('123')

console.log("id = ", id);
console.log("anotherId = ", anotherId);

console.log(id == anotherId);
const bigNumber = 12351654984654651351564154n;

/*
Refrence Type Or Non - Premitive

    array
    object
    function 

  */

const heros = ['Ali', 'Abu bakar', 'Omar'] // array of heros

let obj = {
   name: 'ismaeel', // example of object
   age: 12,
}

// example of function 
const myFunction = function () {
   console.log('hello world');

}

//

// console.log("type of bignumber :", typeof heros);


/* +++++++++++++++++ Memory ++++++++++++++++++++*/

/*



*/

// let myYoutubeName = 'ismail_Youtube'

// let anotherName = myYoutubeName;
// anotherName = "chaiAurCode"
// console.log(anotherName);
// console.log(myYoutubeName);

// let userOne ={
//    email:'ismail@gmail.com',
//    upi:'abced',
// }

// let userTwo = userOne;

// userTwo.email='khan@gmail.com';

// console.log(userOne.email);
// console.log(userTwo.email);


//Stack Concept

let myName = "isamil";
let nickname = myName;

nickname = "khan";


console.log(nickname);
console.log(myName);


// Heap concept

const myCar = {
   type: 'LTV',
   model: 2022,
}

let newCar = myCar;
newCar.type = 'htv';

console.log(myCar.type);
console.log(newCar.type);


