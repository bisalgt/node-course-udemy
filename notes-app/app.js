

const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Bishal Gautam.');

fs.appendFileSync('notes.txt', ' I live in Kalanki.');
console.log(fs.readdirSync('.'));