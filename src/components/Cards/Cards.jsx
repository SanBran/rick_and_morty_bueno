import styles from '../Cards/Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return <div className={styles.divStyles}>
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
   </div>;
}
