import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getFavorites, removeFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';
import axios from "axios"
import React from 'react';

function Card({id,name,species,gender,image,onClose, myFavorites}) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()

   const addFavorite = (character) => {
      axios.post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("Ok"))

   }

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con éxito");

   }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true);
         addFavorite({id,name,species,gender,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])  

   return (
      <div className={styles.card}>
            <button className={styles.button} onClick={()=> onClose(id)}>X</button>
         {
            isFav ? (
      <button className={styles.rbutton} onClick={handleFavorite}>❤️</button>
      ) : (
      <button className={styles.wbutton} onClick={handleFavorite}>🤍</button>
      )}
         <nameContainer>
         <Link to={`/detail/${id}`} className={styles.link1}>
         <h2 className={styles.name}>{name}</h2>
         </Link>
         </nameContainer>
         {/* <img className={styles.image} src={image} alt="Card" />  */}
         <h2 className={styles.species} >{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
};

const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);