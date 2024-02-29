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

//local scope variables
function Localee(){
    var greetings = 'Hello';
    console.log(greetings);
}
Localee()
//console.log(greetings);Cannot print this line because var makes a variable local scoped

//global scope
function Localee(){
    greetings = 'Hey';
    console.log(greetings);
}
Localee()
// console.log(greetings);


const sentenseGenerator = (v1,v2)=>{
    
  return ` ${v1} likes wasting ${v2} `

}

// console.log(sentenseGenerator('Dominos','food')); 

//If statements functions plus boolean 

function trueorFalse(age){
   if(age===25){
    return `You should be responsible`
   }
   if(age===35){
    return `You are a role model`
   }

}
// console.log(trueorFalse(25));

//Switch case
function caseInSwitch(val){
  var answer = ''
    switch(val){
      case 1: 
      answer = 'alpha'
      break;
      case 2: 
      answer = 'beta'
      break;
      case 3: 
      answer = 'gamma'
      break;
      case 4: 
      answer = 'delta'
      break;
    }
    
   return answer;

}

// console.log(caseInSwitch(2));

//Objects
//Accessiong object properties using variables(Object destruction)

var testobj = {
  name:'Namath',
  place:'Montana',
  country:'Unitas'
}

let{name}=testobj

// Methods
// Map returns a new array for each element in an array

let result = [54,65,58,99,88];
let newresult = result.map(res=>res*5); // Returns a new array with each element multiplied by five

// console.log(newresult);

//FIlter method
//Creates a new array filled with elements that pass a test provided by a function

const ages = [33,26,20,15,17,88,35,85,19];
const adult = ages.filter(checkAdult)

function checkAdult(age){
   return age>=18;
}

// console.log(adult);

//FInd method
//The find() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. find() then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, find() returns undefined.

const ageTime = [5, 10, 18, 28];

function checkAge(age) {
  return age > 18;
}
 const foundAge = ageTime.find(checkAge)
//  console.log(foundAge);

//at method
// The at() method returns an indexed element from an array.

// The at() method returns the same as [].

//The at() method is supported in all modern browsers since March 2022:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
let fruit = fruits[2]

console.log(fruit);

// Array pop method
//Removes the last item in an array and returns it

fruits.pop();
