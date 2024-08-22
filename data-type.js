// Data type 
const score=100
console.log(typeof(score))
const scorevalue=100.3
console.log(typeof(scorevalue))
const login=true
console.log(typeof(login))
const outsidetemp=null
console.log(typeof(outsidetemp))
let userEmail;
console.log(typeof(userEmail))
const id= Symbol('123')
console.log(typeof(id))
const anotherid= Symbol('123')
console.log(id===anotherid)
console.log('.........')
const hero =["AbuBakar", " Rashid-Minhas", "Allama Iqbal"];
console.log(typeof(hero))
const myFunction=function(){
    console.log('Helo world')
}
console.log(typeof(myFunction));

// Memory .............
let mychannel="Tanveerchudharydotcom"
let anotherName=mychannel
anotherName="tanveerjuttvlog"
console.log(mychannel)
console.log(anotherName)
let userOne ={
    email:"tanveer.hussain@gmail.com",
    upi:"hitash@ybl"
}
let userTwo=userOne
userTwo.email="tanveerhussain65@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)