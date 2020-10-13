/*income */
var salary = 5000;

/*expense*/
var debts = 2000;
var bills = 1000; 

var extraIncome= 2000;
var promotion = 1.25;




/*intilizing or declering*/
var saving ;


/*calculations */
saving = salary - debts - bills; 
saving - salary - debts - bills;

saving = (salary * promotion + extraIncome - debts - bills)/2;

console.log(saving);



/*sttring */

var firstName = "Elmin";
var capitalFirstName = firstName.toUpperCase();
var lowerCase = firstName.toLowerCase();
var greeting = 'yeah javascript is the best';
var trimmed = greeting.trim();

/*String manipulation */
var specialWord = greeting.substr(0, 3);
var specialSlice = greeting.slice(1,5);
var added = greeting.concat(' and worst')

console.log(firstName);
console.log(typeof firstName);
console.log(capitalFirstName);

console.log(lowerCase);
console.log(specialWord);
console.log(specialSlice);
console.log(greeting.indexOf('y'));
console.log(trimmed);
console.log(added);



/*Arrays */

var countries = ['Bosnia', 'Sweden', 'Denmark', 'Norway', 'Finland', 'Latvia', 'Estonia'];
/* countries.sort(); */
/* countries.splice(1) */
console.log(countries);

countries.splice(countries.indexOf('Sweden'),1);
console.log(countries);
/* console.log(countries[0]); */
function lands(){
 countries.forEach(i => {
     console.log(i);

    });


}
lands();




var users=[];
users.push('Elmin', 'Awesome');
console.log(users);

users.unshift('max');
users.unshift('Elmin'); 
users[2]='Ibrahim';
console.log(users);

/*delete */
users.pop();
users.shift();


/* ! */

const mixedArray = ['Cola', 'Red Bull', 'Monster', 'Apple', 'melons', undefined, 1500, 3780, null, 1800, 'Power King'];

/* mixedArray.splice(5,10);
console.log(mixedArray);
var newArray = mixedArray;
console.log(newArray);
newArray.sort();
console.log(newArray);
newArray.push('Nacco');
console.log(newArray);
console.log(newArray.length); */

/* 2 */
/* var results=[];


console.log(mixedArray.indexOf(null));
console.log(mixedArray.includes(-1));

results.push(mixedArray.includes(-1));
console.log(results);

var message;
message = 'null exist i mixedArray: true / false';
console.log(message); */




/* var strArray = [];
strArray = message.split(' ');
console.log(strArray);

strArray.shift(1);
console.log(strArray);
strArray.pop();
console.log(strArray); */


/* 3 */

var newStr;

/* newStr = mixedArray.toString();
console.log(newStr); */

/* var bestEnergyDrink; 

bestEnergyDrink.slice(Monster);
console.log(bestEnergyDrink); */

var newStr;
newStr = mixedArray;

console.log(newStr);

var strNumber1;
var strNumber2;


 strNumber1 = newStr.slice(-5, -4);
 console.log(strNumber1);

 strNumber2 = newStr.slice(-4, -3);
 console.log(strNumber2);

 var total;

 total = strNumber1 + strNumber2;
 console.log(total);

 var fruitsArray = [];


fruitsArray = newStr.slice(3,5)
console.log(fruitsArray);
fruitsArray.sort();

console.log(`melons are very tasty`);
