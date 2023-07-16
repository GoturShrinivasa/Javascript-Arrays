/*scenario1
example on let is block scope.
var warrior = 'Ninja';

const screamWarrior = () => {
    let warrior2 = 'Samurai2';
    console.log(warrior, warrior2);
}

screamWarrior();
console.log(warrior, warrior2);//Uncaught ReferenceError: warrior2 is not defined */


/*scenario2
we have a function, inside that function we have returned an object.
this object holds the property shootWarrior and its value is a function that returns the logs
var warrior = 'Ninja';

const screamWarrior = () => {
    let warrior2 = 'Samurai2'
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);// from newWarrior.shootWarrior(); this line got executed
        }
    }
}
const newWarrior = screamWarrior();
newWarrior.shootWarrior();// shootWarrior function will get executed
console.log(warrior, warrior2);//Uncaught ReferenceError: warrior2 is not defined */

/* scenario3
console.log(firstName);// undefined
var firstName = 'shrinivas';
console.log(firstName);// 'shrinivas' */

/* scenario4
const profile = {
    id: 1,
    role: 'frontend developer',
    company: 'xyz'
}

getProfile(); // Error: Cannot access 'getProfile' before initialization.
                 even though getProfile is in global but it is not accessible before its declaration

const getProfile = () => {
    return console.log(profile);
} */


/*scenario5
const profile = {
    id: 1,
    role: 'frontend developer',
    company: 'xyz'
}

getProfile(); //Uncaught TypeError: getProfile is not a function

var getProfile = () => {
    return console.log(profile);
} */

/* scenario6
const profile = {
    id: 1,
    role: 'frontend developer',
    company: 'xyz'
}

getProfile(); //gives profile object as output

function getProfile() {
    return console.log(profile);
} */

// ------------------------------------------------------------
// Local variable

/* example to show multiple function can have same variable names
const function1 = () => {
    var game = 'cricket';
    let players = '11';

    return console.log(`every ${game} team has ${players}`);
}

const function2 = () => {
    var game = 'cricket';
    let players = '11';

    return console.log(`every ${game} team has ${players}`);
}

function1(); //every cricket team has 11 players
function2();
*/
// ------------------------------------------------------------
//Block Scope
/*
const company = 'Microsoft';
const founder = 'Bill gates';

const getCompanyDetails = () => {
    console.log(acquire); // undefined, var variables are hoisted
    if (company == 'Microsoft') {
        let ceo = 'Satya nadella';
        var acquire = 'Open AI';
    }
     console.log(ceo); //Uncaught ReferenceError: ceo is not defined
    console.log(acquire);
     'Open AI' because even though we declared var inside a block, it will be accessible within the function
}
getCompanyDetails();

console.log(acquire);// Uncaught ReferenceError: acquire is not defined
 even though we have declared var acquire inside a function, it is not available outside the function.
*/