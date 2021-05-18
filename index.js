const express = require('express');
const app = express();
const port = 4000;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainText = 'ReskillAmericans123';
const hashedPw = ''


bcrypt.hash(plainText, saltRounds)
    .then(hash => {
        hashedPw += hash;
    });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})