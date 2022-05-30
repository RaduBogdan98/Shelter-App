import React from "react";
import styles from "./Common.module.scss";

function NavButton(props: { buttonName: string }) {
    return (
        <button className={styles.NavButton}>{props.buttonName}</button>
    );
}

export default NavButton;