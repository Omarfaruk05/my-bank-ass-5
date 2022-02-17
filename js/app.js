function getInputvalue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
};
function getInnerTextNumber(id){
    const innerHtml = document.getElementById(id);
    const innerText = innerHtml.innerText;
    const innerTextNumber = parseFloat(innerText);
    return innerTextNumber; 
}


// handling calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', function(){
     // get food rent cloths values 
    //  const foodCost = document.getElementById('food-cost')
    //  const foodCostText = foodCost.value;
    //  const foodCostNumber = parseFloat(foodCostText);
    const foodCostNumber = getInputvalue('food-cost');


    //  const rentCost = document.getElementById('rend-cost')
    //  const rentCostText = rentCost.value;
    //  const rentCostNumber = parseFloat(rentCostText);
    const rentCostNumber = getInputvalue('rent-cost');

    //  const clothsCost = document.getElementById('cloths-cost')
    //  const clothsCostText = clothsCost.value;
    //  const clothsCostNumber = parseFloat(clothsCostText);
    const clothsCostNumber = getInputvalue('cloths-cost');
     
     //for total expenses
    if(isNaN(foodCostNumber) == false && isNaN(rentCostNumber) == false && isNaN(clothsCostNumber) == false){
        var totalCostNumber = foodCostNumber + rentCostNumber + clothsCostNumber;

        let totalExpenses = document.getElementById('total-expenses');
        let totalExpensesNumber = getInnerTextNumber('total-expenses');
        totalExpensesNumber = totalCostNumber;
        totalExpenses.innerText = totalExpensesNumber;

        let totalIncomeNumber = getInputvalue('total-income');
        let balanceNumber = getInnerTextNumber('balance');

        balanceNumber = totalIncomeNumber + totalExpensesNumber;
        balance.innerText = balanceNumber;

        // document.getElementById('food-cost').value = '';
        // document.getElementById('rent-cost').value = '';
        // document.getElementById('cloths-cost').value = '';
    }
    else{
        console.log('helloe')
    }
    

});

// handling save button click handler 
document.getElementById('save-btn').addEventListener('click', function(){
    const percentageNumber = getInputvalue('percentage');
    const totalIncomeNumber = getInputvalue('total-income');

    if(0 < percentageNumber <= 100 && totalIncomeNumber > 0){
    let totalSaving = (percentageNumber * totalIncomeNumber) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;
   
    //remaining balance calculate
    let remainingBalance = getInnerTextNumber('remaining-balance');
    let balanceNumber = getInnerTextNumber('balance');
    remainingBalance = balanceNumber - totalSaving;

    // set remaining balance 
    document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else{
        console.log('hi')
    }

})
