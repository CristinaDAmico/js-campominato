/******************
      GENERAL
******************/

//- Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
//- In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
//- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

/***********************
 * INIZIALIZZAZIONE
 * 
 * Setup e creazione bombe
 ***********************/

var numeroMax = 100;                           // Numeri giocabili
var numeroBombe = 16;                          // numero di bombe da generare
var possibilita = numeroMax - numeroBombe;     // possibilità corrette (max - bombe)
var listaBombe = [];                           // numeri vietati (bombe)
var numeriConsentiti = [];                     // numeri corretti inseriti dall utente
var utente = 0;                                // scelta utente

// GEN BOMBE : 16 numeri casuali univoci
while ( listaBombe.length < numeroBombe ) {
    var bomba = numeroRandom(numeroMax);

    if( ! listaBombe.includes(bomba) ) {
        listaBombe.push(bomba);
    }
}

console.log('Lista bombe: ', listaBombe);


/*****************************
 * GAME MAIN LOOP
 * 
 * loop principale gioco
*****************************/

//Se siamo sotto il numero di possibilità? E se sì, la scelta non è una bomba.
while( (numeriConsentiti.length < possibilita) && (! listaBombe.includes(utente)) ) {
    // Scelta utente
    utente = parseInt( prompt('Inserisci un numero da 1 a ' + numeroMax + '\nTentativi riusciti: ' + numeriConsentiti.length + ' di ' + possibilita) );
    // validazione
    while( isNaN(utente) || utente < 1 || utente > numeroMax) {
        utente = parseInt( prompt('Valore non valido! Inserisci un numero da 1 a ' + numeroMax) );
    }
    console.log(utente);

    // Controllo scelta
    if( listaBombe.includes(utente) ) {
        alert('Hai perso :( hai provato con successo ' + numeriConsentiti.length + ' volte prima di trovare la bomba');
    } else if (numeriConsentiti.includes(utente)) {
        alert('Numero già inserito, inseriscine un altro');
    } else if (! numeriConsentiti.includes(utente)) {
        numeriConsentiti.push(utente);
    }

    // Controllare raggiungimento delle possibilità
    if (numeriConsentiti.length === possibilita) {
        alert('Hai vinto! :)');
    }
}

/****************************
 * END DISPLAY
****************************/

console.log('---GAME OVER---');
console.log('Lista numeri validi inseriti: ', numeriConsentiti);
console.log('Tentativi riusciti: ', numeriConsentiti.length);



/******************************
 * UTILITIES
******************************/

function numeroRandom(max) {
    return Math.floor( Math.random() * max ) + 1;
}



