const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Orders = require('./models/orders')

require('dotenv').config()

const app = express()
const host = '127.0.0.1'
const port = 7000
app.use(cors())
app.use(express.json())
const mongoUrl = `mongodb+srv://maxstyle:${process.env.PASSWORD}@cluster0.lm9ip.mongodb.net/services?retryWrites=true&w=majority`

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(res => console.log('Connected to db'))
    .catch(e => console.log(e))


app.post('/new_order', (req, res) => {
    console.log(req.body)
    const {name, email, statusHealth, statusDeath, message} = req.body
    const order = new Orders({name, email, statusHealth, statusDeath, message})
    order.save()
        .then((result) => res.send(result))
        .catch(e => {
            console.log(e)
            res.send(e)
        })
})

app.use((req, res, next) => {
    res.status(404).type('text/plain')
    res.send('Not found')
})

app.listen(port, host, function () {
    console.log(`http://${host}:${port}`)
})