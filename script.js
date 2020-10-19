let numberPlace = document.getElementById('number');

function changeColor() {
  if (Number(numberPlace.innerHTML) == 0) {
    document.body.style.backgroundColor = 'white';
  } else if (Number(numberPlace.innerHTML) > 0) {
    document.body.style.backgroundColor = '#3587A4';
  } else {
    document.body.style.backgroundColor = '#88CCF1';
  };
}

function addCount() {
  let number = Number(numberPlace.innerHTML);
  number++;
  numberPlace.innerHTML = number;
  changeColor();
}

function lowerCount() {
  let number = Number(numberPlace.innerHTML);
  number--;
  numberPlace.innerHTML = number;
  changeColor();
}