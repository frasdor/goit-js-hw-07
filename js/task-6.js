function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('div#boxes');



const createBoxes = (amount) => {
  console.log(`Creating ${amount} boxes`);
  console.log(`Number of boxes before adding: ${boxes.children.length}`)

  const BASE_SIZE = 30;
  const SIZE_RATIO = 10;

  // Tworzenie nowych pudelek
  const freshBoxes = Array.from({ length: amount}, (_, i) => {

    const size = `${BASE_SIZE + (i + boxes.children.length) * SIZE_RATIO}px`;

    const box = document.createElement('div');
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();

    return box;
  });
  
  const fragment = document.createDocumentFragment();
  fragment.append(...freshBoxes);

  //dodawanie nowych pudelek na koncu konternera
  boxes.append(fragment);

  console.log(`Number of boxes after adding: ${boxes.children.length}`);


  // resetowanie pola input
  document.querySelector('input').value = '';
};

const destroyBoxes = ()=> {
  console.log(`Number of boxes before removing: ${boxes.children.length}`);
  //usuwanie wszsytkich dzieci kontenera
  boxes.replaceChildren();

  console.log(`Number of boxes after removing: ${boxes.children.length}`);
};

document.querySelector('button[data-create]').addEventListener('click', ()=> {
  const amount = parseInt(document.querySelector('input').value, 10);

  if(amount < 1 || amount > 100){
      alert('Amount must be between 1 and 100.');
    return;
  }
  createBoxes(amount);

});

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);