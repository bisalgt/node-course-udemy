const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs
yargs.version('1.1.0');

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove old note',
    builder: {
        title :{
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing note with title: ', argv.title);
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command:'list',
    describe: 'List your notes.',
    handler() {
        console.log('List of the values');
    }
})

// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note.',
    handler() {
        console.log('Reading a note done...');
    }
})

// console.log(yargs.argv);
// This is needed to run the yargs.
// this parse the argv so that the above code runs well
// instead of this to call yargs to parse the argument we can
// also call yargs.parse()

yargs.parse();