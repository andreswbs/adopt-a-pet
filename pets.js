const pets = require('./helper')

function listAnimals(req, res) {
    const petsArray = pets[req.params.pet_type]
    let elementsHtml = ''
    petsArray.forEach(element => {
        elementsHtml +=  `
        <li>${element.name}</li>
        `
    });
    res.send(`
    <h1>List of ${req.params.pet_type}</h1>
    <u>${elementsHtml}</ul>
    `)
}

exports.listAnimals = listAnimals
