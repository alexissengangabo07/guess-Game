let intervalInput = document.querySelector('#interval');
let intervalText = document.querySelector('#intervalText');
let nombre = document.querySelector('#nombre');
let form = document.querySelector('#form');
let intervalValue = '';
const dynamicVal = () => {
    intervalValue = intervalInput.value;
    intervalText.textContent = intervalValue * 10;
    nombre.max = intervalValue * 10;
  }
dynamicVal();

intervalInput.addEventListener('change', e => {
   dynamicVal();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(nombre.value != '') {
        guessNumber();
    }
    else {
        alert('Entrer le nombre SVP!!');
    }
});

function guessNumber() {

    const random = Math.floor(Math.random() * 10 * intervalValue) + 1;

    if(nombre.value == random) {
        alert(`GUESS VALUE = ${nombre.value} Reponse Correcte | RANDOM =  ${random} | Interval = de 0 à ${intervalValue * 10}`);
    }
    else {
        alert(`(${nombre.value}) Reponse Incorrecte | RANDOM =  ${random} | Interval = de 0 à ${intervalValue * 10}`);
    }
  }  