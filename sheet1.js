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
console.log(fruits);

//Array push method
// Appends new element at the end of an array and returns new length

fruits.push('avocado','grape');
console.log(fruits);

//Array shift method 
// Removes the first element of an array and returns it

fruits.shift()
console.log(fruits);

//Unshift method
//Add a new element at the beginning of an array and returns a new length

fruits.unshift('Pineapple','coconut');

console.log(fruits);

//Strings in JS

//strings can be created as primitives, from string literals, or as objects, using the String() constructor:

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

//Character Access
//There are two ways to access an individual character in a string

// First is the charAt() method.

console.log(string1.charAt(3));

// The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

console.log(string2[2]);

//Comparing strings

const a1 = "a";
const b1= "b";
if (a1 < b1) {
  // true
  console.log(`${a1} is less than ${b1}`);
} else if (a1 > b1) {
  console.log(`${a1} is greater than ${b1}`);
} else {
  console.log(`${a1} and ${b1} are equal.`);
}

const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

//split method
//split a string into substrings using the specified separator and returns them as an array.

let names = 'sammy';
let newname = names.split('')
console.log(newname);

//reverse and join methods
// The reverse() method reverses the order of the elements in an array. 

let reversedname = newname.reverse();
console.log(reversedname);

// Join method creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

let finalName = reversedname.join('')
console.log(finalName);

//This Keyword
//A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

let person = {
   firstname:'sammy',
   lastname:'towett',
   age:26,
   fullname:function(){
    return `My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old`
   }

}
console.log(person.fullname());

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
//In non–strict mode, this is always a reference to an object. In strict mode, it can be any value. For more information on how the value is determined, see the description below.

//In an object method, this refers to the object.
//Alone, this refers to the global object.
//In a function, this refers to the global object.
//In a function, in strict mode, this is undefined.
//In an event, this refers to the element that received the event.
//Methods like call(), apply(), and bind() can refer this to any object.


//NOTE:
//this is not a variable. It is a keyword. You cannot change the value of this.

//this in a Function (Default)
//In a function, the global object is the default binding for this.
//In a browser window the global object is [object Window]:

//EXAMPLE
// function myFunction() {
//   return this;
// }
// console.log(myFunction());

//JS ASYNC

