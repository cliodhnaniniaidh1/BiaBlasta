
import styles from '../styles/Home.module.css'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';

export default function error() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
      <div className={styles.main}>
        <h3>Sorry this page doesnt exist</h3>
        <h4>Click here to go back to the HomePage</h4>
      </div>
      <FooterComponent></FooterComponent>
    </div>   
  )
}