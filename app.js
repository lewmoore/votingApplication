const express = require('express')
app = express()
const port = 8080

app.listen(port, () => {
    console.log(`You're on port ` + port)
})