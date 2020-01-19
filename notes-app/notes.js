const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your Notes is awesome. Keep on noting.";
}

const addNote =(title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title;

    });

    if (duplicateNotes.length === 0){
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



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};