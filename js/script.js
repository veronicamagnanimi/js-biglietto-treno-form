//prelevo l'id
const formElem = document.getElementById("user-form");
const userInput = document.getElementById("username");
const userKm = document.getElementById("distance");
const userAge = document.getElementById("age");


//elementi della card
const usernameElem = document.getElementById("name-user");
const priceElem = document.getElementById("final-price");
const cardElem = document.querySelector(".card");
const offerElem = document.getElementById("offer");
const carriageElem = document.getElementById("carriage");
const codeElem = document.getElementById("code");


//funzione callback
formElem.addEventListener("submit", function(event) {
    console.log(event);
  event.preventDefault();
  
  //prelevo i valori
  const username = userInput.value.trim();
  const km = parseInt(userKm.value);
  const age = parseInt(userAge.value);


//   console.log(totalPrice(age, km));

  cardElem.classList.remove("d-none");
  formElem.reset();

  //innerHTML
  usernameElem.innerHTML = username;
  priceElem.innerHTML = "€ " + totalPrice(age, km).toFixed(2);
  offerElem.innerHTML = typeOffer(age);
  carriageElem.innerHTML = randomNum(1, 5);
  codeElem.innerHTML = randomNum(1000, 2000);
  });





////////FUNZIONI///////////

//funzione prezzo * età * km
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
    
    


//funzione numero random
  function randomNum(min, max) {
    return(Math.floor(Math.random() * (max-min) + min));
  }


//funzione tipo di offerta
function typeOffer (age) {
    let offerType = "Biglietto Standard";
    if (age < 18) {
        offerType = "Sconto Under18";
    } else if (age > 65) {
        offerType = "Sconto Over65";
    }
    return offerType;
}







   
  
   



