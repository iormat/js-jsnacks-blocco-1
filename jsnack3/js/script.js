/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// 1. create a container (array) to store numbers
// 2. fill the array with user chosen numbers (10num)
// 3. sum all chosen number
// 4. print the result


// 1.
const userArr = [];
// 2.
for (let i = 0; userArr.length < 10; i++){
    let userNum = parseInt(prompt('scegli un numero:'));
    userArr.push(userNum);
}
// 3.
let userArrSum = 0;
for(let i = 0; i < userArr.length; i++){
    userArrSum += userArr[i]
}
// 4.
document.getElementById('results').innerHTML = `La somma dei numeri che hai inserito &egrave: ${userArrSum}`;