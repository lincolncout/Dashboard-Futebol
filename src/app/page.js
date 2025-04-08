import styles from "./page.module.css";
import Player from "@/pages/Player";
import Header from "@/pages/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header></Header>
        <Player apiKey={process.env.API_KEY}></Player>
      </main>
    </div>
  );
}
