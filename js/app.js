// function totalCost(){
//     // get food rent cloths values 
//     const foodCost = document.getElementById('food-cost').value;
//     const foodCostNumber = parseFloat(foodCost);
//     const rentCost = document.getElementById('rend-cost').value;
//     const rentCostNumber = parseFloat(rentCost);
//     const clothsCost = document.getElementById('cloths-cost').value;
//     const clothsCostNumber = parseFloat(clothsCost);
    
//     //for total expenses
//     const summation = foodCostNumber + rentCostNumber + clothsCostNumber;

// }


// handling calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', function(){
     // get food rent cloths values 
     const foodCost = document.getElementById('food-cost')
     const foodCostText = foodCost.value;
     const foodCostNumber = parseFloat(foodCostText);
     const rentCost = document.getElementById('rend-cost')
     const rentCostText = rentCost.value;
     const rentCostNumber = parseFloat(rentCostText);
     const clothsCost = document.getElementById('cloths-cost')
     const clothsCostText = clothsCost.value;
     const clothsCostNumber = parseFloat(clothsCostText);
     
     //for total expenses
     const totalCostNumber = foodCostNumber + rentCostNumber + clothsCostNumber;
    
    // get total expenses value 
    let totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;
    let totalExpensesNumber = parseFloat(totalExpensesText);
    totalExpensesNumber = totalExpensesNumber + totalCostNumber;
    totalExpenses.innerText = totalExpensesNumber;

    // get remaining balance 
    const totalIncome = document.getElementById('total-income')
    const totalIncomeText = totalIncome.value;
    let totalIncomeNumber = parseFloat(totalIncomeText);
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    let balanceNumber = parseFloat(balanceText);
    balanceNumber = totalIncomeNumber - (balanceNumber + totalExpensesNumber);
    balance.innerText = balanceNumber;
  


    foodCost.value = '';
    rentCost.value = '';
    clothsCost.value = '';
    totalIncome.value = '';
    


})

