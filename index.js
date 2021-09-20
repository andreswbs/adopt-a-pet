const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const {listAnimals} = require('./pets')

//console.log(pets)
app.get('/animals/:pet_type', listAnimals)
app.get('/', (req, res) => {
    return res.send(`
    <h1>Adopt a Pet! </h1>
    <p>
    Browse through the links below to find your new furry friend:
    </p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>

    `)
})

app.listen(port, ()=> console.log(`Server listening on port ${port}`))