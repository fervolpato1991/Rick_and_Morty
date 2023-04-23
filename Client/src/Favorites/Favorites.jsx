//import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import style from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import { useState } from "react";

const Favorites = (props) => {
    //const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const [aux, setAux] = useState(false);
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        
    }
    return (<div>
            <select className={style.select} onChange={handleOrder}>
              <option className={style.options} value="order">Order By:</option>
              <option className={style.options} value="A">Ascendente</option>
              <option className={style.options} value="D">Descendente</option>
            </select>
            <select className={style.select} onChange={handleFilter}>
              <option className={style.options} value="filter">Filter By:</option>
              <option className={style.options} value="Male">Male</option>
              <option className={style.options} value="Female">Female</option>
              <option className={style.options} value="Genderless">Genderless</option>
              <option className={style.options} value="unknown">unknown</option>
              <option className={style.options} value="allCharacters">All Characters</option>
            </select>
        <div className= {style.favorite}>
            {/*favorites?*/props.myFavorites.map(({id, name, status, species, gender,origin, image, onClose}) => {
                return <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin?.name}
                image={image}
                onClose={onClose}
                />
            })}
        </div></div>
    )
}

 const mapStateToprops = (state) => {
     return {
        myFavorites: state.myFavorites,
 
     }
  }

//export default Favorites
export default connect(mapStateToprops, null)(Favorites)