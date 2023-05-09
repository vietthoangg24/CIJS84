// 1.let va const

// var/let  va const 
var a = 10 ;
console.log(a);
a =20;
console.log(a);
 // var/let dung để khởi tạo nhưng biến có thẻ thay đổi giá trị 
 // const dùng để khởi tạo nhưng biến hằng số 
 // var và let/const 
 // biến bằng từ khóa let / const thì chỉ có phạm vi sử dụng trong scope
 // biến khởi tạo bằng từ khóa var thì sẽ có phạm vi global scope
 {
    
   var a = 10 ; 
    console.log(a);
 }


 // hoisting
 a = 10 ;
 console.log(a);
 var a ; 
 console.log(a);

 // let và const ko có cơ chế hoisting 

 // 2. arrow function , no hoisting supported , no context 
// const sum = (a,b) =>{
//     console.log('sum 2 nuumbers');
//     return a+b ; 

// };
// console.log (sum(a,b));

//let/const/ var namefn= (parameters) => 
// đoạn code thực thi 

const obj = { foo: 1 }
obj.bar = 2
console.log(obj);
function mystery(...params) {
	return params
}
let a = mystery(1, 23, 4);
console.log(mystery);