const index = require('express')()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const host = '127.0.0.1'
const port = 7000
const mongoUrl = `mongodb+srv://maxstyle:${process.env.PASSWORD}@cluster0.lm9ip.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(res => console.log('Connected to db'))
    .catch(e => console.log(e))

index.use(cors())

index.get('/get_weather', async (req, res) => {

})

index.use((req, res, next) => {
    res.status(404).type('text/plain')
    res.send('Not found')
})

index.listen(port, host, function () {
    console.log(`http://${host}:${port}`)
})