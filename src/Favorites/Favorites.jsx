//import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import style from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import { useState } from "react";

const Favorites = (props) => {
    //const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false);
    
    const handleOrder = (event) => {
        event.preventDefault()
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }
    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
        
    }
    return (<div>
            <select className={style.select} onChange={handleOrder}>
              <option value="order">Order By:</option>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </select>
            <select className={style.select} onChange={handleFilter}>
              <option value="filter">Filter By:</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
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
                origin={origin.name}
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