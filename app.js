const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/poll', (req, res) => {
    fs.readFile(__dirname + '/poll.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`You're on port ` + port)
})