const express = require('express');

const config = require('../config');
const noteRouter = require('./routes/note');

const app = express();

app.use(express.json());
app.use('/notes', noteRouter);

app.listen(config.PORT, () => {
    console.log(`App listening on port ${config.PORT}`);
});