let displayCount = document.getElementById('display');
let countDisplay = document.getElementById('save-number');

let count = 0;

const numberIncrement = () => {
  count ++;
  displayCount.textContent = count
}

const saveCounter = () => {
  let saveNumber = " " + count + " - "
  countDisplay.textContent += saveNumber;
  //code to restart
  displayCount.textContent = 0;
  count = 0;
}
































