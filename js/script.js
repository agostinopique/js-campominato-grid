/* 
Quando clicchi su una cella deve cambiare il colore dello sfondo e apparire un numero random con un range a seconda della difficoltá selezionata. Il colore dello sfondo cambia a seconda se il numero é pari o dispari.
Devo creare un algoritmo che estrae randomicamente un numero a seconda della difficoltá selezionata.

    1. Crea una funzione che inserisce i quadratini a seconda della difficoltá;
    2. Creo una funzione che estrae un numero casuale controllando che non sia già stato estratto;
    3. Controllo se il numero é pari o dispari e, a seconda del risultato del controllo, aggiungo una classe odd o even all'innerHTML;
    4. Creo l'evento del click al cui interno chiamo la funzione che mette le classi e il contenuto;

*/

document.getElementById('difficulty-btn').addEventListener('click', getDifficulty)

/**
 * 
 * @param {*} value 
 */
function getDifficulty() {
    const difficulty = document.querySelector('#difficulty-selector').value; 

    if(difficulty === easy) {

    }
    
    let squares;

    for(let i = 0; i > )
}
