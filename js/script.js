//prelevo l'id
const formElem = document.getElementById("user-form");
const userInput = document.getElementById("username");
const userKm = document.getElementById("distance");
const userAge = document.getElementById("age");

console.log(userInput, userKm, userAge);

//elementi della card
const usernameElem = "";


//funzione callback
formElem.addEventListener("submit", function(event) {
    console.log(event);
  event.preventDefault();
  
  const username = userInput.value.trim();
  const km = parseInt(userKm.value);
  const age = parseInt(userAge.value);

  console.log(totalPrice(age, km));
});
  
  const totalPrice = (eta, kilometri) => {
    let sconto = 0;
    let prezzo = 0;
    let priceKm = 0.21;
   

    if(eta < 18) {
        sconto = 20;
    } else if (eta >= 65) {
        sconto = 40;
    }
    return prezzo = priceKm * kilometri * (100 - sconto) / 100;
  }
   
  
   



