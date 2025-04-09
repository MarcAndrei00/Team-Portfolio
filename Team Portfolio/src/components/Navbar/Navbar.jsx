import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import logo from "../../../public/logo.png";


export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
            <a className={styles.title} href="/">
                TFVON TECH SOLUTIONS
            </a>
            <div className={styles.menu}> 
            <img 
                className={styles.menuBtn} 
                src={getImageUrl("nav/menuIcon.png")} 
                alt="menu-button"/>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#homepage">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Team</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#team">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
