const express =require("express");
const path = require("path");
const router = express.Router();
const {Note, deleteNote} = require('./../db/db');

//route for displaying notes from db
router.get('/api/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"../db/db.json"));
})

// adds new notes to db
router.post('/api/notes', async (req,res)=>{
    try {
    const newReq = req.body
    const newNote = new Note(newReq.title, newReq.text)
    await newNote.addNote()
    res.send(newNote)
    } catch (err) {
        console.log(err)
    }
})

// deletes notes
router.delete('/api/notes/:id', async (req,res)=>{
    try
    {
    const id = req.params.id
    await deleteNote(id)
    res.send('deleted')
    }catch(err){
        console.log(err)
    }
    
})

//export my routes
module.exports = router;