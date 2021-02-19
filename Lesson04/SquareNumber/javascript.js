//create function & event handler
//alert that takes a number from user
//squares it
//opens a new alert with the result
function squareNum(){
  console.log('running first function');
  let num = prompt("Pick a number to be squared:");
  alert(num +' squared is ' + Math.pow(num,2));
  }

//Take two numbers from the user
//return the result of multiplying them together.
function challenge(){
  console.log('running 2nd function');
  let num1 = prompt("Let's do more math! Pick a Number:");
  let num2 = prompt("Pick a Second Number:");
  alert(num1 + 'x' + num2 + '=' +  num1*num2);
}
//Use event handler to initiat the function
