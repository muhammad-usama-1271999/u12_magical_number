#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([{
    name : "magicNumber",
    type : "number",
    message : "find the magic number (0 - 9)",
}]);
let num = Math.floor(Math.random() * 6) + 1;
console.log(num);

if(answer.magicNumber === num){
    console.log(chalk.blueBright("You win , You find the correct number "));
}
else if(answer.magicNumber === (num + 1) || answer.magicNumber === ( num - 1 ) ){
    console.log(chalk.yellowBright("You are very close to magic number"));
}else {
    console.log(chalk.red("You lose this game pleas try again"));
}