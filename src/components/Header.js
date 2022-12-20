import logo from '../../images/sample.png';
import Image from 'next/image'
import React from "react";
import Link from "next/link"
import styles from './Component.module.css'


function HeaderComponent(){
    return(
        <header>
            <div className={styles.header}>
                {/* <Image src={logo} alt="Bia Blasta logo" height={100}/> */}
                <Link href='/'>Home</Link>
                <Link href='/pantry'>Pantry</Link>
                <Link href='/account'>My Account</Link>
            </div>
        </header>
    )
  }
  export default HeaderComponent;
