#! /usr/bin/env node

import inquirer from "inquirer";

console.log("/n/t Welcome to number guessing game /n");

const rendomNumber = Math.floor (Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter you Guess number(Number limit form 1 to 5)",
    },
])

if (answer.userGuessedNumber === rendomNumber){
    console.log("Congratulation ! you guess the correct number.");
}else{
    console.log("Sorry, you guess a wrong number");
}
