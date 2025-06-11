// Immediately Invoked Function Expressions (IIFE)

//Globel scope ke polution ko hata na ke liya iife use karte ha 

/**🌍 What is Global Scope Pollution in JavaScript?
Global Scope Pollution happens when too many variables or functions are declared in the global scope, which can lead to:

❌ Name conflicts

🧠 Unexpected overwrites

🐞 Hard-to-find bugs

⚠️ Bad performance in large projects**/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//()-defination,next()->function call

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
