import styles from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({id,name,species,gender,image,onClose, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true);
         addFavorite({id,name,species,gender,image,onClose, addFavorite, removeFavorite})
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
         {
      isFav ? (
      <button className={styles.rbutton} onClick={handleFavorite}>❤️</button>
      ) : (
      <button className={styles.wbutton} onClick={handleFavorite}>🤍</button>
      )}
         <button className={styles.button} onClick={()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <img className={styles.image} src={image} alt="Card" /> 
         <h2 className={styles.species} >{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
};

const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);