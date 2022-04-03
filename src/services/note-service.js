const fakeDbNotes = [];

class InvalidNoteInputError extends Error { }

const validateNote = (rawNote) => {
    return rawNote.writer
        && typeof rawNote.writer === 'string'
        && rawNote.noteTitle
        && typeof rawNote.noteTitle === 'string'
        && rawNote.note
        && typeof rawNote.note === 'string';
}

class NoteService {
    async list() {
        return fakeDbNotes;
    }

    async create(rawNote) {
        if (!validateNote(rawNote)) {
            throw new InvalidNoteInputError();
        }

        fakeDbNotes.push(rawNote);
        return rawNote;
    }
}

module.exports = {
    NoteService, 
    InvalidNoteInputError
};