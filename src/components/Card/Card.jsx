/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import style from "./Card.module.css";

function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`} >
         <h2>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
   <img src={image} alt={name} /> 
      </div>
   );
}

export default Card