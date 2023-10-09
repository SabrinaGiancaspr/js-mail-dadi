// #mail

// -creare un array con dentro le graffe quadre []
//-assegnare variabile 
//-dichiarare variabile con "mail"
//-aprire parentesi quadre
const mail = ["john123@email.com", "sarah456@email.com", "mike789@email.com"]; //-dentro le quadre scrivo tot mail
console.log(mail)

const arrayMail = mail.length;
// -creo un prompt per chiedere al utente la sua mail
//-assegnare variabile
//-dichiarare variabile per chiedere la mail
const userMail = prompt('Qual è la tua mail?');
console.log(userMail);

// -creare ciclo for per verificare se la mail 
// del utente è uguale a uno degli indirizzi email nell'array

for (let i = 0; i < mail.length; i++) {
  if (userMail === mail[i]) { }
}
// -condizionali
if (userMail === mail) {//-SE la mail dell'utente rientra nella lista del array 
  console.log('si');//-stampa messaggio positivo

} else if (userMail !== mail) {//-ALTRIMENTI SE la mail non esiste nel array 
  console.log('no');//-stampa messaggio negativo
}






