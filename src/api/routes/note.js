const express = require('express');
const { NoteService, InvalidNoteInputError } = require('../../services/note');
const { NoteRepository } = require('../../repositories/note');

const router = express.Router();
const noteService = new NoteService(new NoteRepository());

const HTTP_CREATED = 201
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;
const HTTP_INTERNAL_SERVER_ERROR = 500;

router.get('/', async (req, res) => {
    const notes = await noteService.list();
    res.json({ items: notes });
});

router.post('/', async (req, res) => {
    const { writer, noteTitle, note } = req.body;
    const rawNote = { writer, noteTitle, note };

    try {
        const createdNote = await noteService.create(rawNote);
        res.statusCode = HTTP_CREATED;
        res.json(createdNote);
    } catch (err) {
        console.error(err);
        res.statusCode = err instanceof InvalidNoteInputError ? HTTP_BAD_REQUEST : HTTP_INTERNAL_SERVER_ERROR;
        res.end();
    }
});

router.delete('/', async (req, res) => {
    try {
        const result = await noteService.deleteAll();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.statusCode = HTTP_INTERNAL_SERVER_ERROR;
        res.end();
    }
})

module.exports = router;