const maxCredit = [];
const securedCredit = [];

function updateValues() {
    maxCredit.length = 0;
    securedCredit.length = 0;
    const max_credit = document.querySelectorAll('.max-credit input');
    const secured_credit = document.querySelectorAll('.secured-credit input');
    max_credit.forEach((el) => {
        maxCredit.push(Number(el.value));
    });
    secured_credit.forEach((el) => {
        securedCredit.push(Number(el.value));
    });
}

console.log(maxCredit);
console.log(securedCredit);

const button = document.getElementById("butt");

button.addEventListener("click" , ()=> {
    updateValues();
    let userTotal=0;
    let maxTotal=0
    for (let i=0; i<maxCredit.length; i++) {
        userTotal += (maxCredit[i]*securedCredit[i]);
        maxTotal += maxCredit[i];
    }
    const cg = userTotal/maxTotal;
    let grade;
    if (cg==10) grade='A+';
    else if (cg>=9) grade='A';
    else if (cg>=8) grade='B+';
    else if (cg>=7) grade='B';
    else if (cg>=6) grade='C';
    else if (cg>=5) grade='D';
    else grade='F';

    document.getElementById("display").style.display = 'block';
    document.getElementById("cg").innerText = cg;
    document.getElementById("grade").innerText = grade;
    document.getElementById("pass").innerText = 'PASS';
})