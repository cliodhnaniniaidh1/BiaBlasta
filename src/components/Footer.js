import styles from "./Component.module.css";

function FooterComponent() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          <p>Clíodhna Ní Niaidh</p>
          <p>Final Year Project 2023</p>
          <p>Software and Electronic Engineering Year 4</p>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
