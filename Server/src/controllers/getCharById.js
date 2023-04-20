const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let character = {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.name,
            image: data.image
        }
       return res.writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character));
    })
    .catch(error => {
       return res.writeHead(500, {"Content-type": "text/plain"})
        .end(error.message);
    })
}

module.exports = {getCharById}