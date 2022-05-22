import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Utkarsh:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://n.utkarshchourasia.in/" target="_blank" rel="noreferrer">
          Normal website
        </a>
      </p>

      <Terminal />
    </div>
  );
}
