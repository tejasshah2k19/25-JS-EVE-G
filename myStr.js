// let a = 10;
// let x = [] ;
// let y = 'a';
// let z = "royal"; 
// let b = 12.12; 
// //typeof 
// console.log(typeof(a)); // number 
// console.log(typeof(x)); // object 
// console.log(typeof(y));//string 
// console.log(typeof(z));//string 
// console.log(typeof(b));


let myStr = "royal education"

console.log(myStr);
console.log(myStr[0]);
console.log(myStr.at(0));
console.log(myStr.charAt(0));

//total number of characters 
console.log(myStr.length);

let x = "ram";
let y = "shyam";

let z = x+y;
console.log(z);
let p = x.concat(y)
console.log(p);
console.log(x == y );

// for(let i=0; i < myStr.length ; i++){
//     console.log(myStr[i]);
// }

//string immutable --> 

// let specialName = "RaM"; 
// let lw = specialName.toLowerCase();
// let up = specialName.toUpperCase(); 

// console.log("original => "+specialName);
// console.log("lower => "+lw);
// console.log("upper => "+up);

// let bigString = "jony jony yes papa";

// let myPapa = bigString.substring(14,18);//14:inclusive 18:exclusive 
// console.log(myPapa);

// let name  = bigString.substr(0,4); // depracated 
// console.log(name);

//XXXXXXXXXXXX12345 

//9510XXXXXXXX


let cc = "1234"; 

let creditCard = cc.padStart("12","X"); 

console.log(creditCard);

let creditCardNew = cc.padEnd("12","$");
console.log(creditCardNew);

let firstName = "      ram      ";
console.log(firstName.length);

console.log(">"+firstName+"<");
console.log(">"+firstName.trim()+"<");


console.log(">"+firstName.trimStart()+"<");

console.log(">"+firstName.trimEnd()+"<");


let myName = "royal";
console.log(myName.repeat(3));



//str ="jony 123 jon234 yes pa2pa2"; 

//count total number of digits from string  : 8  
//count total number of vowels from string  : aeiou 
//reverse string , print original and reverse both string 
//string palindrome or not 











