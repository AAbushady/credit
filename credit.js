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


//Interest paid is calculated as minimum payment - ((balance * interestRate) / 12)

(function () {
    const minimumRate = .02;
    const interestRate = .18;
    var balance = 1500;

    function displayWelcome() {
        console.log(`This program will determine the time to pay off a credit card and the interest paid based on the current
balance, the interest rate, and the monthly payments made.

Balance on your credit card \$${balance}
             
Interest Rate: ${interestRate * 100}%

Assuming a minimum Payment of ${minimumRate* 100}% of the balance (\$${calculateMinimumPayment(balance, minimumRate)} min)

Your minimum payment would be \$${calculateMinimumPayment(balance,minimumRate).toFixed(2)}
`);
    }

    function calculateMinimumPayment(balance, minimumRate) {
        return balance * minimumRate
    }

    function scheduleHeader() {
        console.log(`PAYOFF SCHEDULE
______________________

Year     Balance     Payment ID     Interest Paid`);
    }

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

    function displayPayment(monthly) {
        var cnt = 1;
        while (monthly.balance > 0) {
            monthly.balance = monthly.balance - (calculateMinimumPayment(balance, minimumRate) - ((monthly.balance * interestRate) / 12))
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
            monthly.interestPayed += (monthly.balance * interestRate) / 12;
            cnt++;
        }
    }

    displayWelcome();
    calculateMinimumPayment(balance, minimumRate);
    scheduleHeader();
    let monthly = processPaymentSchedule(balance, interestRate, minimumRate);
    displayPayment(monthly);
}());
