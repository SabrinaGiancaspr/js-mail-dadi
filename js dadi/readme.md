#Gioco dei dadi 

-Genera un numero casuale da 1 a 6 per user
 -const giocatore = Math.floor(Math.random() * 6) + 1
-Genera un numero casuale da 1 a 6 per il computer
  -const computer = Math.floor(Math.random() * 6) + 1 

-Verifica chi ha vinto 
  -SE il numero random dello user è maggiore del computer 
    -ALLORA console.log("Il giocatore vince!")
  -ALTRIMENTI SE il numero random dello user è minore del computer 
    -ALLORA console.log("Il computer vince!")
  ALTRIMENTI quando il punteggio è pari 
    -ALLORA  console.log("È un pareggio!") 