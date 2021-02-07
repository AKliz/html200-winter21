let suits = ['hearts', 'spade', 'diamond', 'clubs']
let cardNumber = 1;
let faces = ['jack', 'queen', 'king', 'ace'];
let deck0 = [];
let deck1 = [];
let deck2 = [];
let deck3 = [];

for (let i = 1; i < 11 ; i++){
  for (let j = 0; j < suits.length; j++){
    if (suits[j] === suits[0]){
        deck0.push(cardNumber +' of ' + suits[j]);
      }
      else if (suits[j] === suits[1]){
        deck1.push(cardNumber +' of ' + suits[j]);
      }
      else if (suits[j] === suits[2]){
        deck2.push(cardNumber +' of ' + suits[j]);
      }
      else{
        deck3.push(cardNumber +' of ' + suits[j]);
      }
  }
  cardNumber++;
}
for (let k = 0; k < suits.length ; k++){
  for (let l = 0; l < faces.length; l++){
      if (suits[k] === suits[0]){
        deck0.push(faces[l] +' of ' + suits[k]);
      }
      else if (suits[k] === suits[1]){
        deck1.push(faces[l] +' of ' + suits[k]);
      }
      else if (suits[k] === suits[2]){
        deck2.push(faces[l] +' of ' + suits[k]);
      }
      else{
        deck3.push(faces[l] +' of ' + suits[k]);
      }
    }
}

console.log(deck0, deck1, deck2, deck3);
