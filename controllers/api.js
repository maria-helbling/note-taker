const express =require("express");
const path = require("path");
const router = express.Router();

router.get('/api/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"../db/db.json"));
})

router.post('/api/notes',(req,res)=>{
    const newNote = req.body
    res.json(newNote)
})

router.post('/api/notes/:id',(req,res)=>{
    const newNote = req.body
    res.json(newNote)
})

module.exports = router;