/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

/*
1. create an array with invited names
2. ask user to put his/her name
3. confront all names into the array with the user name and check if there is a macth
4. tell user if he/she is in the list 
*/

// 1.
const invitedArr = ["Stefano", "Sonia", "Ubaldo", "Michele", "Anna", "Giuseppe", "Adriana"];
// 2.
const userName = prompt("qual è il tuo nome?");
// 3.
let x = false;
for(let i = 0; i < invitedArr.length; i++) {
    if(userName === invitedArr[i]){
        x = true;
    }
}
// 4. 
if(x === true){
    document.getElementById('results').innerHTML = `Sei presente nella lista`;
}else {
    document.getElementById('results').innerHTML = `Mi spiace, non sei nella lista`;
}