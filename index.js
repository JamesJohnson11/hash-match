const express = require('express');
const app = express();
const port = 4000;
const bcrypt = require('bcrypt');
const saltRounds = 10; // USED TO CREATE hashedPw
const plainText = 'ReskillAmericans123'; // USED TO CREATE hashedPw

const hashedPw = '$2b$10$c19r1NhJoRZq0S5LrE.CzOc4NLKLk9xW9pNB7Qwq88jqba7WSG6.6'


app.use(express.json());

/*----------------------------------------------------------------

// CREATED HASHED PW THEN STORED IN hashedPw VARIABLE

bcrypt.hash(plainText, saltRounds, (err, hash) => {
    if (err) {
        return console.error(err);
    } else {
        return console.log(hash);
    }
})

----------------------------------------------------------------*/


// CREATED POST ROUTE @ '/login' 

app.post('/login', (req, res) => {
    const pass = req.body.pass;
    // IF pass === hashedPw RETURN A SUCCESSFUL LOGIN MESSAGE. IF NOT, PW IS INCORRECT
    bcrypt.compare(pass, hashedPw, (err, match) => {
        if (!match) {
            return res.status(500).json({err: "Incorrect password. Please re-enter your password.", match});
        } else {
            return res.status(200).json({ message: "Sucessfully logged in!", match});
        }
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})