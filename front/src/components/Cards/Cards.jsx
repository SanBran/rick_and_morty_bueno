import styles from './Cards.module.css'
import Card from '../Card/Card';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';
import { useEffect } from 'react';



export default function Cards({characters, onClose}) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites())
   }, [])
   return( 
      
      <div className={styles.divStyles}>
      {characters.map(({id,name,species,gender,image}) => {
         return <Card 
         Key={id}
         id={id}
         name ={name} 
         species={species} 
         gender={gender} 
         image={image}
         onClose={onClose}
            />
      })}
   </div>

   )
}
