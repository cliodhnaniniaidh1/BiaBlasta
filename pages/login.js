import Head from 'next/head'
import styles from '../styles/Login.module.css'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';
import {signIn} from "next-auth/react";
import LoginForm from '../src/components/loginForm';

export default function Login() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Head>
            <title>Bia Blasta</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <HeaderComponent></HeaderComponent>
        </div> 
        <div className={styles.main}>
          <div className={styles.login}>
            <p>Login Detail</p>
            <LoginForm />
          </div>
          <div className={styles.signup}>
            <p>Signup Detail</p>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>   
    )
  }