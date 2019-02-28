const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/poll', (req, res) => {
    fs.readFile(__dirname + '/poll.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

app.post('/vote/new', (req, res) => {
    if(req.body.linux === 'on') {
        choosePollOption(req, res, 'linux')
    } else if(req.body.macos === 'on') {
        choosePollOption(req, res, 'macos')
    } else if ( req.body.windows === 'on') {
        choosePollOption(req, res, 'windows')
    } else {
        res.redirect('/?incorrect+input')
    }
})

const choosePollOption = (req, res, topic) => {
    let poll = {}
    fs.readFile(__dirname + '/poll.json', 'utf8', (err, data) => {
        poll = JSON.parse(data)
        poll[topic] += 1
        fs.writeFile(__dirname + '/poll.json', JSON.stringify(poll), (err, data) => {
            res.status(200).send('Thanks for voting! <a href="/">home</a>')
        }) 
    })
}

app.listen(port, () => {
    console.log(`You're on port ` + port)
})