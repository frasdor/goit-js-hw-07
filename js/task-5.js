function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;


changeColorBtn.addEventListener('click', () =>{
  console.log('Activation of the background change function');
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;


});



// Zadanie 5

// Napisz skrypt, który po kliknięciu na button.change-color zmienia kolor tła elementu <body> za pomocą stylu inline i przypisuje tę wartość koloru do span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Zauważ, że funkcja getRandomHexColor() zwraca kolor w formacie heksadecymalnym (hex), podczas gdy kolor tła na <body> będzie w formacie rgb. To jest normalne i nie wymaga żadnych poprawek.

// Na co zwróci uwagę mentor podczas sprawdzania:

// Tło na <body> jest ustawiane tylko po kliknięciu na button.change-color.
// Przy każdym kliknięciu na button.change-color tło <body> jest malowane nowym losowym kolorem.
// Na <body> i span.color wartości są tego samego koloru.