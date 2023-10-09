//-Genera un numero casuale da 1 a 6 per user
const user = Math.floor(Math.random() * 6) + 1;//-const giocatore = Math.floor(Math.random() * 6) + 1
console.log(user);
//-Genera un numero casuale da 1 a 6 per il computer
const computer = Math.floor(Math.random() * 6) + 1;//-const computer = Math.floor(Math.random() * 6) + 1 
console.log(computer);

//-Verifica chi ha vinto 
if (user > computer) {//-SE il numero random dello user è maggiore del computer 
  console.log('user ha vinto')//-ALLORA console.log("Il giocatore vince!")
} else if (computer > user) {//-ALTRIMENTI SE il numero random dello user è minore del computer 
  console.log('il computer ha vinto')//-ALLORA console.log("Il computer vince!")
} else {//ALTRIMENTI quando il punteggio è pari 
  console.log('pareggio')//-ALLORA  console.log("È un pareggio!") 
}






