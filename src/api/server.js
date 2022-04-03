const express = require('express');

const config = require('../config');
const noteRouter = require('./routes/note-router');

const app = express();

app.use(express.json());
app.use('/notes', noteRouter);

app.listen(config.server.PORT, () => {
    console.log(`App listening on port ${config.server.PORT}`);
});