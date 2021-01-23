let firstName = "Liz";
let lastName = "Cullivan";
let age = 32;
let legalAge = 16;

let drivingYears = age - legalAge;

if (age > legalAge){
   console.log(`${firstName} ${lastName} can drive. They have been driving for ${drivingYears} years.`)
} else {
  for (let i = 5; i > 0; i--){
      console.log(i);
    }
}
