const ul = document.getElementsByTagName('ul')[0];
const firstNameLabel = document.getElementById('firstNameLabel');

firstNameLabel.addEventListener('mouseover',()=>{
    var p = document.querySelector('p');
    p.innerText = "I changed it";
    console.log('moused over it');
});
firstNameLabel.addEventListener('mouseout',()=>{
    var p = document.querySelector('p');
    p.innerText = "First Name";
    console.log('moused over it');
});


