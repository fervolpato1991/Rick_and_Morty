import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () =>{
    const {detailId} = useParams();
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

    return (
        <div>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.gender}</p>
            <p>{character?.species}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail