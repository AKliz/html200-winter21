const form = document.createElement('form');
form.setAttribute('id', 'formy');
const fields = ['firstName','lastName'];

for (let i = 0; i< fields.length; i++) {
    const label = document.createElement('label');
    label.textContent = fields[i];
    label.setAttribute('for', fields[i]);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', fields[i]);
    

    form.appendChild(label);
    form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent= 'submitty!';

form.addEventListener('submit', function(){
  event.preventDefault(); //prevents it from refreshing the page
  console.log('hi');

  const formData = document.getElementById('formy').elements;
  const submitData = {};

  for(let i = 0; i < formData.length-1; i++){
    const val = document.getElementById('formy').element[i].value;
    const id = document.getElementById('formy').element[i].id;
    console.log("Id: ", id);
    console.log("Value: ", val);
    submitData[id] = val; //assigns it a property (key) and gives it a value (value)
    //submitData data is what is collected from the form and is what you will send up to where ever
  }
  console.log(submitData);
});

form.appendChild(submitButton);


const formContainer = document.getElementById('formContainer');
formContainer.appendChild(form);
