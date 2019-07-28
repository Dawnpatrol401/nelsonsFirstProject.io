const toggleSwitch = document.getElementById('toggleSwitch');
const fakeConsole = document.getElementById('fake-console');


//MAKE BUTTON HIDE AND SHOW THE CONSOLE
toggleSwitch.addEventListener('click', ()=>{
    if(fakeConsole.style.display=='block'){
        fakeConsole.style.display ='none';
        toggleSwitch.textContent="Show Console";
    }else{
        fakeConsole.style.display='block';
        toggleSwitch.textContent='Hide Console';
    }
});





