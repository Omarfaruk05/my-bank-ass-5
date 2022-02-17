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
        totalExpensesNumber = totalExpensesNumber + totalCostNumber;
        totalExpenses.innerText = totalExpensesNumber;
        let totalIncomeNumber = getInputvalue('total-income');

        let balanceNumber = getInnerTextNumber('balance');

        balanceNumber = totalIncomeNumber - (balanceNumber + totalExpensesNumber);
        balance.innerText = balanceNumber;
    }
    else{
        console.log('helloe')
    }
    // get total expenses value 
    // let totalExpenses = document.getElementById('total-expenses');
    // const totalExpensesText = totalExpenses.innerText;
    // let totalExpensesNumber = parseFloat(totalExpensesText);
    // let totalExpensesNumber = getInnerTextNumber('total-expenses');

    // totalExpensesNumber = totalExpensesNumber + totalCostNumber;
    // totalExpenses.innerText = totalExpensesNumber;

    // get remaining balance 
    // const totalIncome = document.getElementById('total-income')
    // const totalIncomeText = totalIncome.value;
    // let totalIncomeNumber = parseFloat(totalIncomeText);
    // let totalIncomeNumber = getInputvalue('total-income')

    // const balance = document.getElementById('balance');
    // const balanceText = balance.innerText;
    // let balanceNumber = parseFloat(balanceText);
    // let balanceNumber = getInnerTextNumber('balance');

    // balanceNumber = totalIncomeNumber - (balanceNumber + totalExpensesNumber);
    // balance.innerText = balanceNumber;
  

    document.getElementById('food-cost').value = '';
    document.getElementById('rent-cost').value = '';
    document.getElementById('cloths-cost').value = '';
});

// handling save button click handler 
document.getElementById('save-btn').addEventListener('click', function(){
    const percentageInput = document.getElementById('percentage');
    const percentageText = percentageInput.value;
    const percentageNumber = parseFloat(percentageText);

    const totalIncome = document.getElementById('total-income')
    const totalIncomeText = totalIncome.value;
    let totalIncomeNumber = parseFloat(totalIncomeText);

    let totalSaving = (percentageNumber * totalIncomeNumber) / 100;
    const savingAmount = document.getElementById('saving-amount');
   
    //remaining balance
    const remainingBalance = document.getElementById('remaining-balance');

    const balanceInput = document.getElementById('balance');
    const balanceText = balanceInput.innerText;
    let balanceNumber = parseFloat(balanceText);
    remainingBalance.innerText =  balanceNumber - savingAmount;
    savingAmount.innerText = totalSaving;


    percentageInput.value = '';
})
