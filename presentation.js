const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const numbers = document.querySelectorAll('.numbers span');
const body = document.querySelector('body'); // Select the body element

let currentPos = 0;

toggle.addEventListener('click', () => {
  currentPos = (currentPos + 1) % 3; // Loop through 0, 1, 2

  // circle.style.left = ${0 + currentPos * 2}em; // Move the circle based on position

  // Optional: Update number colors if you want to highlight the active one
  numbers.forEach((num, idx) => {
    if (idx === currentPos) {
      num.style.color = 'red';
    } else {
      num.style.color = 'white';
    }
  });

  // Retrieve the theme color from localStorage
  let themeColor = localStorage.getItem('themeColor') || 'rgb(59 70 100)';

  // Update theme color
  switch (currentPos) {
    case 0:
      themeColor = 'rgb(59 70 100)';
      break;
    case 1:
      themeColor = '#000';
      break;
    case 2:
      themeColor = '#aaaaaa';
      break;
  }

  // Set the theme color to localStorage
  localStorage.setItem('themeColor', themeColor);

  // Apply theme color to body 
  body.style.backgroundColor = themeColor;
});




const display = document.getElementById('display');



function appendToDisplay(input) {
  if (display.value === '0') {
    display.value = input; // Replace '0' with the clicked number
  } else {
    display.value += input; // Append the clicked number to the existing value
  }
}
function deleteValue(){
  display.value = display.value.toString().slice(0, -1)
}

function clearDisplay(){
  display.value = '0'; 
}

 function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(e){
    display.value = 'Error';
  }
    
}