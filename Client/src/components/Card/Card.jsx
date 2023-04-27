/* eslint-disable no-unused-vars */
import { Link, NavLink, useLocation } from 'react-router-dom';
import style from "./Card.module.css";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({id,name,status,species,gender,origin,image,onClose, addFav,removeFav,myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const location = useLocation();

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id,name,status,species,gender,origin,image,onClose})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   return (
      <div className={style.card}>
         { isFav ? (<button className= {style.favorite} onClick={handleFavorite}>❤️</button>) : (<button className= {style.favorite} onClick={handleFavorite}>🤍</button>)}
        {location.pathname !=="/favorites" && <button className={style.button} onClick={() => onClose(id)}>X</button>}
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

const mapDispatchToProps =(dispatch) => {
   return {
     addFav: (characters) => dispatch (addFav(characters)),
     removeFav: (id) => dispatch (removeFav(id))   
   }
 }
const mapStateToprops = (state) => {
   return {
      myFavorites: state.myFavorites,

   }
}

export default connect(mapStateToprops, mapDispatchToProps)(Card)