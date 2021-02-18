//Define variables which include all the prompts

let bankBalance = 0;
let testOverdrawl = 0;
const withdraw = 'Enter an amount to widthdraw';
const deposit = 'Enter an amount to deposit';
const warning = 'Low balance warning - this will make your new balance less than $300. Do you want to proceed? Y or N';

function bank(action) {
  const welcomeMessage = 'Please choose an action: Q to quit; W to widthdraw; D to deposit; B to see balance.';
  do{
    let welcome = prompt(welcomeMessage);
    console.log('starting banking app');
    action = welcome.toUpperCase();
    console.log('RUN ACTION ' + action);
    let money = 0;
    if(action === 'W'){
        console.log('WITHDRAW');
        money = prompt(withdraw);
        money = Number(money);
        testOverdrawl = bankBalance - money;
        if (money < 0 || testOverdrawl <  0){
          alert ("Warning! No Negative Withdraws or Balances Allowed");
        }
        else if (testOverdrawl < 300){
          let proceed = prompt(warning);
          console.log('change to upper case')
          proceed.toUpperCase;
          if (proceed === 'Y'){
            bankBalance = bankBalance - money;
            console.log('withdraw approved and removed');
          }
          else {
            console.log('withdraw declined');
            alert('Widthdraw Cancelled');
          }
        }
        else{
          bankBalance = bankBalance - money;
          alert('New Bank Balance is ' + bankBalance);
        }
        console.log('New Bank Balance is ' + bankBalance);
      }
      else if (action === 'D'){
        console.log('DEPOSIT');
        money = prompt(deposit);
        money = Number(money);
         if (money > 50000){
           alert ("Warning! You've entered an amount over our deposit cap of $50,000.")
         }
         else {
           bankBalance = bankBalance + money;
           alert('New Bank Balance is ' + bankBalance);
           console.log('New Bank Balance is ' + bankBalance);
         }
      }
      else if (action ===  'B'){
        console.log('BALANCE');
        console.log('New Bank Balance is ' + bankBalance);
        alert('New Bank Balance is ' + bankBalance);
      }
      else if (action !== 'Q'){
        alert ('Wrong entry try again.')
      }
      else{
        console.log('invalid entry - exiting');
      }

    } while (action !== 'Q');
  console.log('END OF DO WHILE LOOP')
  alert('EXITING - Your New Bank Balance is ' + bankBalance);
  console.log ('END OF ACTION FUNCTION')
}
