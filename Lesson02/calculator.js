let baby = 1; //age 2

let toddler = baby++; //age 3
let kid = toddler + baby + 5 % 2;  // age 5
let teen = baby * (toddler * kid) - (toddler + kid); // age 13
let adult = (kid - toddler) * (kid + teen) / ++toddler; // age 18


console.log(`baby: ${baby}`)
console.log(`Toddler: ${toddler}`)
console.log(`Kid: ${kid}`)
console.log(`Teenager: ${teen}`)
console.log(`Adult: ${adult}`)
