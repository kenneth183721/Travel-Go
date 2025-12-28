import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/Travel_Go_Logo.png"
        alt="Travel-Go-logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
