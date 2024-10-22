// let myName = 'ismail khan is the new coach of our football team. ismail played football for 9 years';
// let lastName = 'khan';
// let familyName = 'rehman'
// console.log(myName.charAt(2));

// console.log(myName.charCodeAt('i'));// charCodeAt using alphabets   
// console.log(myName.charCodeAt(0));// charCodeAt using Index


// console.log(myName.concat('-', lastName).concat('-', familyName)); // concat method used to join two or more strings 

// console.log(myName.endsWith('khan')); // use to check whether the statement or string ends with the given string or not it will return true or false

// console.log(myName.includes('khan')); // include method perform a casesensetive check whether the given string is available or not it will return true or false


// console.log(myName.replace('khan','ali'));

// console.log(myName.replaceAll('ismail','arham'))

// console.log(myName[myName.search('9')]);

// console.log(myName.slice(0,14));

// console.log(myName.split(' ')[8]);

const authToken = 'curl -i http://dev.myapp.com/api/users \
  -H "Authorization: Basic Ym9zY236Ym9zY28=" \
  -H Application-Authorization: mytoken123'

  const newToken = authToken.split(':')[0]; // splitting the string on basis of : 
  const generatedToken = newToken.trim(); // removing the extra spaces by trim method
  const upperCaseToken = generatedToken.toUpperCase() // converting in to upper case by toUpperCase method
  const lowerCase = upperCaseToken.toLowerCase(); // converting to lowerCase by toLowerCase method
  console.log(lowerCase)


