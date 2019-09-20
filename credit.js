(function () {
    // Constants and variables
    const MINIMUMRATE = .02;
    const INTERESTRATE = .18;
    var balance = 1500;

    // This function will display the welcome that displays what the program does.
    function displayWelcome() {
        console.log(`This program will determine the time to pay off a credit card and the interest paid based on the current
balance, the interest rate, and the monthly payments made.

Balance on your credit card \$${balance}
             
Interest Rate: ${INTERESTRATE * 100}%

Assuming a minimum Payment of ${MINIMUMRATE* 100}% of the balance (\$${calculateMinimumPayment(balance, MINIMUMRATE)} min)

Your minimum payment would be \$${calculateMinimumPayment(balance,MINIMUMRATE).toFixed(2)}
`);
    }

    // This function calculates what the minimum payment is based off of the minimum rate
    // and the balance.
    function calculateMinimumPayment(balance, minimumRate) {
        return balance * minimumRate
    }

    // This function creates a header for the schedule.
    function scheduleHeader() {
        console.log(`PAYOFF SCHEDULE
______________________

Year     Balance     Payment ID     Interest Paid`);
    }

    /*
    This function creates a monthly object and returns it. It will take in the minimum
    rate, the interest rate, and the balance as arguements. Inside there is a closure method
    called generatePaymentID which creates the payment ID that is outputted in the payment
    schedule.
    */
    function processPaymentSchedule(balance, interestRate, minimumRate) {
        let monthly = {
            year: 0,
            balance: balance,
            generatePaymentID: function (id) {
                return id++;
            },
            interestPayed: (balance * interestRate) / 12
        }
        return monthly;
    }

    //
    function displayPayment(monthly) {
        var cnt = 1;
        while (monthly.balance > 0) {
            monthly.balance = monthly.balance - (calculateMinimumPayment(balance, MINIMUMRATE) - ((monthly.balance * INTERESTRATE) / 12))
            if ((cnt % 12) - 1 == 0) {
                monthly.year++;
                if (monthly.balance < 0) {
                    console.log(`${monthly.year}    \$0.00     ${monthly.generatePaymentID(cnt)}      \$${monthly.interestPayed.toFixed(2)}`);
                } else {
                    console.log(`${monthly.year}        \$${monthly.balance.toFixed(2)}     ${monthly.generatePaymentID(cnt)}               \$${monthly.interestPayed.toFixed(2)}`);
                }

            } else {
                if (monthly.balance < 0) {
                    console.log(`         \$0.00     ${monthly.generatePaymentID(cnt)}               \$${monthly.interestPayed.toFixed(2)}`);
                } else {
                    console.log(`         \$${monthly.balance.toFixed(2)}     ${monthly.generatePaymentID(cnt)}               \$${monthly.interestPayed.toFixed(2)}`);
                }

            }
            monthly.interestPayed += (monthly.balance * INTERESTRATE) / 12;
            cnt++;
        }
    }

    // Call all of the functions to create the payment schedule.
    
    // Display the welcome.
    displayWelcome();
    
    // Create the payoff schedule header.
    scheduleHeader();
    
    // Create monthly with the processPaymentSchedule function.
    let monthly = processPaymentSchedule(balance, INTERESTRATE, MINIMUMRATE);
    
    // Use displayPayment function to create the entire schedule by looping monthly.
    displayPayment(monthly);
}());
