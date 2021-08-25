const router = require('express').Router();

const { readAndAppend, readFromFile } = require('./helpers/fsUtils');

router.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
router.post('/api/notes', (req, res) => {
    console.log(req)
    
    const {title,text} = req.body;
    const newNote = {title,text}
    readAndAppend(newNote,'./db/db.json');

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))


})

module.exports = router

