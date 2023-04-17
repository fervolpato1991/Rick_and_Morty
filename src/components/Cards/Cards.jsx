import Card from '../Card/Card';
import style from "./Cards.module.css";
import image from "../../images/rick-and-morty-foto2.png";

function Cards({characters, onClose}) {
   return (
   <div className={style.characters}>
      <img src={image} alt="foto" className={style.image}/>{
      characters.map(({id,name,status,species,gender,origin,image})=> {
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
      })
      }
   </div>);
}

export default Cards