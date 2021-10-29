/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
1. create 2 variables from user input
2. check wich variale is the longest
3. print the smallest 
4. print the longest 
*/

// 1.
const firstWord = prompt("scegli una parola:");
const secondWord = prompt("scegline un'altra:");

// 2.
if(firstWord.length > secondWord.length){
    // 3., 4.
    document.getElementById('results').innerHTML = 
        `${secondWord} &egrave; la parola pi&ugrave; piccola&period; ${firstWord} &egrave; la parola pi&ugrave; lunga`;
}else if (firstWord.length < secondWord.length) {
    // 3., 4.
    document.getElementById('results').innerHTML = 
        `${firstWord} &egrave; la parola pi&ugrave; piccola&period; ${secondWord} &egrave; la parola pi&ugrave; lunga`;
} else {
    document.getElementById('results').innerHTML = 
        `Le parole ${firstWord} e ${secondWord} sono lunghe uguali`;
}
