function convert() {
  const input = document.getElementById('myInput').value;
  const fromSelect = document.getElementById('fromUnit').value;
  const toSelect = document.getElementById('toUnit').value;
  const div = document.getElementById('result');



  const measurement = {
    Kilometer: 1000000,
    Meter: 1000,
    Centimeter: 10,
    Milimeter: 1
  };



  const inMM = measurement[fromSelect];
  const outMM = measurement[toSelect];




  const mm = input * inMM;
  const output = mm / outMM;


  if (isNaN(input)) { alert('Enter valid number.') }

  else {
    div.innerHTML = `<div> ${input} ${fromSelect} is ${output} ${toSelect}</div>`
  }


}