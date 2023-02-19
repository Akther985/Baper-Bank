// Step 1: add event handelar on (btn-Deposit)
document.getElementById('btn-Deposit').addEventListener('click', function(){
// step 2: get the deposit amount from the input field
const depositField = document.getElementById('user-Deposit');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// Step 3: get the current tottal deposite amount
// for non-input(element other than input, textarea) use innerText to get the text
const depositTotalElement = document.getElementById('tottal-deposit');
const oldDepositTotalString = depositTotalElement.innerText;
oldDepositTotal = parseFloat(oldDepositTotalString);

const currentDeopsitTotal = oldDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDeopsitTotal;

// step-5: gate total amount 
const balanceTotalElement = document.getElementById('balance-total');
const oldBalanceTotalString = balanceTotalElement.innerText;
const oldBalanceTotal = parseFloat(oldBalanceTotalString);

// step-6: claculet current tottal balance
const  currentBalanceTotal = oldBalanceTotal + newDepositAmount;

// set the balance totall
balanceTotalElement.innerText = currentBalanceTotal;

// step-7: clear the deposite field
depositField.value = "";
})