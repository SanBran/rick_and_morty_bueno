import styles from "../Search/SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }
   
   return (
      <div>
      <input 
      className={styles.input} 
      type='search' 
      onChange={handleChange}
      />
      <button 
      className={styles.button} 
      onClick={() => onSearch(id)}>
         Agregar
      </button> 
      </div>
   );
}
