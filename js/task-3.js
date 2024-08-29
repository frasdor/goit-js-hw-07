const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input',() => {
    const trimmedValue = inputName.value.trim();
    console.log('Trimmed value:', trimmedValue);

    if(trimmedValue === '') {
        return outputName.textContent = 'Anonymous';
    } else {
        return outputName.textContent = trimmedValue;
    }
});


// zamiast if mozna uzyc operatora trojargumentowego nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';



// Zadanie 3

// Napisz skrypt, który podczas wprowadzania tekstu do inputu input#name-input (zdarzenie input) podstawia jego bieżącą wartość do span#name-output jako imię do powitania. Upewnij się, że wartość w inpucie jest oczyszczana z białych znaków na krańcach. Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie powinien pojawić się ciąg "Anonymous".

// Na co zwróci uwagę mentor podczas sprawdzania:

// Element input#name-input nasłuchuje zdarzenie input.
// Podczas wprowadzania tekstu do inputu, jego aktualna wartość jest podstawiana do span#name-output jako imię do powitania.
// Wartość w inpucie jest oczyszczana z białych znaków na krańcach.
// Jeśli input jest pusty lub zawiera tylko spacje, to zamiast imienia w spanie pojawi się ciąg "Anonymous".