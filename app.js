// show error message
function errorMessasge(){
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const incomeField = document.getElementById('income-field').value;
        const failedMessage = document.getElementById('notify-failed');
        if(isNaN(incomeField)==true){
            failedMessage.style.display='block';
        }
    })
}
errorMessasge();

// get income and expence input
function getInput(amount, total, isAdd){
        const inputField = document.getElementById(amount +'-field');
        const inputText= inputField.value;
        const inputValue = parseFloat(inputText);
    if(inputValue>0){ 
        const savingsBalance = document.getElementById('total-'+ total);
        const currentBalance = parseFloat(savingsBalance.innerText);
    if(isAdd == true){
        const newBalance = currentBalance + inputValue;
        savingsBalance.innerText = newBalance;
        inputField.value = '';
    }
    else{
        const newBalance = currentBalance - inputValue;
        savingsBalance.innerText = newBalance;
    }
    }
}

// update total balance and Expence
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('income', 'balance', true);
    getInput('food', 'balance', false);
    getInput('rent', 'balance', false);
    getInput('cloth', 'balance', false);
    getInput('food', 'expence', true);
    getInput('rent', 'expence', true);
    getInput('cloth', 'expence', true);  
})


// set and update savings balance part
document.getElementById('savings-btn').addEventListener('click', function(){
        const inputField = document.getElementById('savings-input');
        const inputText= inputField.value;
        const inputValue = parseFloat(inputText);
        const totalBalanceText = document.getElementById('total-balance').innerText;
        const totlaBalanceValue = parseFloat(totalBalanceText);
        const inputParcent = totlaBalanceValue * inputValue * 0.01 ;

    if(inputValue>0 && inputValue<totlaBalanceValue){ 
        const savingsBalance = document.getElementById('savings-balance');
        const currentBalance = parseFloat(savingsBalance.innerText);
        const newBalance = currentBalance + inputParcent;
        savingsBalance.innerText = newBalance;
        inputField.value = '';
    }
    else{
        const failedMessage = document.getElementById('failed');
        failedMessage.style.display='block';
    }
})

// remining amount update
document.getElementById('savings-btn').addEventListener('click', function(){
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totlaBalanceValue = parseFloat(totalBalanceText);
    const savingsBalanceText = document.getElementById('savings-balance').innerText;
    const savingsBalancevalue = parseFloat(savingsBalanceText);
    const currentRemaining = totlaBalanceValue - savingsBalancevalue;
    
    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalancevalue = parseFloat(remainingBalanceText.innerText);
    
    const totalRemainingBalance = remainingBalancevalue + currentRemaining;
    remainingBalanceText.innerText = totalRemainingBalance;
    
})
