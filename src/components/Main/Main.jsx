import React from "react";
import videoBg from "../../Sources/AbleDelayedFieldmouse.mp4"
import styles from "./Main.module.css"


const Main = () => {
    return (
        <div className={styles.main}>
            <video src={videoBg}  autoPlay muted loop/>
        </div>
    )
}

export default Main