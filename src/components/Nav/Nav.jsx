import SearchBar from "../Search/SearchBar";
import styles from '../Nav/Nav.module.css';
import Random from '../Random/Random'
import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Form/Logout";


export default function Nav(props) {
    
    return (
        <div className={styles.nav}>
        <Link to="/about">
            <h3 className={styles.about}>ABOUT</h3>
        </Link>

        <Link to="/home">
            <h3 className={styles.home}>HOME</h3>
        </Link>

        <Link to="/favorites">
            <h3 className={styles.favorites}>FAVORITES</h3>
        </Link>
        
        <Random random={props.random}/>

        <SearchBar onSearch= {props.onSearch} />

        <Logout logout={props.logout} />


        </div>
    )
  
 }