import styles from "../Form/Form.module.css"
import validationUser from "./validationUser";
import validationPass from "./validationPass";
import { useState } from "react";

export default function Form({login}) {

    
    const [userData, setUserData] = useState({username: '', password: ''})
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleInputChangeU = (event) => {
        const property = event.target.name
        const value =event.target.value

        setUserData({...userData, [property]: value});
        validationUser({...userData, [property]: value}, errors, setErrors)
        
    }

    const handleInputChangeP = (event) => {
        const property = event.target.name
        const value =event.target.value

        setUserData({...userData, [property]: value});
        validationPass({...userData, [property]: value}, errors, setErrors)
    }




    const submitHandler = (event) => {
        event.preventDefault();
        login(userData, errors);
        
    }  


    return (

        <form className={styles.container} onSubmit={submitHandler}>
            <div  >
            <label className={styles.user} htmlFor="username">Email </label>
            <input 
            className={styles.iUser}
            type="text" 
            name="username"
            value={userData.username}
            onChange={handleInputChangeU}
            />
            <p className={styles.errorUser}>{errors.username}</p>
            </div>

            <div >
            <label className={styles.pass} htmlFor="password">Password </label>
            <input 
            className={styles.iPass}
            type='text'
            name="password"
            value={userData.password}
            onChange={handleInputChangeP}
            />
            <p className={styles.errorPass}>{errors.password}</p>
            </div>

            <button type="submit" className={styles.button}>Login</button>
        </form>
    )
}