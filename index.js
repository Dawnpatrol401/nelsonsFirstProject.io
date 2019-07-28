// ==== SETTING CONSTANTS ====

//Constants for hide/ show the console
const toggleSwitch = document.getElementById('toggleSwitch');
const fakeConsole = document.getElementById('fake-console');

//Constants for logging to the fake console
const ul = document.querySelector('ul');


//Events
const pageTitle = document.querySelector('h1');
const formTitle = document.querySelector('h2');
const input_label = document.getElementsByClassName('input_label');
const submitButton = document.getElementById('submitFormButton');
const nameInput = document.getElementById('firstName');
const maleOrFemale = document.getElementById('sex');
const dob = document.getElementById('dob');
const favFood = document.getElementById('fav-food');
const favDesert = document.getElementById('fav-desert');


// ==== ADD FUNCTIONALITY ====
//Make the button hide and show the console.
toggleSwitch.addEventListener('click', ()=>{
    if(fakeConsole.style.display=='block'){
        fakeConsole.style.display ='none';
        toggleSwitch.textContent="Show Console";
    }else{
        fakeConsole.style.display='block';
        toggleSwitch.textContent='Hide Console';
    }
});

//Log events to fake console
// MOUSE OVERS
pageTitle.addEventListener('mouseover',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user moused over the page title " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    ul.appendChild(li);
})
formTitle.addEventListener('mouseover',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user moused over the form title " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    ul.appendChild(li);
})

for(let i = 0; i < input_label.length; i++){
input_label[i].addEventListener('mouseover',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user moused over the input label " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    ul.appendChild(li);
})
}

// BUTTON CLICKS
submitButton.addEventListener('click',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user submitted the form " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    li.style.color = "pink";
    ul.appendChild(li);
});

toggleSwitch.addEventListener('click',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="User Clicked Toggle Switch " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    li.style.color = "red";
    ul.appendChild(li);
});

nameInput.addEventListener('click',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user clicked on the name input box " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    li.style.color = "red";
    ul.appendChild(li);
});

maleOrFemale.addEventListener('click',()=>{
    const li = document.createElement('li');
    var today = new Date();
    li.textContent="The user clicked on the sex input box " + today.getUTCFullYear()+ '-' + today.getMonth() + '-' + today.getUTCDate() + ' ' + today.getTime();
    li.style.color = "red";
    ul.appendChild(li);
});




