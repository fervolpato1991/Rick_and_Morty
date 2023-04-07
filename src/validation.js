const validation = (userData) =>{
    let errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'el usuario tiene que ser un email';
    }
    if(!userData.email){
        errors.email = 'el usuario no puede estar vacio';
    }
    if(userData.email.length > 35){
        errors.email = 'el usuario no puede tener más de 35 caracteres';
    }
    if(!/\d+/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número';
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'la contraseña debe tener una longitud entre 6 y 10 caracteres';
    }

    return errors;
}

export default validation