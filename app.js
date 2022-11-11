//  GETTING USER INPUT
const bill = document.getElementById('bill');
const people = document.getElementById('people');

//  GETTING ALL BUTTONS
const tipbtns = document.querySelectorAll('.btn');
const customTip = document.getElementById('custom');

// ERROR MESSAGE
const errormsg = document.querySelector('.error-text');
const error_people = document.getElementById('people-input');

//  OUTPUT
const reset = document.getElementById('reset');
const tipAmount = document.getElementById('output1');
const total = document.getElementById('output2');
const form = document.getElementById('inputForm');


//  Setting up the bill input
bill.addEventListener('input',setBill);


//  TIP AMOUNT BUTTONS
tipbtns.forEach(btn => {
    btn.addEventListener('click',handleclick);
});

//  CUSTOM TIP
customTip.addEventListener('input',setCustomTip);

//  Setting up the Number of People Input
people.addEventListener('input',setPeople);

//  RESET BUTTON
reset.addEventListener('click',resetvalues);


//  Default Amounts
let tipValue = 0.0;
let billvalue = 0.0; //Default
var numPeople = 0;

//  SetBill Function
function setBill()
{
    billvalue = parseFloat(bill.value);
    console.log(billvalue);

    calculateTip();


}


//  CLICK EVENTS FOR EACH BUTTON
function handleclick(event)
{
    tipbtns.forEach(btn => {
        btn.classList.remove('active-btn');
        
        //set active state
        if(event.target.innerHTML == btn.innerHTML)
        {
            btn.classList.add('active-btn');
            tipValue = parseFloat(btn.value) / 100;
            console.log(tipValue);
        }
    });
    //  Clear custom Tip 
    customTip.value = '';

    calculateTip();
}

//  SetCustomTip function
function setCustomTip()
{
    //  Remove active states for all buttons
    tipbtns.forEach(btn => {
        btn.classList.remove('active-btn');
    })
    tipValue = parseFloat(customTip.value) / 100;
    
    if(tipCustom.value !== ''){
        calculateTip();
    }
}



//  SetPEopleFunction
function setPeople()
{
    numPeople = parseInt(people.value);
    console.log(numPeople);
    if(numPeople <= 0)
    {
        error_people.classList.add('error');
        errormsg.style.visibility='visible';

        //  Timer to last for 5 seconds
        setTimeout(
            function(){
                 error_people.classList.remove('error');
                 errormsg.style.visibility='hidden';
                }, 5000);
    }

    calculateTip();
   
}

//  CALCULATE TIP AMOUNT
function calculateTip()
{
    if(numPeople >= 1)
    {
        let tip = (billvalue * tipValue / numPeople).toFixed(2);
        let totalAmount = (billvalue * (tipValue + 1) / numPeople).toFixed(2);
        tipAmount.textContent = String(tip);
        total.textContent= String(totalAmount);
        reset.disabled = false;
    }
}


//  RESET ALL VALUES
function resetvalues()
{
    tipAmount.textContent = '0.00';
    total.textContent = '0.00';
    bill.value = '';
    people.value = '';
    tipbtns.forEach(btn => {
        btn.classList.remove('active-btn');
    });
    reset.disabled=true;

}




