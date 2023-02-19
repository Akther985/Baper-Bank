// add event handelar with the withdroaw  button
// step-2: get the withdraw amount from the input field

document.getElementById('btn-Witdwro').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('user-Witdwro');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step-3:
    const withdrawTotallElement = document.getElementById('total-withdrow');
    const previousWithdrawTotalString = withdrawTotallElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-4: calculet totall amount
    const curentWithdrowTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotallElement.innerText = curentWithdrowTotal;

    // STEP-5: SET total withdrow amount 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    // step-6: set affter withdrow balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    //step-7: clier the input field
    withdrawField.value = '';
})