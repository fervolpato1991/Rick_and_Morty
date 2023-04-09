/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import style from "./Card.module.css";

function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.card}>
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <NavLink className={style.link} to={`/detail/${id}`} >
         <h2 className={style.detail}>{name}</h2>
         </NavLink>
         <h2 className={style.description}>{status}</h2>
         <h2 className={style.description}>{species}</h2>
         <h2 className={style.description}>{gender}</h2>
         <h2 className={style.description}>{origin}</h2>
   <img className={style.image} src={image} alt={name} /> 
      </div>
   );
}

export default Card