const express = require('express');
const { NoteService, InvalidNoteInputError } = require('../../services/note-service');

const router = express.Router();
const noteService = new NoteService();

router.get('/', async (req, res) => {
    const notes = await noteService.list();
    res.json({items: notes, count: notes.length});
});

router.post('/', async (req, res) => {
    const { writer, noteTitle, note } = req.body;
    const rawNote = { writer, noteTitle, note };
    
    try {
        const createdNote = await noteService.create(rawNote);
        res.json(createdNote);
    } catch (err) {
        res.statusCode = err instanceof InvalidNoteInputError ? 400 : 500;
        res.end();
    }
});

module.exports = router;