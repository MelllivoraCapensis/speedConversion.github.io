const startValue = document.getElementById('startValue');
const resultValue = document.getElementById('resultValue');
const converButton = document.getElementById('convertButton');
const changeButton = document.getElementById('changeButton');
const startLabel = document.getElementById('startLabel');
const resultLabel = document.getElementById('resultLabel');
let flag = true;
convertButton.addEventListener('click', function() {
	startValue.style.backgroundColor = 'transparent';
	let coefficient = flag ? 1 / 3.6 : 3.6;
	if(!isNaN(startValue.value) && startValue.value > 0)
	  resultValue.value = (startValue.value * coefficient).toFixed(2);
    else
    {
      resultValue.value = '';
      startValue.style.backgroundColor = 'pink'; 
    }
});
changeButton.addEventListener('click', function() {
  startValue.style.backgroundColor = 'transparent';
  startValue.value = '';
  resultValue.value = '';
  let label = startLabel.innerHTML;
  startLabel.innerHTML = resultLabel.innerHTML;
  resultLabel.innerHTML = label;
  flag = !flag;
});