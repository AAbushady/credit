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

const minimumRate = .02;
const interestRate = .18;
var balance = 1500

function displayWelcome() {
    console.log(`This program will determine the time to pay off a credit card and the interest paid based on the current
balance, the interest rate, and the monthly payments made.

Balance on your credit card \$${balance}
             
Interest Rate: ${interestRate * 100}%

Assuming a minimum Payment of ${minimumRate * 100}% of the balance (\$${balance * minimumRate} min)`);
}

function calculateMinimumPayment(balance, minimumRate) {
    return console.log(`
Your minimum payment would be \$${(balance * minimumRate).toFixed(2)}
`);
}

function scheduleHeader() {
    console.log(`PAYOFF SCHEDULE
______________

Year     Balance     Payment ID     Interest Paid`);
}

displayWelcome();
calculateMinimumPayment(balance, minimumRate);
scheduleHeader();
