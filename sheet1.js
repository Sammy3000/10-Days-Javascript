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
  let result = a * b + c;
  return result;
}
console.log(Calc(2,3,5));

//Array within an array
const nums = [[1,3,2],[5,56,9],[4,5,7,10]]
console.log(nums[1][2]); // Should return 9 because we are accessing the second array and the third element

let sammu;
let res = typeof(sammu);
console.log(res);


