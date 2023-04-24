import { useState } from "react";
import validation from "../../validation";
import style from "./Form.module.css";
import image from "../../images/Rick-And-Morty-Logo3.png";

const Form = ( {login} ) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

const [errors, setErrors] = useState({
        email: '',
        password: ''
})

const handleChange = (event) =>{
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
    setErrors(validation({
        ...userData,
        [event.target.name] : event.target.value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
}

    return (
    <div className={style.background}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formContainer}>

             <label htmlFor="email" className={style.formLabel}>Email</label>
             <input name="email" type="email" placeholder="Enter your username..." value={userData.email} onChange={handleChange} className={style.formInput}/>
             {errors.email && <p className={style.formErrors}>{errors.email}</p>}
            
             <label htmlFor="password"  className={style.formLabel}>Password</label>
             <input name="password"  type="password" placeholder="Enter your password" value={userData.password} onChange={handleChange}  className={style.formInput}/>
             {errors.password && <p className={style.formErrors}>{errors.password}</p>}
             <img src={image} alt="Logo" className={style.image}/>

            <button className={style.button} disabled={!userData.email || !userData.password||errors.email||errors.password}>Submit</button>
           
           </div>
        </form>
    </div>
    
    )
}

export default Form