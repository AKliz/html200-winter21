//Define variables which include all the prompts

let bankBalance = 0;
let testOverdrawl = 0;
const withdraw = 'Enter an amount to widthdraw';
const deposit = 'Enter an amount to deposit';
const warning = 'Low balance warning - this will make your new balance less than $300. Do you want to proceed? Y or N';
const welcomeMessage = 'Please choose an action: Q to quit; W to widthdraw; D to deposit; B to see balance.';
const newBankBalance = 'New Bank Balance is'


function bank(open) {
  while (open === true){
    let action = prompt(welcomeMessage).toUpperCase();
    console.log('starting banking app');
    console.log(`RUN ACTION ${action}`);
    let money = 0;
    switch(action){
      case 'W':
        console.log('WITHDRAW');
        money = Number(prompt(withdraw));
        testOverdrawl = bankBalance - money;
        if (money < 0 || testOverdrawl <  0){
            alert ('Warning! No Negative Withdraws or Balances Allowed');
        }
        else if (testOverdrawl < 300){
          let proceed = prompt(warning);
          console.log('change to upper case');
          switch (proceed.toUpperCase()) {
            case 'N':
              console.log(`withdraw declined - entry ${proceed}`);
              alert(`Withdraw cancelled - Bank Balance remains at ${bankBalance}`);
              break;
            case 'Y':
              bankBalance = bankBalance - money;
              console.log('withdraw approved and removed');
              alert(`New Bank Balance is ${bankBalance}`);
              break;
            default:
              alert('Invaild Entry - Try again -Widthdraw Cancelled.');
              console.log(`Invalid entry ${proceed} - withdraw cancelled`);
          }
        }
        else {
          bankBalance = bankBalance - money;
          alert(`${newBankBalance} ${bankBalance}`);
        }
        console.log(newBankBalance);
        break;
      case 'D':
        console.log('DEPOSIT');
        money = Number(prompt(deposit));
        if(money> 50000){
            console.log(`Bank deposit of ${money} declined - over $50,000`);
            alert ("Warning! You've entered an amount over our deposit cap of $50,000.");
        }
        else{
            bankBalance = bankBalance + money;
            alert(`${newBankBalance} ${bankBalance}`);
            console.log(`${newBankBalance} ${bankBalance}`);
          }
        break;
      case 'B':
        console.log('BALANCE');
        console.log(`${newBankBalance} ${bankBalance}`);
        alert(`Current Balance is: ${bankBalance}`);
        break;
      case 'Q':
        open = false;
        alert(`EXITING - Current Balance is: ${bankBalance}`);
        break;
      default:
        alert ('Wrong entry try again.');
        console.log('invalid entry - exiting');
        break;
    }
  }
console.log('END OF DO WHILE LOOP & Bank Function');
}
