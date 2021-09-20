const express = require('express')
const app = express()
const port = process.env.PORT || 5000

function greeting(req, res) {
    const object = {
        greeting: "Hello again"
    }
    return res.json(object)
}

function parameters(req, res) {
    res.json({
        kitchen: req.params.kitchen,
        dish: req.params.dish
    })
}

app.get('/', (req, res) => {
    return res.send(`
    <h1>Adopt a Pet! </h1>
    <p>
    Browse through the links below to find your new furry friend:
    </p>
    
    `)
})

app.listen(port, ()=> console.log(`Server listening on port ${port}`))