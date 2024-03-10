function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
  
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
  
    document.getElementById('tipAmount').innerHTML = `
      <p>Tip Amount: ₹${tipAmount.toFixed(2)}</p>
      <p>Total Amount: ₹${totalAmount.toFixed(2)}</p>
    `;
  }
  