/* 

Devo creare una griglia di un tot di celle a seconda del valore del select.
Quando clicchi su una cella deve cambiare il colore dello sfondo e apparire un numero random con un range a seconda della difficoltá selezionata. Il colore dello sfondo cambia a seconda se il numero é pari o dispari.
Devo creare una funzione che estrae randomicamente un numero a seconda della difficoltá selezionata.

    1. Crea una funzione che inserisce i quadratini a seconda della difficoltá;
    2. Creo una funzione che estrae un numero casuale controllando che non sia già stato estratto;
    3. Controllo se il numero é pari o dispari e, a seconda del risultato del controllo, aggiungo una classe odd o even all'innerHTML;
    4. Creo l'evento del click al cui interno chiamo la funzione che mette le classi e il contenuto;

*/



document.getElementById('difficulty-btn').addEventListener('click', getDifficulty);

const grid = document.querySelector('.ap_container')

const arrRandomNumber = [];

// Funzione che determina quanti quadratini devono andare nella griglia a seconda del value del select;


function getDifficulty() {
    const squares = document.querySelector('#difficulty-selector').value; 

    grid.innerHTML = '';
    
    let sq = null;

    for(let i = 0; i < squares; i++){

        sq = document.createElement('div');

        sq.className = 'square square_' + squares;

        grid.appendChild(sq);

        sq.innerHTML = `<span>${getRandomNumber(1, squares)}</span>`;

        sq.addEventListener('click', function(){
            this.classList.add('clicked', 'light')
        });
    }

    console.log(grid);

    const casualNumber = getRandomNumber(1, squares);

}


/**
 *  Estrae un numero random
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}


function checkNumber(){

    let flag = false;

    if(arrRandomNumber.includes(getRandomNumber)){

    }
}
