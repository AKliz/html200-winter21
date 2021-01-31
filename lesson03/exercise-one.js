//Step One - Create array with at least 5 strings - print to console
let skiResorts = ['Alyeska', 'Okemo', 'Snowbird', 'Magic', 'Vail'];
console.log(skiResorts, 'START');

//Step Two - Add element to the end of the array - print to console
skiResorts.push('Stowe');
console.log(skiResorts, 'PLUS ONE');

//Step Three - Remove third element - print to console
skiResorts.splice(2,1);
console.log(skiResorts, 'REMOVE THIRD ITEM');

//Step Four - Create string from elements and comma seperate them - print to console
let placesToVisit = skiResorts.join(', ');
console.log(`Resorts I want to visit: ${placesToVisit}`);
