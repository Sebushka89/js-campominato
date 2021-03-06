/*Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto) 
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80 
con difficoltà 2 => tra 1 e 50

Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, o in pseudo codice, come abbiamo visto oggi, dividiamo il lavoro in micro problemi. 
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

var randomNumbersPc = [];

//funzione per numero random
function getRandom (min, max) {
    if (isNaN(min) || isNaN(max)) {
        alert("Non hai inserito un numero");
      } else {
          var random = Math.floor(Math.random() * (max - min + min) + 1);
    return random;
  }
}
var difficoltà = parseInt( prompt('Scegli difficoltà tra 0, 1 o 2.') );


switch(difficoltà) {
    case 0:
      numMax = 100;
      numbersForWin = 84;
      break;
    case 1:
      numMax = 80;
      numbersForWin = 64;
      break;
    case 2:
      numMax = 50;
      numbersForWin = 34;
      break;
    default:
        alert('LIvello di difficoltà non accettato')
  };

while (randomNumbersPc.length < 16) {
  var cpuRandomNumber = getRandom(1, numMax);
  if(!randomNumbersPc.includes(cpuRandomNumber)) {
    randomNumbersPc.push(cpuRandomNumber);
}
}

console.log(randomNumbersPc.sort());

// Creo un array per i numeri dell'utente
var numeriUtente = [];
var partitaFinita = false;
// Creo un ciclo per i numeri dell'utente che vanno pushati
// solo se non li ripete e se inserisce un numero vietato
// il gioco si ferma

while (numeriUtente.length < numbersForWin && partitaFinita == false) {
  var numeroInserito = parseInt(prompt("inserisci qui il primo di " + numbersForWin + " numeri"));

  if ( numeroInserito <= 0 || numeroInserito > numMax || isNaN(numeroInserito) ) {
  userNumbers = parseInt(prompt('Il dato inserito deve essere un numero compreso tra 0 e ' + numMax));
}
  else if (numeriUtente.length == numbersForWin) {
  document.getElementById('output').innerHTML = ('Hai inserito ' + numeriUtente.length + ' numeri, il numero massimo di tentativi. Hai vinto!');
  console.log('Hai inserito ' + numeriUtente.length + ' numeri, il numero massimo di tentativi. Hai vinto!');
  partitaFinita = true;
}
  else if (numeriUtente.includes(numeroInserito)){
  alert('Hai già inserito questo numero, inseriscine uno nuovo');// se il numero non è uguale a quello già inserito dall'utente
}
  else if (!randomNumbersPc.includes(numeroInserito)){  //che non sia presente nella lista dei numeri generati dal pc
  numeriUtente.push(numeroInserito)// allora pushalo nell'array
}
  else if (randomNumbersPc.includes(numeroInserito)){
  document.getElementById('output').innerHTML = ('hai perso!' + ' I tentativi sono stati ' + numeriUtente.length ); //hai perso
  console.log('i tentativi sono stati ' + numeriUtente.length);
  partitaFinita = true;
} else {
  document.getElementById('output').innerHTML = ('hai perso!' + ' I tentativi sono stati ' + numeriUtente.length ); //hai perso
  console.log('i tentativi sono stati ' + numeriUtente.length);
  partitaFinita = true;
}
}
