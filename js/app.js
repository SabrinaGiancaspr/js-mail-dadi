// #mail

// -creare un array con dentro le graffe quadre []
//-assegnare variabile 
//-dichiarare variabile con "mail"
//-aprire parentesi quadre
const arrayMails = ["john123@email.com", "sarah456@email.com", "mike789@email.com"]; //-dentro le quadre scrivo tot mail
console.log(arrayMails);


// -creo un prompt per chiedere al utente la sua mail
//-assegnare variabile
//-dichiarare variabile per chiedere la mail
const userMail = prompt('Qual è la tua mail?');
console.log(userMail);

const listArrayMails = arrayMails.length;

let permission = 'no';

// -creare ciclo for per verificare se la mail 
// del utente è uguale a uno degli indirizzi email nell'array
for (let i = 0; i < listArrayMails; i++) {
  let currentMail = arrayMails[i];
  console.log(currentMail);
  // -condizionali
  if (userMail === currentMail) {//-SE la mail dell'utente è uguale a quella che sto scorrendo
    permission = 'si';
    // console.log(permission);//-stampa messaggio positivo
  }
}

console.log(permission);






