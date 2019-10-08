/*global console*/
/*jshint esversion:6*/

(function () {
    "use strict";

    // Constants and variables
    const MINIMUMRATE = 0.02;
    const INTERESTRATE = 0.18;
    let balance = 1500;

    // This function will display the welcome that displays what the program does.
    function displayWelcome() {
        console.log(`This program will determine the time to pay off a credit card and the interest paid based on the current
balance, the interest rate, and the monthly payments made.

Balance on your credit card \$${balance}
             
Interest Rate: ${INTERESTRATE * 100}%

Assuming a minimum Payment of ${MINIMUMRATE * 100}% of the balance (\$${calculateMinimumPayment(balance, MINIMUMRATE)} min)

Your minimum payment would be \$${calculateMinimumPayment(balance,MINIMUMRATE).toFixed(2)}
`);
    }

    // This function calculates what the minimum payment is based off of the minimum rate
    // and the balance.
    function calculateMinimumPayment(balance, minimumRate) {
        return balance * minimumRate;
    }

    // This function creates a header for the schedule.
    function scheduleHeader() {
        console.log(`PAYOFF SCHEDULE
______________________

Year     Balance     Payment ID     Interest Paid`);
    }

    let generatePaymentID = (function () {
        let id = 1;
        return function () {
            return id++;
        };
    })();


    // This function creates a monthly object and returns it. It will take in the minimum
    // rate, the interest rate, and the balance as arguements. Inside there is a closure method
    // called generatePaymentID which creates the payment ID that is outputted in the payment
    // schedule.

    function processPaymentSchedule(balance, interestRate, minimumRate) {
        let minimumPayment = calculateMinimumPayment(balance, minimumRate);
        let cnt = 1;
        let year = 1;
        let interest = 0;
        while (balance > 0) {
            interest += (balance * interestRate) / 12;
            let monthly = {
                year: year,
                balance: balance -= (minimumPayment - (balance * interestRate) / 12),
                paymentID: generatePaymentID(),
                interestPayed: interest
            };
            if (cnt % 12 === 0) {
                year++;
            }
            displayPayment(monthly);
            cnt++;
        }
    }

    // Creates the payment schedule using a loop that will use if statements to help with formatting.
    function displayPayment(monthly) {
        if ((monthly.paymentID % 12) - 1 === 0) {
            if (monthly.balance < 0) {
                console.log(`${monthly.year}    \$0.00     ${monthly.paymentID}      \$${monthly.interestPayed.toFixed(2)}`);
            } else {
                console.log(`${monthly.year}        \$${monthly.balance.toFixed(2)}     ${monthly.paymentID}               \$${monthly.interestPayed.toFixed(2)}`);
            }

        } else {
            if (monthly.balance < 0) {
                console.log(`         \$0.00     ${monthly.paymentID}               \$${monthly.interestPayed.toFixed(2)}`);
            } else {
                console.log(`         \$${monthly.balance.toFixed(2)}     ${monthly.paymentID}               \$${monthly.interestPayed.toFixed(2)}`);
            }

        }
    }

    // Call all of the functions to create the payment schedule.

    // Display the welcome.
    displayWelcome();

    // Create the payoff schedule header.
    scheduleHeader();

    // Create monthly with the processPaymentSchedule function.
    processPaymentSchedule(balance, INTERESTRATE, MINIMUMRATE);
})();
