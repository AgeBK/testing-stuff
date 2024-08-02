import Image from "next/image";
import { Form } from "../../ui/form";
import styles from "./page.module.css";

export default function Category() {
  return (
    <main className={styles.container}>
      <h1>Category</h1>
      <Form />
    </main>
  );
}
