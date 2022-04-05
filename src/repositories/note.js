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
            const result = await this.client.db(config.MONGODB_DATABASE)
                .collection('notes')
                .insertOne(note);
            note._id = result.insertedId;
            return note;
        } catch (err) {
            console.error(err);
            await this.client.close();
        }
    }

    async removeAll() {
        try {
            await this.client.connect();
            const { deletedCount } = await this.client.db(config.MONGODB_DATABASE)
                .collection('notes')
                .deleteMany();
            return { deletedCount };
        } catch (err) {
            console.error(err);
            await this.client.close();
        }
    }
}

module.exports = {
    NoteRepository
}