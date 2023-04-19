import style from "./About.module.css";
import image from "../../images/foto.jpg";

const About = () =>{
    return (
        <div className={style.profile}>
            <h1 className={style.title}>About me</h1>
            <h2 className={style.name}>Fernando Volpato</h2>
            <p className={style.description}>I'm a attorney and full stack developer student.I'm actually living in Buenos Aires, Argentina</p>
            <img src={image} alt="foto" className={style.image}/>
        </div>
    )
}

export default About