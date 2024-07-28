import Banner from "../components/Banner/Banner";
import ProductHomeList from "../components/ProductHomeList/ProductHomeList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <Banner />
      <section className={styles["section"]}>
        <ProductHomeList />
      </section>
    </main>
  );
}
