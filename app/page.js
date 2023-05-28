import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/DIGI.png" alt="LOGO" width={500} height={500} priority />
    </main>
  );
}
