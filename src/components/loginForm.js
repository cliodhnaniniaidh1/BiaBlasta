import styles from "../../styles/Login.module.css"
import Link from 'next/link'

export default function LoginForm() {
    return (
        <form>
            <div className={styles.formSignin}>
            <div className={styles.userInput}>
                <input type="username" className="form-control" id="floatingInput" placeholder="Username" />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className={styles.passInput}>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPasswrd">Password</label>
            </div>

            <div className={styles.button}>
               <Link href="/account">Login</Link> 
            </div>  

        </div>
        </form>
    )
}
