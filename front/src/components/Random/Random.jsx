import styles from "./Random.module.css"


export default function random({random, id}) {
   
  

   
   
   return (
      <div>
      <button 
      className={styles.random} 
      onClick={() => random(id)}>
         Random
      </button> 
      </div>
   );
}