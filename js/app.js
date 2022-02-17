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
    const foodCostNumber = getInputvalue('food-cost');

    const rentCostNumber = getInputvalue('rent-cost');

    const clothsCostNumber = getInputvalue('cloths-cost');
     
     //for total expenses
    if(isNaN(foodCostNumber) == false && isNaN(rentCostNumber) == false && isNaN(clothsCostNumber) == false){
        if(foodCostNumber >= 0 && rentCostNumber >= 0 &&        clothsCostNumber >= 0){
            let totalIncomeNumber = getInputvalue('total-income');
            var totalCostNumber = foodCostNumber + rentCostNumber + clothsCostNumber;
            if(totalCostNumber < totalIncomeNumber){
                let totalExpenses = document.getElementById('total-expenses');
                let totalExpensesNumber = getInnerTextNumber('total-expenses');
                 totalExpensesNumber = totalCostNumber;
                totalExpenses.innerText = totalExpensesNumber;
    
                let balanceNumber = getInnerTextNumber('balance');
    
                balanceNumber = totalIncomeNumber - totalExpensesNumber;
                balance.innerText = balanceNumber;

                const biggerExpenses = document.getElementById('bigger-expenses');
                biggerExpenses.style.display = 'none';
            }
            else{
                const biggerExpenses = document.getElementById('bigger-expenses');
                biggerExpenses.style.display = 'block';
            } 
            const negativeAlert1 = document.getElementById('negative-alert-1');
            negativeAlert1.style.display = 'none';        
        }
        else{
            const negativeAlert1 = document.getElementById('negative-alert-1');
            negativeAlert1.style.display = 'block';
        }
        const stringAlert = document.getElementById('string-alert');
        stringAlert.style.display = 'none';
    }
    else{
        const stringAlert = document.getElementById('string-alert');
        stringAlert.style.display = 'block';
    }
});

// handling save button click handler 
document.getElementById('save-btn').addEventListener('click', function(){
    const percentageNumber = getInputvalue('percentage');
    const totalIncomeNumber = getInputvalue('total-income');
    let remainingBalance = getInnerTextNumber('remaining-balance');
    let balanceNumber = getInnerTextNumber('balance');

    if(percentageNumber >= 0){
        let totalSaving = (percentageNumber * totalIncomeNumber) / 100;
        if(balanceNumber > totalSaving){           
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = totalSaving;
           
            //remaining balance calculate
            remainingBalance = balanceNumber - totalSaving;
        
            // set remaining balance 
            document.getElementById('remaining-balance').innerText = remainingBalance;

            const biggerSaving = document.getElementById('bigger-saving');
            biggerSaving.style.display = 'none';
        }
        else{
            const biggerSaving = document.getElementById('bigger-saving');
            biggerSaving.style.display = 'block';
        }
        const negativeAlert2 = document.getElementById('negative-alert-2');
        negativeAlert2.style.display = 'none';
    }
    else{
        const negativeAlert2 = document.getElementById('negative-alert-2');
        negativeAlert2.style.display = 'block';
    }

})
