import React from "react";
import NavButton from "./NavButton";
import styles from "./Common.module.scss";

function Navbar() {
    return (
        <div className={styles.Navbar}>
            <NavButton buttonName="Discover" />
            <NavButton buttonName="Map" />
            <NavButton buttonName="Guide" />
        </div>
    );
}

export default Navbar;