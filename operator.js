//Arithmetic operator
const x=20;
const y=25;
const z=x+y;
console.log('The addition of X and Y',x+y);
x-y;
x/y;
x*y;
x%y;
console.log('The subtraction of X and Y is=',x-y);
console.log('The Division  of X and Y is=',x/y);
console.log('The Multiplication of X and Y is=',x*y);
console.log('The Mode of X and Y is=',x%y);
let a=15;
a++;
console.log(a);
// power of second number
let c=3;
let d=4;
const result=c**d;
console.log(result);
//comparision operator
// Number equal 
let xy=c==d;
console.log(xy);
// Number Not equal
let ab= c!=d;
console.log(ab);
// equal or Not in type or value
// first check data type and than check value
let yz=c===d;
console.log(yz);
// Logical operator 
// AND operator 
let m=true;
let n=false;
let abc=m&&n;
console.log( abc);
// NOT operator
console.log('Not operator');
console.log(!m);
// OR operator
console.log('OR operator ')
abc=m||n;
console.log(abc);
// conditional Structure 
console.log('.........................')
console.log('Conditional Structure start');
const age=30;
if(age>=18){
    console.log(' Your Name Tanveer');
    console.log('You can vote');
}
else{
    console.log('you cannot vote ');
}
console.log('...............');
const marks =70;
if(marks>90){
    console.log('A+');
}
else if(marks>80){
    console.log('A');
}
else if(marks>70){
    console.log('B+');
}
else if(marks>60){
    console.log('B');
}
else {
    console.log('Low Marks');
}
console.log('................');
console.log('Nested If Statement');
console.log('................');
let Age=15;
if(Age>20){
    console.log('You Must B Vote');
    if(Age>16){
        console.log('you Again vote ');
    }
}
else{
    console.log('You Cannot Vote ');
    if(Age<16)
        console.log('You must have ID card ');
}