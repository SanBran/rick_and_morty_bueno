import SearchBar from "../Search/SearchBar";
import styles from './Nav.module.css';
import Random from '../Random/Random'
import { Link } from "react-router-dom";
import React from "react";
import Logout from "../Form/Logout";


export default function Nav(props) {
    
    return (
        <div className={styles.nav}>
        <Link to="/home">
            <h3>HOME</h3>
        </Link>

        <Link to="/about">
            <h3>ABOUT</h3>
        </Link>

        <Link to="/favorites">
            <h3>FAVORITES</h3>
        </Link>
        
        <Random random={props.random}/>

        <SearchBar onSearch= {props.onSearch} />

        <Logout logout={props.logout} />


        </div>
    )
  
 }