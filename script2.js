const form = document.querySelector('#form');

function guessNumber() {

    const random = Math.floor(Math.random() * 10) + 1;

    let number = document.querySelector('#form').value;

    if(number == random) {
        alert('Reponse correct. RANDOM = ' + random);
    }
    else {
        alert('Reponse incorrecte. RANDOM = ' + random);
    }

  }

form.addEventListener('submit', e => {
    e.preventDefault();
    guessNumber();
});
