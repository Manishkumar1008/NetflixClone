export const  validateData = (email,password,name) =>{
    const isValidName = (/^[A-Za-z ]+$/).test(name)


    const isValidEmail = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
    // At least 8 characters, one uppercase, one lowercase, one number, one special character
    const isValidPassword = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password);

    if(!isValidName)
        return "Name is not valid"

    if(!isValidEmail)
        return "Email is not valid"
    if(!isValidPassword)
        return "Password is not valid"

    return null

}