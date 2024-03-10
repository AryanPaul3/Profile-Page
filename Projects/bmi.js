
function calculatebmi() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    var bmi = (weight/(height*height))*10000;
    let string1;
    if(bmi < 18.5) string1 = "underweight"
    else if(bmi < 24.9) string1 = "Normal"
    else if(bmi < 29.9) string1 = "Overweight"
    else if(bmi < 34.9) string1 = "Obesity - I"
    else if(bmi < 39.9) string1 = "Obesity - II"
    else string1 = "Extreme Obesity"
    const ele = document.getElementById('bmiamount')
    document.getElementById('bmiamount').innerHTML = `
      <p>BMI: ${bmi.toFixed(2)}</p>
      <p>Category: ${string1}</p>
    `;
    if(bmi < 18.5) ele.style.color = "#ff8c05"
    else if(bmi < 24.9) ele.style.color = "Green"
    else if(bmi < 29.9) ele.style.color = "Brown"
    else if(bmi < 34.9) ele.style.color = "Red"
    else if(bmi < 39.9) ele.style.color = "Red"
    else ele.style.color = "Red"
  }