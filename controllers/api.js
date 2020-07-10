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
    const result = await newNote.addNote()
    res.send(result)
    } catch (err) {
        console.log(err)
    }
})

// deletes notes
router.get('/api/notes/:id',(req,res)=>{

    res.json(newNote)
})

module.exports = router;