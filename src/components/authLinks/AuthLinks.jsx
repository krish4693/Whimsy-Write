import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  // Temporary authentication status
  const status = "notauthenticated";

  return (
    <>
      {status === "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
