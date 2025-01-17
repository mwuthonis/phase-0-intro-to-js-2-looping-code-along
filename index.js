const { getModulesPluginNames } = require("@babel/preset-env");

// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];//empty array to store thank you messages

    for (let i = 0;i < names.length; i++) { //loop thru the names array
        //thankyou messages for each of the message array
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;//Return the message (THANK YOU, ${names[i]}FOR THE WONDERFUL GIFT)
}
//calling the function to output the results on console
console.log(writeCards(["Guadalupe","Ollie","Aki"],"birthday"));

function countDown(startNumber) {
    while (startNumber >= 0) { //Loop until the startNumber reaches 0(condition of the loop)
        debugger; 
        console.log(startNumber);
        startNumber--;//Decrement the number (updation of the loop) 
    }
}
//call the countDown function with a starting number
countDown(10);