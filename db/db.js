//this file deals with adding and subtracting from the DB
const fs = require('fs');
const path = require("path");
const util = require("util");

//promisify my read and write functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//new note generator class
class Note {
    constructor(title, text){
        this.title = title;
        this.text = text;

        Note.id++
        this.id = Note.id
    }
    //adds the new note to the database
    async addNote(){
        try {
            let allNotes = [];
            allNotes = await readFileAsync(path.join(__dirname,"../db/db.json"), 'utf8');
            allNotes = JSON.parse(allNotes)
            allNotes.push(this)
            await writeFileAsync(path.join(__dirname,"../db/db.json"),JSON.stringify(allNotes))
            return "note added"
        } catch (err) {
            console.log(err);
      }
    }
}
Note.id = 0;

//delete a note based on id
async function deleteNote(id){
    try {
    let allNotes = await readFileAsync(path.join(__dirname,"../db/db.json"), 'utf8');
    allNotes = JSON.parse(allNotes)
    allNotes.filter(element => element.id !== id)
    } catch (err) {
        console.log(err)
    }
}

module.exports = Note;
// module.exports = deleteNote;