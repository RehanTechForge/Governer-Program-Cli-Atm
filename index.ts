#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

let myBalance = 10000;
const myPin = 11223;

console.log(chalk.green(`Your Balance is ${myBalance}`));
const pinAnswer = await inquirer.prompt([
    { message: "Enter Your PIN", type: "number", name: "pin" }
]);

if (pinAnswer.pin === myPin) {
    console.log(chalk.green("Correct PIN Code"));
    const options = await inquirer.prompt([
        {
            message: "what you want to do", type: "list", name: "operation", choices: [
                "Withdraw", "Check Balance"
            ]
        }
    ]);

    if (options.operation === "Withdraw") {
        const withdrawAmount = await inquirer.prompt([
            { message: "Enter Amount", type: "number", name: "amount" }
        ]);
        if (withdrawAmount.amount > myBalance) {
            console.log(chalk.red("Insufficient Balance"));
        } else {
            myBalance -= withdrawAmount.amount;
            console.log(chalk.green(`${withdrawAmount.amount} withdraw your account`));
            console.log(chalk.red(`Your Balance is ${myBalance}`));
        }
    } else if (options.operation === "Check Balance") {
        console.log(chalk.green(`Your Balance is ${myBalance}`));
    }
} else {
    console.log(chalk.red("Incorrect PIN Code"));
}

