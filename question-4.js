/**
 * The developer that wrote the code below tried to make it so that it doesn't get into the 'INITIALISING' block twice.
 * 
 * Besides the obvious answer that the initialise function is called twice, explain what is going wrong.
 * Add your explanation as a comment here:
 * The variable alreadyIntialiased = true on line 28 is inside the setTimeout function scope and that runs after 1000 milliseconds so when the function is called again, the variable alreadyInitialised is still set to false so it goes to the else block of the condition.
 * 
 * 
 * 
 * Now the developer has asked you how you would solve the problem. As mentioned in the comments they cannot change the time it takes to run the lines.
 * Explain to them what they should do in the comment here:
 * Move the variable alreadyInitialised = true on line 28 outside of setTimeout function but inside the else block scope. It will set the alreadyInitialised = true the first time initialise function is called so it would not go to the else block if the initialised function is called again.
 * 
 * 
 */

// REMINDER: DO NOT ACTUALLY CHANGE THE CODE BELOW
let alreadyInitialised = false;

const initialise = () => {
    if (alreadyInitialised) {
        console.log('ALREADY INITIALISED');
    } else {
        console.log('INITIALISING');
        setTimeout(() => {
            // Run initialisation code!
            console.log('INITIALISED')
            alreadyInitialised = true;
        }, 1000); // The developer cannot change the 1000 number in the timeout
    }
}

/** The developer cannot change this code! */
initialise();
setTimeout(initialise, 100);