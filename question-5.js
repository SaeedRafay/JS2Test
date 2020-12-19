/**
 * The code below was developed when there was only one password and it worked fine.
 * 
 * The product owner wants to be able to have multiple passwords and a function that adds a new password.
 * Create the addPassword function, update the loginFunction to work with multiple passwords so that the test case at the bottom prints the success line twice
 */

const onSuccess = () => {
    console.log('You are now logged in!');
}

const onFail = () => {
    console.log('The password seems to be incorrect')
}


const loginFunction = (password, successCb, failedCb) => {
    if (password === 'correct' || possiblePasswords.includes(password)) {
        successCb();
    } else {
        failedCb();
    }
}

const addPassword = (newPassword) => {
    // FILL THIS IN
    possiblePasswords.length = 0;
    possiblePasswords.push(newPassword);
}

// DO NOT EDIT THE CODE BELOW THIS LINE! THIS IS TEST CODE THAT MAKES SURE IT WORKS
// Running the code should print:
/* 
You are now logged in!
You are now logged in!
The password seems to be incorrect
*/
const possiblePasswords = ['123456', '123password', 'thesafestpasswordever', 'damnthisisalongpasswordwhowouldwanttotypethiseverytimetheylogin', 'new-password'];

const passwordToAddIdx = Math.floor(Math.random() * possiblePasswords.length);
const passwordToAdd = possiblePasswords[passwordToAddIdx];

const passwordThatShouldFailIdx = passwordToAddIdx === 0 ? 1 : passwordToAddIdx - 1;
const passwordThatShouldFail = possiblePasswords[passwordThatShouldFailIdx];

loginFunction('correct', onSuccess, onFail);
addPassword(passwordToAdd);
loginFunction(passwordToAdd, onSuccess, onFail);
loginFunction(passwordThatShouldFail, onSuccess, onFail);
