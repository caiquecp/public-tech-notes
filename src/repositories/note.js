const { MongoClient } = require('mongodb');

const config = require('../config')

class NoteRepository {
    constructor() {
        this.client = new MongoClient(config.MONGODB_CONN_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async getAll() {
        try {
            await this.client.connect();
            const notes = await this.client.db(config.MONGODB_DATABASE)
                .collection("notes")
                .find()
                .toArray();
            return notes
        } catch (err) {
            console.error(err);
            await this.client.close();
        }
    }

    async add(note) {
        try {
            await this.client.connect();
            return await this.client.db(config.MONGODB_DATABASE)
                .collection('notes')
                .insertOne(note);
        } catch (err) {
            console.error(err);
            await this.client.close();
        }
    }
}

module.exports = {
    NoteRepository
}