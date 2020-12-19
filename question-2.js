/**
 * A careless developer has defined the password in such a way that the hack function that was injected below got access to the password.
 * 
 * Edit the code so that the hacker does not get access to the password but the LOGGED IN still shows in the console when the password is correct
 * TIP: You only need to move one line, think of scoping
 */

function loginToAPI() {
    const password = 'donthackmeplease';
    
    if (password === 'donthackmeplease') {
        console.log('LOGGED IN')
    }
}

loginToAPI();

/** EVIL HACKER CODE STARTS HERE. DO NOT EDIT THIS PART */
if (password != undefined) {
    console.log(`Well well, looks like your password is ${password}`);
}