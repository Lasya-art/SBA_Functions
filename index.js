/*function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
  }
  
    function computearea(width,hieght)
{
    area = height * width
    return "the area of the rectangle with a width of 2 and hieght of 3 is ${area} sq units"
}

calcarea*/
        
//part1 assignment Take an array of numbers and return the sum.

/*function sumArrays(number)
{

let sum=0
for(let i=0;i<number.length;i++)
{
  sum += number[i]
}
return sum
}*/

let arr=[1,2,3,4,5]
//console.log(sumArrays(arr))

/*function red(arra)
{
  //const arr = [23, 34, 77, 99, 324]; 
  const sumusingreduce = arra. reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
  console.log("reduce")
   return sumusingreduce
   //console.log("reduce")

}
console.log(red(arr))*/

//Take an array of numbers and return the average.

function avg(number)
 {
  let sum=0
  for(let i=0;i<number.length;i++)
  {
    sum += number[i]
       
  }
  console.log("average")
  return sum/number.length
  //return sum
// const total=sumArrays(numbers)
// return total/numbers.length

}
 console.log(avg(arr))

//Take an array of strings and return the longest string.
/*function arrayofstring(str)
{
let longest=" ";
for (let  i = 0; i < str.length; i++) {
  if (str[i].length > longest.length) {
     longest = str[i]
      
  }
}
return  longest 
}

let arrofstr = [
  'Apple',
  'Banana',
  'Strawberry'
]

console.log(arrayofstring(arrofstr));*/

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
/*function longeststring(arrofstring,num)
{
let result=[]
for (let  i = 0; i < arrofstring.length; i++) {
  if (arrofstring[i].length > num) {
     result.push(arrofstring[i])
    }
  if (result===num)
  {
    break
  }
  }

return  result
}

let arrofstring = [
  'Apple',
  'Banana',
  'Strawberry','kiwi','mango','blueberry'
]

console.log(longeststring(arrofstring,9));*/

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// function printnumbers(n)
// {

  
//     if(n===0)
//       return
    
//       printnumbers(n-1)
//       console.log(n)
    
//   }

//   printnumbers(5)


  let  data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
  
    //Sort the array by age.
  //data.sort((a, b) => Number(a.age) - Number(b.age));
  //console.log("ascending", data);
  
  function sortwidIf(arr,key)
  {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
               if (arr[j][key] > arr[j + 1][key]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  console.log(sortwidIf(data,'age'))



  //Filter the array to remove entries with an age greater than 50.

  const threshold = 25;

// Using filter method
//arr = arr.filter(item => item.id !== 2);

//console.log(arr);
const filteredData = data.filter(item => item.age <= threshold);

console.log(filteredData);


const updatedData = data.map((item) => {
  return {
    id: item.id ,
    job: item.occupation, // Replace oldName with newName
    age: item.age++,
    }
    
  }
)

console.log(updatedData);

//pass by value
/*function age(item)
{

  for (let i = 0; i < item.length; i++) {
    item[i].age++;
  }
  
  return(item); 
}

console.log(age(data));*/

function passbyr(item)

{
  let ageInc=[]
  for (let i = 0; i < item.length; i++) {
    item[i].age++;
    ageInc.push(item)
    
      
  }
  console.log("passbyref")
  return(ageInc); 
} 
console.log(passbyr(data))


function newdate(myarrayy)
{
 
myarrayy.forEach(obj => {
  obj.date = new Date(0);
})
return myarrayy
}
console.log(newdate(data))

function newdatebyref(myarray)
{
const datanewbyref = myarray.map(obj => ({ ...obj, date: new Date("2023-12-25") }));
return datanewbyref
}
console.log("date obj by ref")
console.log(data)
console.log(newdatebyref(data))
//console.log(datanew)

//How many of the scripts could be turned into functions?
//sort functionality,finding sum and avearge,finding prime numbers,Comparison functions
//What would the parameters look like? What kind of returns should they have?
//Numbers
//Could you package your code into even smaller blocks, creating helper functions?
//yes
//What else could be changed to optimize the code, knowing what you now know?//
//Incoporating functions and many standard methods such as map ,sort and parse functionality to convert string to array instead of loop could optimize the code 

