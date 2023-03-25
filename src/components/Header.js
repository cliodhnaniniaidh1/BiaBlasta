import logo from "../../images/sample.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Component.module.css";
import { useUser } from '@auth0/nextjs-auth0/client'

const HeaderComponent = () => {

  const {user,error,isLoading} = useUser();
  
  if(user){
    return (
      <header>
        <div className={styles.header}>
          <Link href="/">Home</Link>
          <Link href="/pantry">Pantry</Link>
          <Link href="/account">My Account</Link>
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      </header>
    );
  }
  
  if(isLoading) return (
    <header>
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/pantry">Pantry</Link>
    </div>
  </header>
)
  if(error) return <div>{error.message}</div>

  return (
    <header>
        <div className={styles.header}>
          <Link href="/">Home</Link>
          <Link href="/pantry">Pantry</Link>
          <Link href="api/auth/login">Login</Link>
        </div>
      </header>
  
  )

};

export default HeaderComponent;