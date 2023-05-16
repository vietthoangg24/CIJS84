// Arrow function

//const / let / var ten function= (parameter1,parameter2,parameter3,...) =>{code block}

// bt1 Viết một hàm tính tổng bằng cách sử dụng arrow function 
// input 2,6
// output 8 

const sum = (a,b) =>{
    return a+b;
    
}
console.log(sum(2,6))

// viết hàm tính bình phương của 1 số n 

const  tich = (n) =>{
    return n**2;
} 
console.log(tich(6));

// *arrow function ko có hoisting 


//template literal
// const str = "Mindx CiJS84"

const maLop = "CIJSXYZ";
const diaChi = "HÀ NỘI";
const str = `Mindx ${maLop}
Học ở ${diaChi}  `;


// + chuyền biến vào chuỗi 


console.log(str);


// sao chép array ,object 
// const num1 = [1,2,3];
// const num2 = [...num] ; 
// num2[2] = 33; 
// console.log(num1);
// console.log(num2); 


// gộp array , object 
// const nameAndAge = {
//     name : 'Nguyễn văn A ', 
//     age : 18
// }

// const gpa = {gpa :'3.8'};

// const student = {
//     ...naemAndAge,
//     ...gpa
// }

// console.log (student);

const student1 = {name :'Nguyễn văn A', age :18 , gpa :3.9};
const student2 = {name : 'Đỗ văn B ', age :19};
const student3 = {...student1,...student2,gender: 'boy'};
console.log(student3);


const arr1 = [1,2,3];
const arr2 = [1,2,3];
const arr3 = [...arr1, ...arr2,4,5,6];
console.log(arr3);

// thêm phần tử vào array và thêm key vào object 

// tính tổng các số được chuyền vào
// input 1,2,3
// output 6
// input 1,2,3,4,5
// output :15


function bai2(...arr) {
    
    let sum = 0;
    for(let i = 0;i<arr.length;i++ ){
        sum = sum + arr[i]
        
    }
    console.log("tổng các số là " + sum);
}



// destructuring 
const teacher = {
    name : 'TRần Thị Huy ',
    gender : "girl",
    age:30

};

// const nameTeacher = teacher.name;
// const gender = teacher.gender;
// console.log(nameTeacher);
// console.log(gender);
// const {gender,name:nameTeacher,age = 0 } = teacher ;
// console.log(nameTeacher);
// console.log(gender);
// console.log(age);
 
// const listNumber = [1,2,3];
// const [, ...numbers] = listNumber;
// console.log(numbers);




//array function : map , filter ,findindex , find 
// cho một mảng A có các phần tử là số 
// viết code trả về một mảng mới có giá trị là các phần tử trong mảng A* 2


// cách 1
const A = [1,2,3,5];
// const newArr = [];
// for(let i = 0;i<A.length;i++){
//     newArr.push(A[i]*2);
// }
// console.log(newArr);


// cách 2 sử dụng hàm map 
// const newArr = A.map((e,i) =>{
//    return e*2;
// })
// console.log(newArr);



// Bài 2: Cho một mảng B, viết code trả về mảng mới chứa các
// phần tử là số lẻ trong mảng B
// Input: B = [1,2,3,4,5]
// Output: newArr = [1,3,5]

const B = [1,2,3,4,5];
const newArr = B.filter((value)=> value %2===1);
console.log(newArr);


// Module 
