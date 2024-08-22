const marval_heros=["thor","ironman", "spiderman"]
const dc_heros=["superman","flash", "batman"]
//marval_heros.push(dc_heros)
//console.log(marval_heros)
//const Allheros=marval_heros.concat(dc_heros)
//console.log(Allheros)
const all_new_heros= [...marval_heros,...dc_heros] // add two array 
//console.log(all_new_heros)

const another_array=[1,2,3,4,[6,3,9,5],8,9,[2,3,4,[9,10,6],20]] // multiple array convert in single array
const real=another_array.flat(Infinity)
console.log(real)
console.log(Array.isArray("Tanveer"))
console.log(Array.from("Tanveer")) // convert string to array
console.log(Array.from({name:"Tanveer"})) // give empty string
let score1=100
let score2=200
let scor3=300
console.log(Array.of(score1,score1,scor3)) // convert multiple variable in array