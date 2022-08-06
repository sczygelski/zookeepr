const express = require('express')
const app = express()
const { animals } = require('./data/animals.json')


app.get('/api/animals.json', (req, res) => {
    res.json(animals);
})
app.listen(3001, () => {
    console.log(`API server now on pot 3001!`)
})