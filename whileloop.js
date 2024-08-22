// write a program tha prints first 10 number and their square
let x=0;
while(x<=10){
    console.log('x=',x*x);
    x=x+1;
}
console.log('.........');
// Write a program tha print series of Number 10 20 30.........300
let a=10;
while(a<=300){
    console.log('The series is 10 to 300 =',a);
    a=a+10;
}
console.log('..........');
// write a program tha print the series 105 98 91...............7
let y=105;
while(y>=7){
    console.log('Print Series is 105 .98. 91....7=',y);
    y=y-7;

}
console.log('..................');
// write a program that print 10 Natural Number in reverse order
let z=10;
while(z>=1){
    console.log('Natural Number Reverse order =',z);
    z--;
}
console.log('...........');
// write a program that print sum of first 10 natural Number
let b=1;
let sum=0;
while(b<=10){
    sum=sum+b;
    console.log('Sum  of 10 Nutural Number=',sum);
    b++;
}
console.log('..............');
// write a program that print sum of first 10 even number
let d=0;
let sum1=0;
while(d<=10){
    sum1=sum1+d;
    console.log("Sum of Even Number=",sum1);
    d=d+2;
}
// First 10 odd number 
console.log('.......Odd number......');
let s=1;
while(s<10){
    console.log('Odd Number =',s);
    s=s+2;
}
// First 10 whole Number
console.log('.............');
let w=0;
while(w<=10){
    console.log('Whole Number=',w);
    w++;
} 
// Even number using starting or ending number
console.log('.............');
let ab=20;
let bc= 50;
let=a;
a=ab;
while(a<bc)
{
    if(a%2==0)
    console.log('Even Number between Rang=',a);
a++
    
}
console.log('...........');
// prime Number  check
let isPrime=true;

let num=4 ;
let n=2;
while(n<num)
{
    if(num%n==0)
        {
            isPrime=false ;
    break;}
        else if(num%n!=0){
            isPrime=true;
        }n++;
}

if(isPrime){
    console.log("Number is prime");
}
else if(!isPrime){
    console.log("Number is not prime");
}
console.log('.....Sum of Digit.......');
// Find the sum of the digit enter by user
let r=0;
let S=0;
let num2=746;
while(num2 !=0)
{
    r=num2%10;
    console.log("r : ",r);
    S=S+r;

    console.log("S : ",S);
    if(num2>10){

    num2=parseInt(num2/10);
    console.log("num2/10 : ",num2);
}
    else{
        
num2*=0;

    }
}
console.log('The Sum is = ',S);

