function calc() {
    const BA = parseFloat(document.getElementById('bill').value);
    const PA = parseFloat(document.getElementById('paid').value);
    const CA = PA - BA;
    const table = document.getElementById('notes');
    table.innerHTML = "";
    if (BA < 0 || PA < 0) {
        alert("Invalid Input");
        return;
    }
    if (CA < 0) {
        alert("Paid amount must be greater than or equal to bill amount!");
        return;
    }
    const notes= [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let RA = CA;
    let count = {};
    for (let i of notes) {
        if  (RA >= i) {
         count[i] = Math.floor (RA / i);
         RA %= i;
        }
        else count[i] = 0;
    }
    document.querySelector(".table h2").style.display =  'block';
    const tableBody = table.createTBody();

    const row1 = tableBody.insertRow();
    for (let i=0; i<notes.length; i++) {
        const cell = row1.insertCell(i);
        cell.textContent = `₹${notes[i]}`;
    }
    const row2 = tableBody.insertRow();
    for (let i=0; i<notes.length; i++) {
        const cell = row2.insertCell(i);
        cell.textContent = count[notes[i]];
    }
}