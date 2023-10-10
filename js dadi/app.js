
const playButton = document.getElementById("play");


playButton.addEventListener("click", function () {
  //-Genera un numero casuale da 1 a 6 per user
  let user = Math.floor(Math.random() * 6) + 1;//-const giocatore = Math.floor(Math.random() * 6) + 1
  console.log(user, "giocatore");
  //-Genera un numero casuale da 1 a 6 per il computer
  let computer = Math.floor(Math.random() * 6) + 1;//-const computer = Math.floor(Math.random() * 6) + 1 
  console.log(computer, "computer");


  let message

  //-Verifica chi ha vinto 
  if (user > computer) {//-SE il numero random dello user è maggiore del computer 
    message = "hai vinto!!"
    // console.log(vinto)//-ALLORA console.log("Il giocatore vince!")
  }
  else if (computer > user) {
    message = "hai perso!!!!!!"//-ALTRIMENTI SE il numero random dello user è minore del computer 
    // console.log(perso)//-ALLORA console.log("Il computer vince!")
  } else {//ALTRIMENTI quando il punteggio è pari 
    message = "hai pareggiato (lol)"
    // console.log(pareggio)//-ALLORA  console.log("È un pareggio!") 
  }


  let player = user 
  const playerDomElement = document.getElementById("player")
  playerDomElement.innerHTML = player

  let bot = computer
  const botDomElement = document.getElementById("bot")
  botDomElement.innerHTML = bot

  let punti = message 
  const puntiDomElement  = document.getElementById("punti")
  puntiDomElement.innerHTML = punti

});







