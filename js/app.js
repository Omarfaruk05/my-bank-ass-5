//function for getting input value in number 
function getInputvalue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
};

// function for getting text type elements inner text in number 
function getInnerTextNumber(id){
    const innerHtml = document.getElementById(id);
    const innerText = innerHtml.innerText;
    const innerTextNumber = parseFloat(innerText);
    return innerTextNumber; 
};

// function for display none error message 
function forDidplayNone(id){
    const element = document.getElementById(id);
    element.style.display = 'none';
};

// function for display block error message 
function forDidplayBlock(id){
    const element = document.getElementById(id);
    element.style.display = 'block';
};

// handling calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodCostNumber = getInputvalue('food-cost');
    const rentCostNumber = getInputvalue('rent-cost');
    const clothsCostNumber = getInputvalue('cloths-cost');
     
     //for total expenses
    //  condition for string 
    if(isNaN(foodCostNumber) == false && isNaN(rentCostNumber) == false && isNaN(clothsCostNumber) == false){

        // condition for minuse value 
        if(foodCostNumber >= 0 && rentCostNumber >= 0 && clothsCostNumber >= 0){
            let totalIncomeNumber = getInputvalue('total-income');

            // total expenese summation 
            var totalCostNumber = foodCostNumber + rentCostNumber + clothsCostNumber;

            // condition for bigger income number 
            if(totalCostNumber < totalIncomeNumber){
                let totalExpenses = document.getElementById('total-expenses');
                let totalExpensesNumber = getInnerTextNumber('total-expenses');
                 totalExpensesNumber = totalCostNumber;
                totalExpenses.innerText = totalExpensesNumber;   
                let balanceNumber = getInnerTextNumber('balance');    
                balanceNumber = totalIncomeNumber - totalExpensesNumber;
                balance.innerText = balanceNumber;

                forDidplayNone('bigger-expenses');
            }
            else{

                forDidplayBlock('bigger-expenses')
            } 
            forDidplayNone('negative-alert-1')       
        }
        else{

            forDidplayBlock('negative-alert-1')
        }
;
        forDidplayNone('string-alert')
    }
    else{
;
        forDidplayBlock('string-alert')
    }
});

// handling save button click handler 
document.getElementById('save-btn').addEventListener('click', function(){
    const percentageNumber = getInputvalue('percentage');
    const totalIncomeNumber = getInputvalue('total-income');
    let remainingBalance = getInnerTextNumber('remaining-balance');
    let balanceNumber = getInnerTextNumber('balance');

    // condition minus value 
    if(percentageNumber >= 0){

        // for saving calculation 
        let totalSaving = (percentageNumber * totalIncomeNumber) / 100;
        if(balanceNumber > totalSaving){           
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = totalSaving;

            //remaining balance calculate
            remainingBalance = balanceNumber - totalSaving;
        
            // set remaining balance 
            document.getElementById('remaining-balance').innerText = remainingBalance;

            forDidplayNone('bigger-saving');
        }
        else{

            forDidplayBlock('bigger-saving')
        }
;
        forDidplayNone('negative-alert-2')
    }
    else{

        forDidplayBlock('negative-alert-2')
    }

})
