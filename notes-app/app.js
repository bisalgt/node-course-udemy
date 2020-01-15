

const getNotes = require('./notes');

const chalk = require('chalk');


const notes = getNotes();

console.log(notes);

// Order doesnot matters

console.log(chalk.bgGreen(notes));
console.log(chalk.green(notes));
console.log(chalk.green.bgRed(notes));
console.log(chalk.green.bgYellow.bold(notes));
console.log(chalk.red.bgBlue(notes));
console.log(chalk.inverse.red.bgBlack.bold(notes));
console.log(chalk.red.bgBlack.bold(notes));
console.log(chalk.bgKeyword('red')(notes));
console.log(chalk.bold.red.bgKeyword('white')(notes));