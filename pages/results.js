
import styles from '../styles/Results.module.css'
import Image from 'next/image'
import Link from 'next/link'
import sample from '../images/sampleMealA.png'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';

export default function Results() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.main}>
            <h3>Here's what we found!</h3>
            <div className={styles.grid}>
                <div className={styles.card2}>
                    <Link href='/recipe'>
                        <div className={styles.title}>Sample Meal A</div>
                        <div className={styles.description}>
                          <Image
                              src={sample} 
                              alt='Sample Meal A'
                              width={300}
                              height={300}/>
                          <p>Description of meal to be brought in from database </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div>   
  )
}