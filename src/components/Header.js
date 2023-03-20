import logo from "../../images/sample.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Component.module.css";
import { signOut, useSession } from "next-auth/react";

const HeaderComponent = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
        <header>
        <div className={styles.header}>
          <Link href="/">Home</Link>
          <Link href="/pantry">Pantry</Link>
          Loading...
        </div>
      </header>
    )
  }

  if (status === "authenticated") {
    return (
      <header>
        <div className={styles.header}>
          <Link href="/">Home</Link>
          <Link href="/pantry">Pantry</Link>
          <Link href="/account">My Account</Link>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </header>
    );
  }
  if (status === "unauthenticated") {
    return (
      <header>
        <div className={styles.header}>
          <Link href="/">Home</Link>
          <Link href="/pantry">Pantry</Link>
          <Link href="/api/auth/signin">
            <p>Login</p>
          </Link>
        </div>
      </header>
    );
  }
};

export const getServerSideProps = async (ctx) => {
  // Check if the user is authenticated from the server
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "api/auth/signin",
      },
      props: {},
    };
  }
  return {
    props: {
      session,
    },
  };
};
export default HeaderComponent;
