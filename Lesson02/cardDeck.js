let suits = ['hearts', 'spade', 'diamond', 'clubs']
let cardNumber = 1;
let faces = ['jack', 'queen', 'king', 'ace'];
let decka = [];
let deckb = [];
let deckc = [];
let deckd = [];

for (let i = 1; i < 11 ; i++){
  for (let j = 0; j < suits.length; j++){
    let card =cardNumber +' of ' + suits[j];
    if (suits[j] === suits[0]){
  decka.push(card);
    }
    if (suits[j] === suits[1]){
  deckb.push(card);
    }
    if (suits[j] === suits[2]){
  deckc.push(card);
    }
    if (suits[j] === suits[3]){
  deckd.push(card);
    }
  }
  cardNumber++;
}

for (let i = 0; i < 4 ; i++){
  for (let j = 0; j < suits.length; j++){
    let card =faces[i] +' of ' + suits[j];
      if (suits[j] === suits[0]){
  decka.push(card);
    }
    if (suits[j] === suits[1]){
  deckb.push(card);
    }
    if (suits[j] === suits[2]){
  deckc.push(card);
    }
    if (suits[j] === suits[3]){
  deckd.push(card);
    }
  }
  cardNumber++;
}

console.log(decka, deckb, deckc, deckd);
