// Fibonacci

// import the Express library
const express = require('express');

// create an instance of the Express application
const app = express();

// cefine the route for the 'fibonacci' that takes numbers as a param
app.get('/fibonacci/:number', (req, res) => {
    
    // parseInt converts the string to a number 
    const number = parseInt(req.params.number);
    
    // check if the number is a Fibonacci number
    if (isFibonacci(number)) {
        // if it is a Fibonacci number, print "Very good. It is Fibonacci."
        res.send("Very good. It is Fibonacci.");
    } else {
        // if it is not a Fibonacci number, print "I can tell this is not a fibonacci number."
        res.send("I can tell this is not a fibonacci number.");
    }
    
});

// function to check if a number is a Fibonacci number
function isFibonacci(number) {
    // initialize the first two numbers in the Fibonacci sequence
    let n1 = 0;
    let n2 = 1;
    
    // iterate until the current Fibonacci number is less than or equal to the input number
    while (n2 <= number) {
        // if the current Fibonacci number is equal to the input number, return true
        if (n2 === number) {
            return true;
        }
        
        // calculate the next Fibonacci number
        let nextTerm = n1 + n2;
        
        // update the values of n1 and n2 for the next iteration
        n1 = n2;
        n2 = nextTerm;
    }
    
    // if the input number is not found in the Fibonacci sequence, return false
    return false;
}

//  listen on port 3000
app.listen(3000, function() {
    console.log('Server started on port 3000');
});