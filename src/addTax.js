// 3. Write a function that takes in an array of receipt totals (integers) and returns an array of 
// the same totals with added sales tax % (use your local tax %). Format the numbers in 
// the resulting array to have 2 digits after decimal point (i.e. 12.23456 > 12.23) and make sure 
// your array values are still numbers. Use .map() method when necessary.
// For example: [342, 1002, 523] should become [371.92, 1089.67, 568.76], given the tax of 8.875%.

const addTax = arrayReceipts => {

    for (i = 0; i < arrayReceipts.length; i++) {

        if (typeof arrayReceipts[i] !== 'number') {

            return "Please provide a number";
        
        } else if (arrayReceipts[i] <= 0) {
            
            return "I can't work with 0 and negative numbers";
        }
    }

    const total = arrayReceipts.map(receipts => (receipts * 1.08875).toFixed(2));
    
    return total;
};

module.exports = addTax;



