const fs = require('fs');
const chalk = require('chalk');


const addNote =(title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => { // loops through all the objects
    //     return note.title === title;

    // });

    const duplicateNote = notes.find((note) => note.title === title); // returns the first match only 
    
    debugger
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);
        console.log(chalk.green.bgBlack.inverse.bold('Note added!'));
    } else {
        console.log(chalk.red.bgBlack.inverse.bold('Note title already taken!'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });
    if (duplicateNotes.length === 1){
        console.log('Deleting note: ', title)
        const notesFiltered = notes.filter((note) => {
            return note.title !== title; 
        });
        saveNotes(notesFiltered);
        console.log(chalk.bgGreen('Note removed'))
    }
    else {
        console.log(chalk.bgRed('NOte doesnot exists, add first to delete'));
    }
}

const listNotes = () => {
    console.log(chalk.yellow.inverse('List of Notes :'));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);
    if (noteFound){
        console.log(chalk.yellow.inverse(noteFound.title));
        console.log(noteFound.body);
    } else {
        console.log(chalk.red.inverse('Note doesnot exists!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync ('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};