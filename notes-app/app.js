const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs
yargs.version('1.1.0');

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note.',
    handler: () => {
        console.log('Adding note~....');
    }
})


// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove old note',
    handler : () => {
        console.log('Removing notes..');
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List your notes.',
    handler: () => {
        console.log('List of the values');
    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note.',
    handler: () => {
        console.log('Reading a note done...');
    }
})

console.log(yargs.argv);
// This is needed to run the yargs.