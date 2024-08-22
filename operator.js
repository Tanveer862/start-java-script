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
console.log('......power of Second Number.......')
let c=3;
let d=4;
const result=c**d;
console.log(result);
//comparision operator
// Number equal 
console.log('...........Check Number Equal............');
let xy=c==d;
console.log(xy);
// Number Not equal
console.log('...........Check Number Not equal..............');
let ab= c!=d;
console.log(ab);
// equal or Not in type or value
// first check data type and than check value
console.log('........First check data type  than  value check............')
let yz=c===d;
console.log(yz);
// Logical operator 
// AND operator 
console.log('.......AND operator.....')
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
console.log('........Nested If Statement.......');

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
//Ternary operator
console.log('.........Ternary operator.........');
const Marks=40;
const Result  = Marks>40 ? "PASSED": "FAILED";
console.log('Result',Result);
// Switch statement
console.log('..........Switch statement..........');
const grade='A';
switch(grade){
    case 'A':
        console.log('Very Good');
        break;
        case 'B':
            console.log(' Good ....Keep learning');
            break;
            case 'C':
                console.log(' Not improving');
                break;
                case 'D':
                    console.log('Not Good');
                    break;
                    default:
                        console.log('Invalid grade');
}
// For Loop 
console.log('.........Start For loop..........');
for(index=0; index<10; index++){
    console.log('Jazba Innovation');
}
// while loop 
console.log('.......while loop.......');
let step=0;
while(step<10){
    console.log('Step',step);
    step++;
}
