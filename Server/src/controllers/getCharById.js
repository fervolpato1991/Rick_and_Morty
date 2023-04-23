const URL = `https://rickandmortyapi.com/api/character/`;
const axios = require("axios");

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}${id}`)
    .then(response => {
        const {
            id,
            name,
            status,
            gender,
            species,
            origin,
            image,
            onClose

        } = response.data;
        res.status(200).json({id, name, status, gender, species, origin, image, onClose});
    })
    .catch(error => { return res.status(500).json({message: error.message}) }) 
}

module.exports = {getCharById};