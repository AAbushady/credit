/*
Program must use the following functions:
    displayWelcome:
        Displays welcome message to the user explaining what the program does.

    calculateMinimumPayment:
        Calculates the minimum payment. It should take the balance and interest rate
        as arguements and return the minimum payment.

        The value displplayed for minimum payment will be the one taken from this method.

    generatePaymentID:
        Closue function that generates a new payment id for the payment. Should
        remember the previous id and new generated id should be old one plus
        one. Make the inital id 1.

    processPaymentSchedule:
        This function will display the acutal payment schedule. It should take the
        balance, monthly interest rate, and minium payment as arguements.
        
    displayPayment:
        This function should take the payment object literal and sipaly it on the console.
*/

function displayWelcome() {
    console.log("This program will determine the time to pay off a credit card" +
        " and the interest paid based on the current \n" +
        "balance, the interest rate, and the monthly payments made.");
}

function calculateMinimumPayment(balance, interestRate) {
    
}

displayWelcome();
calculateMinimumPayment();