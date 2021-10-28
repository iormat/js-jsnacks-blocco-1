/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* 
1. create 2 numeric values from user input
2. check wich variale has the highest value
3. print the results
*/

// 1.
const firstNum = parseInt(prompt("scegli un numero intero:"));
const secondNum = parseInt(prompt("scegli un numero intero:"));

// 2.
if(firstNum > secondNum){
    // 3.
    document.getElementById('results').innerHTML = firstNum;
}else {
    // 3.
    document.getElementById('results').innerHTML = secondNum;
}