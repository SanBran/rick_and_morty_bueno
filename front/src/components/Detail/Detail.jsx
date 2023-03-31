import useCharacter from "../../Hooks/useCharacter";
import styles from "./Detail.module.css"
import { Link } from "react-router-dom";



const Detail = () => {
    const character = useCharacter()


      return (
        <div className={styles.container}>
            {character.name ? (
                <>
                <h3 className={styles.name}>{character.name}</h3>
                <p className={styles.status}>{character.status}</p>
                <p className={styles.species}>{character.species}</p>
                <p className={styles.gender}>{character.gender}</p>
                <p className={styles.origin}>{character.origin?.name}</p>
                <img className={styles.img} src={character.image} alt="img" />                
                </>
            ) : (
                <h3>Loadign...</h3>
            )}
            <Link to="/home">
            <button 
      className={styles.button} >HOME
      </button> 
      </Link>
        </div>
      )
}

export default Detail