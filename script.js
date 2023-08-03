//Normal Method

// Funtions Method (Normal Method)
//1.print odd numbers in an array

let arr = [12,13,14,15,31,44,66,55,71,31];
let result =[];
function odd(arr) {
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]%2!=0)
    {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd(arr));


// 2.Convert all the strings to title caps in a string array

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("java script array methods"));


// 3.Sum of all number in an array

function titleCase(arr){
 let sum =0;
 for(i=0;i<arr.length;i++)
 {
    sum += arr[i];
 }
 return sum;
}
console.log(titleCase([1,2,3,4,5,6,7,89]))


// 4.Return all The Palindromes in an array

function Palindromes(arr){
    let result= []; 
    let A= arr.slice().toString().split("").reverse().join("")
    
    for(i=0;i<arr.length;i++)
    {
        if(A===arr[i]){
            result.push(arr[i]);
        }
       
    }
    return result;
}  
console.log(Palindromes(["madam","racecar","Hi","bcb","aac"]))


// 5.Return All The Prime Numbers in an Array 
 

let a = [2,3,4,5,6,7,8,9,11,21,13,5, 9, 63, 29, 35, 6, 55, 23]
let prime = []; 
function isPrime(item) { 
var identifier = item / 2; 
for (let j = 2; j <= identifier; j++) { 
   if ((item % j) == 0) 
    { 
      return false; 
    } 
  }  
  return true; 
} 

for (let i = 0; i < a.length; i++) 
{ 
   if (isPrime(a[i]))
 { 
    prime.push(a[i]) 
 } 
}
 console.log(prime);


    

//Anonyomus Method
//1.print odd numbers in an array
 
let a =[12,13,14,15,31,44,66,55,71,31];
let result=[];
 let odd = function(a)
 {
  for( let i=0;i<a.length;i++)
  {
    if(a[i]%2!=0)
    {
      result.push(a[i])
    }
  }
  return result;

 }
 console.log( odd(a))


// 2.Convert all the strings to title caps in a string array

let titleCase = function(str){
str = str.toLowerCase().split(' ');
    for ( let i=0;i<str.length;i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          
    }
    return str.join(' ');
}
console.log(titleCase("java script anonyomus method"))
     


// 3.Sum of all number in an array
  
let  a = function(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++)
    {
        sum += arr[i];
    }
    return sum;
}
console.log(a([12,23,35,67,77,88]))





//IIEF Method
//1.print odd numbers in an array

 
(function odd(b) {
let result=[];
for(let i=0;i<b.length;i++)
{
  if(b[i]%2!=0)

  {
   result.push(b[i]);
  }
}
console.log(result);
})([31,41,57,83,9,7,6,42,66,55,99])

// 2.Convert all the strings to title caps in a string array
 
(function titleCase(str)
{
    let result=[];
    str = str.toLowerCase().split(' ');
    
    for ( let i=0;i<str.length;i++)
    
     {
     str[i]=result.push(str[i].charAt(0).toUpperCase() + str[i].slice(1)); 
                  
      }
     console.log(result.join(' '));
     })(["java script iief method method"])




// 3.Sum of all number in an array

(function A(arr){
    let sum = 0;
    
    for (i=0; i<arr.length;i++)
    {
      sum += arr[i]
    }
     console.log(sum)
    
})([111,222,333])

        
        
        



//Arrow Function (ES6)
//1.print odd numbers in an array
 
const od = (c) => {
  let result=[];
  for(i=0;i<c.length;i++)
  if(c[i]%2!=0)
  {
    result.push(c[i])
  }
  return result;
};

console.log(od([21,3,4,32,3,5,67,6,55,4,35,8])) 


//2.Convert all the strings to title caps in a string array

const titleCase1 = (str) => {
    let result=[];
    str=str.toLowerCase() .split(' ');
    for(i=0;i<str.length;i++)
    {
        result.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
    }
    return result
};
console.log(titleCase1(["java script arrow es6 method"]))
 

// 3.Sum of all number in an array

const Sumof = (arr) => {
 let sum =0;

 for (i=0;i<arr.length;i++)
 {
    sum +=arr[i]
 }
 return sum;
};
console.log(Sumof([111,222,333]))