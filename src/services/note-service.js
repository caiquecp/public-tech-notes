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
    constructor(repository) {
        this.repository = repository;
    }

    async list() {
        return await this.repository.getAll();
    }

    async create(rawNote) {
        if (!validateNote(rawNote)) {
            throw new InvalidNoteInputError();
        }
        return await this.repository.add(rawNote);
    }
}

module.exports = {
    NoteService,
    InvalidNoteInputError
};