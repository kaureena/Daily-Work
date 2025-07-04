// let x = 10;
// if (true){
//     let x = 20;
//     console.log(x);
// }
// console.log(x);
// const arr = [['a',1],['b',2],['c',3]]
// const obj = Object.fromEntries(arr);
// console.log(obj);
const a = [1,2];
const b = [3,4];
const merg = [...a, ...b];
console.log(merg);

const getgt = () =>{
    return "try only one";
};
console.log(getgt());

console.log([1] == true); // treu
console.log(true + true + true); // 3
console.log(null == undefined); // loos couple so true
console.log(1 + true + "3"); // true means 1 means 23
console.log([1, , 3].length); // , it check value 3
console.log([1,2]+[3,4]); 1,23,4

// let a = [1,2,3];
// let b = a;
// a = [4,5,6];
// console.log (b);

let r = 10;
let ans = ++r; // ans ne 10 malej but r print thai to 11 thse p6i r= r+1 thai
console.log(ans);    
console.log(1 < 2 < 3);  // true, left to right thai 1<2 = true but true < 3 here true counted as 1 so 1 < 3 yes
console.log(3 > 2 > 1);  // false , 3 > 2 = true but true < 1 means  1 < 2 false 

var at = 1;
(function (){
    console.log(at);
     var at = 2;
     console.log(at); // first print this and outside one
}) ();
 console.log(at);
//     var at = 2;

let h = '12'
let c = '34'
console.log(h + c)

