import chalk from 'chalk';
import validator from 'validator';
const result=validator.isEmail('abc@gmail.com');
console.log((result ? chalk.green.inverse(result):chalk.red.inverse(result))); 
