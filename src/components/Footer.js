import styles from '../../styles/Home.module.css'

function FooterComponent(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <p>Clíodhna Ní Niaidh</p>
            </div>
            <div className={styles.footerText}>
                <p>Project Engineering Semester 1</p>
            </div>
            <div className={styles.footerText}>
                <p>Software and Electronic Engineering Year 4</p>
            </div>
        </div>
    )
}

export default FooterComponent;