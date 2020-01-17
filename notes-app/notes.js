const fs = require('fs');
const chalk = require('chalk');

function getNotes(){
    return "Your Notes is awesome. Keep on noting.";
}

function addNote(title, body){
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes(){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
module.exports = {getNotes, addNote};