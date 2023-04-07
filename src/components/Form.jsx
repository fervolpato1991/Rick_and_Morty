import { useState } from "react";
import validation from "../validation";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Enter your username..." value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input name="password"  type="password" placeholder="Enter your password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}

export default Form