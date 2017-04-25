// Write a function called `question0` that:
// - Has no parameters
// - Logs the phrase 'Hello JavaScript' exactly


function question0() {
  console.log('Hello JavaScript');
}

question0();




// Write a function called `question1` that:
// - Has no parameters
// - Returns the String 'Hello JavaScript' exactly

function question1() {
  return 'Hello JavaScript';
}

question1();

// Write a function called `question2` that:
// - Has a single parameter
// - Logs the phrase 'Inputted value: [value]' but instead of [value] contains
//   the inputted value

function question2(input) {

  console.log('Inputted value: ' + input);

}

question2(7);






// Write a function called `question3` that:
// - Has two parameters
// - Returns both arguments added together
function question3(param1, param2) {
  return param1 + param2;

}

question3(1, 5);





// Write a function called `question4` that:
// - Has no parameters
// - Calls the function `question2` with the String 'functions in functions'

function question4() {
  question2('functions in functions');
}
question4();

// Modify the function below so that the switch statement is encased in a
// separate function. Additionally, remove the `days` assignment and add it
// as the first parameter so that the days of the week can by dynamically
// inputted. The `for` loop should remain in the `question5` function.

function checkWeekend(param1, param2) {
  switch (param1) {
    case 'Sat' || 'Sun':
      console.log('Hooray! I can\'t wait to ' + param2);
      break;
    default:
      console.log('Better get back to work!');
  }
}
var anything1 = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
var anything2 = 'Music';
var Party = "Have a beer!";

function question5(days, weekendActivity) {

  for (var i = 0; i < days.length; i++) {
    checkWeekend(days[i], weekendActivity);
  }
  return weekendActivity;
}
question5(anything1, Party);

module.exports = {
  question0,
  question1,
  question2,
  question3,
  question4,
  question5
}
