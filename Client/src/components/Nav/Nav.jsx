import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from 'react-router-dom';
import style from "./Nav.module.css";

const Nav = ({ onSearch }) =>{
    return (
         <nav className={style.container}>
            <SearchBar className={style.nav} onSearch={onSearch}/>
            <div className={style.menu}>
            <button className={style.button}>
                <NavLink className={style.link} to='/about'>About</NavLink>
            </button>
            
            <button className={style.button}>
                <NavLink  className={style.link} to='/home'>Home</NavLink>
            </button>
            <button className={style.button}>
                <NavLink className={style.link} to='/'>Log out</NavLink>
            </button>
            <button className={style.button}>
                <NavLink className={style.link} to='/favorites'>Favorites</NavLink>
            </button>
            </div>
         </nav>
    )
}

export default Nav