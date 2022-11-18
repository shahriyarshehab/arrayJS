var arr = [1,2,3,4,5,6,7,8,9,10];
//delete arrays first element
arr.shift()
//delete arrays last element 
arr.pop()
  
//remove elemet by decreaceing arrays length

arr.length = arr.length - 1;
//using splice method
arr.splice(2,1)
//using for lop for deleting  accorate nummber 
const tobedel=5;
for (let index = 0; index < arr.length; index++) {
  if (arr[index]===tobedel) {
    arr.splice(index,1)
  }
  
}

//delete array using filter method 
let newdelete= 6; 
arr = arr.filter((item) => item !== newdelete);
// delete oparateor use
delete arr[1]
//delete using another array referance
let x = [1,2,3];
let y = x;
x = []
console.log(x,y);
//altarnative 
let xx = [1,2,3];
let yy = xx;
xx.length = 0;
console.log(xx,yy);
//delete hole array using while loop and pop method
while(arr.length) arr.pop();

console.log(arr)
