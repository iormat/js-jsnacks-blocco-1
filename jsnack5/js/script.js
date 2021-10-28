/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*
1. crerate empty array
2. create a variable based on user input (*6)
3. check if odd or even
4. add user number to array if odd
*/

// 1.
const oddArr = [];
// 2.
for (let i = 0; i < 6; i++){
    let userNum = parseInt(prompt('scegli un numero:'));
    // 3.
    if (userNum % 2 !== 0) {
        // 4.
        oddArr.push(userNum);
        console.log(oddArr)
    }
}
