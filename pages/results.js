
import styles from '../styles/Pantry.module.css'
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
                <div className={styles.card}>
                    <Link href='/recipe'>
                        <h2>Sample Recipe A</h2>
                        <Image
                            src={sample} 
                            alt='Sample Meal A'
                            width={400}
                            height={400}/>
                    </Link>
                </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div>   
  )
}