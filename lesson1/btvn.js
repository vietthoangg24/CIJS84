

 function daonguoc(str){
    var arrstr = str.split("").reverse().join("");
    return arrstr;
}
console.log(daonguoc("12345"));

function daonguoc2(str){
    var newString = "";
    for(var i = str.length-1;i>=0;i--){
        newString+=str[i];

    }

    return newString;
}
function xoa(array){
    const mang = [...(new Set(array))];
    return mang;
   
   }
   const arrayy = ['🐣', 1, 2, '🐣', '🐣', 3];
   console.log(xoa(arrayy));



function array_unique(array){
    array.sort();

    let max =[0,0];

   
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) count++; 
        else{
             
             if (max[1] < count){ 
               
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}
let array = [ 7, 2, 6, 7, 4, 9, 8 ];
console.log(array_unique(array))

