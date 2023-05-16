function bai1(){
    const arr1 =  [1,2,4,5,6] ;
const arr2 = [1, 6, 8, 9, 0] ; 
const arr3 = [...arr1,...arr2];
console.log(arr3);
const newArr = arr3.filter((item,index) =>arr3.indexOf(item)!==index);
console.log(newArr);
}


function bai2(){
    const arr = [1,54,6,7];
    const newArr = arr.map((value) =>value+5);
    console.log(newArr);

}

function bai3(){
  const m = [1,2,4,5,6,7];
  const n = [3,5,675,8,96];
  const x = [1, 8,10,96,7];
  const arr3 = [...m,...n];
  const newArr = arr3.filter((item)=> !x.includes(item));
  console.log(newArr);
}


function bai4(){

}
import {a} from "./modules.js" 
let A =[1,5,3,8,10]

console.log(a(A));