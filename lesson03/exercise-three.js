//create array that has 5 strings
let skiResorts = ['Alyeska','Okemo', 'Stowe', 'Brighton', 'Vail'];
console.log(skiResorts);

//Use a for loop to console.log all the elements plus the index and a comma

for (let i = 0; i < skiResorts.length; i++){
  let rank = i+1; //making so index count starts at 1 instead of 0
  console.log(`${rank}, ${skiResorts[i]}`);
}
