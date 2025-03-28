import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Team Portfolio
            </a>
            <div className={styles.menu}>   
            <img 
                className={styles.menuBtn} 
                src={getImageUrl("nav/menuIcon.png")} 
                alt="menu-button"/>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#homepage">Homepage</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#team">Team</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
