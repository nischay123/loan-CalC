const Amt = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const year = document.querySelector('#years');

const monthlyPayment = document.querySelector('#monthly-payment');

const totalPayment = document.querySelector('#total-payment');

const totalInterest = document.querySelector('#total-interest');



document.querySelector('#loan-form').addEventListener('submit', calculate)

function calculate(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(Runfun , 2000);
    e.preventDefault();
}



function Runfun(){
    
    console.log('cal...')
    const principal = parseFloat(Amt.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
      document.getElementById('loading').style.display = 'none';
      document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById('loading').style.display = 'none';
         console.log('error occured');
        runError('check your fiels correctly');
    }
    
}

var countErrDiv=1;
function runError(err){
if(countErrDiv){
    var errorDiv= document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.id = 'errdiv';
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading display');
    errorDiv.appendChild(document.createTextNode(err));
    card.insertBefore(errorDiv, heading);
    console.log(errorDiv);
    setTimeout(clearError ,3000);
    countErrDiv= 0;
}  
}

function clearError(){
    countErrDiv = 1;
    document.querySelector('#errdiv').remove();
}