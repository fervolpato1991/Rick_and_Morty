let myFavorites= [];

const postFav = (req, res) => {
    const { 
        id, 
        name, 
        status, 
        species, 
        gender, 
        origin, 
        image, 
        onClose } = req.body;
        
        if(!id){
            return res.status(400).json({message: "Missing Character id"});
        }

    const character = {
        id, 
        name, 
        status, 
        species, 
        gender, 
        origin, 
        image, 
        onClose
    }
    myFavorites.push(character);

    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const {id} = req.params

    const filterFavorites = myFavorites.filter(character => character.id !== +id)

    myFavorites = filterFavorites;

    if(!id){
        return res.status(404).json({message: "Missing Character id"});
    }
    return res.status(200).json(myFavorites);
}

module.exports= {
    postFav,
    deleteFav
}