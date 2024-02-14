// In line comment 
/* We are about to 
learn JS */

//Data TYpes
// undefined,null,boolean,string,number,object

//Declaring and assignment operators
var a; //Declaring a variable
var b = 9; //Declaring and assigning a variable within the same line
a =8; // Assigning a variable

b = a // This assigns the contens of a to b variable

console.log(b);

// Constructing strings with variables
let ourName = 'bsmart tech';
// let ourStr = 'This company is known as ' +ourName+ ' and it is doing great things.'
// console.log(ourStr);

//Object literals
let myStr = `${ourName} is one great company.`
console.log(myStr);

//functions

function Calc(a,b,c){
  let result;
  result = a * b + c;
}
Calc(2,3,5);




