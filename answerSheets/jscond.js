// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var budget = 100
if (budget <= 100){
    console.log("in budget");
} else {
    console.log("not in the budget");
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if (hungry == true){
    console.log("eat some food");
} else {
    console.log(" youre good to go");
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if (trafficLight === "green"){
    console.log("go");
}
else if(trafficLight === "yellow"){
    console.log("caution");
} else{
    console.log("stop");
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var num1 = 1231
var num2 = 5633
if (num1 < num2){
    console.log(`${num2} is greater than ${num1}`);
}
else if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log("they are equal");
}

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 78
if( num % 2 === 0){
    console.log("the number is even");
}
else if( num % 2 === 1){
    console.log("the number is odd");
}
else if (num === 0){
    console.log("the number is zero");
}
else{
    console.log("NOT A NUMBER");
}

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var userGrade = 65
if (userGrade === 100){
console.log(" You got a perfect Score!");
}
else if(userGrade < 100 && userGrade > 89 ){
console.log("You got an A");
}
else if(userGrade < 90 && userGrade > 79 ){
    console.log("You got an B");
}
else if(){

}
else if(){

}
else{
    console.log("NaN");
}

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.