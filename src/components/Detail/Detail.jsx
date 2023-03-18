import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../Detail/Detail.module.css"
import { Link } from "react-router-dom";

export default function Detail() {
    const { detailId } = useParams();

    const [character, setCharacter] = useState({})

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "38b46775c56b.528d02f3101c89a5c099";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
          .then((response) => setCharacter(response.data));
    },[]);

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