let A =[1,5,3,8,10]
//a
export const a = (array) =>{
let tb ;
let sum = 0;
    
    for(let i =0 ; i<A.length;i++){
        sum = sum + A[i];
      }
     return  tb=sum / A.length;
}
 //b
export const b = () =>{
    A.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    A.reverse();
    console.log(A);
}
 //c
export const c = () =>{
    let tongsoduong = 0;
for(let i=0;i<A.length;i++){
    if(A[i]>0){
        tongsoduong = tongsoduong + A[i];
    }
}
console.log(tongsoduong);
}
//d
export const  d = () =>{
    let arrle = A.filter((e)=>e%2!==0);
let tongsole = 0 ;
for(let i =0 ;i<arrle.length;i++){
    tongsole = tongsole + arrle[i];
}
console.log(tongsole);
}
//e
export const e =() => {
    A.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    A.reverse();
    console.log(A[1]);

}

//f

export const f = () => {
    function find_square_number(n){

        let flag = 0;
        let i = 0;
        while(i <= n){
            if( Math.pow( i, 2) == n ) {   
                flag = 1;
                break; 
            }
            i++;
        }
    
        return flag;
    }
    
    let dem = 0 ;
    for (let i = 0; i < A.length; ++i) {
        let check = find_square_number(A[i]);
        if (check == 1) { 
            console.log( "day la so chinh phuong " + A[i] );
            dem++;  
        }
    }
    console.log ("co so chinh phuong la "+dem);
}