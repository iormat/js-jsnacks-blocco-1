/*
Genera un array di 50 numeri random. 
Nell’array non devono esserci doppioni.
*/

/*
1. create empty array
2. create randomizer cycle 
    2.1 check every number in the array with the generated one
3. if not present push in array
*/

// 1.
const numArr = [];
// 2.
for (let i = 0; numArr.length < 5; i++) {
    let randNum = parseInt(Math.floor(Math.random() * 6 + 1));
    console.log("questi sono i numeri generati randomicamente " + randNum);
    // 2.1
    if (numArr.includes(randNum) === false){
    // 3.
    numArr.push(randNum);
    } 
}    
console.log("questo è l'array: " + numArr);
