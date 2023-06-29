
let incomes = [];
let expenses = [];

let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let body = document.querySelector('.body');
let btni = document.querySelector('.btni');
let btne = document.querySelector('.btne');

green.addEventListener('click', () =>{
    body.style.background = 'radial-gradient(circle, rgba(97,251,63,1) 0%, rgba(252,196,70,0.9121849423363095) 100%)';
    btni.style.backgroundColor = 'green';
    btne.style.backgroundColor = 'green';
});


red.addEventListener('click', () =>{
    body.style.background = 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(252,196,70,0.9121849423363095) 100%)';
    btni.style.backgroundColor = '#bb3939';
    btne.style.backgroundColor = '#bb3939';
});


blue.addEventListener('click', () =>{
    body.style.background = 'radial-gradient(circle, rgba(63,112,251,1) 0%, rgba(252,196,70,0.9121849423363095) 100%)';
    btni.style.backgroundColor = 'rgb(63,112,251)';
    btne.style.backgroundColor = 'rgb(63,112,251)';
});









let total = document.querySelector('.total')
total.addEventListener('click', function() {
    let incomesString = "Total Incomes:\n"; // добавляем заголовок
    
    for (let i = 0; i < incomes.length; i++) {
      incomesString += "Source: " + incomes[i].description + ", Amount: $" + incomes[i].amount.toFixed(2) + "\n";
    }
    
    let expensesString = "Total Expenses:\n"; // добавляем заголовок
    
    for (let i = 0; i < expenses.length; i++) {
      expensesString += "Source: " + expenses[i].description + ", Amount: $" + expenses[i].amount.toFixed(2) + "\n";
    }
    
    alert(incomesString + expensesString);
});



function addIncome(){
    let descriptionInput = document.getElementById("income_src");
    let amountInput = document.getElementById("income_amount");


    incomes.push({
        description: descriptionInput.value,
        amount: parseFloat(amountInput.value)
    });


    descriptionInput.value = "";
    amountInput.value = "";


    alert("Income added successfully!");

    calculateBudget();

}







function addExpenses(){
    let descriptionInput = document.getElementById("expense_src");
    let amountInput = document.getElementById("expense_amount");

    expenses.push({
        description: descriptionInput.value,
        amount: parseFloat(amountInput.value)
    });

    descriptionInput.value = "";
    amountInput.value = "";

    alert("Income added successfully!");

    calculateBudget();
}


function calculateBudget() {

    let totalIncome = 0;
    for (let i = 0; i < incomes.length; i++) {
        totalIncome += incomes[i].amount;
    }

    let totalExpenses = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    let remainingBudget = totalIncome - totalExpenses;

    let totalIncomeElement = document.getElementById("total_income");
    let totalExpensesElement = document.getElementById("total_expenses");
    let remainingBudgetElement = document.getElementById("remaining_budget");

    totalIncomeElement.textContent = "Your total income is: $" + totalIncome.toFixed(2);
    totalExpensesElement.textContent = "Your total expenses are: $" + totalExpenses.toFixed(2);
    remainingBudgetElement.textContent = "Your remaining budget is: $" + remainingBudget.toFixed(2);
}

calculateBudget();
