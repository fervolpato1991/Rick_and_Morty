import {useState} from "react";
import style from "./SearchBar.module.css";

function SearchBar({onSearch}){
   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div  className={style.searchbar}>
         <input type='search' onChange={handleChange} value={id} className={style.input}/>
         <button className={style.searchbutton} onClick={() => {onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}

export default SearchBar