import styles from "./About.module.css";
import PageNav from "../components/PageNav";

export default function About() {
  return (
    <main className={styles.about}>
      <PageNav />

      <section>
        <div>
          <h2>About Travel Go</h2>
          <p>
            Travel Go is a simple travel journal built for visual thinkers. It
            lets you pin every city you visit on an interactive world map, add
            dates and notes, and instantly see your adventures at a glance.
          </p>
          <p>
            Whether you are a frequent flyer or planning your first big trip,
            Travel Go helps you organize memories, spot travel patterns, and
            share your favorite places with friends in a clean, distraction‑free
            interface.
          </p>
        </div>
      </section>
    </main>
  );
}
