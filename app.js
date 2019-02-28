const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`You're on port ` + port)
})