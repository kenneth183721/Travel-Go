import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Track every journey,
          <br />
          Let's relive every moment.
        </h1>
        <h2>
          Travel Go turns your trips into a living map so you can see where you
          have been relive the stories. Behind every stop recall the people you
          met and the moments you captured. Feel inspired to discover new places
          and plan the next adventure in your journey
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
