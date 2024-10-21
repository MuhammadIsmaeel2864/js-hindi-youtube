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

console.log("type of bignumber :", typeof heros);
