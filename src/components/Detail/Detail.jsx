import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9b821dc054a4.2c27b5a577f845ec9327';

const Detail = () =>{
    const {detailId} = useParams();
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${detailId}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);

    return (
        <div className={style.card}>
            <h1 className={style.name}>{character?.name}</h1>
            <p className={style.description}>{character?.status}</p>
            <p className={style.description}>{character?.gender}</p>
            <p className={style.description}>{character?.species}</p>
            <p className={style.description}>{character?.origin?.name}</p>
            <img className={style.image} src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail