import Image from "next/image";
import { Form } from "../ui/form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Home</h1>
      <Form />
    </main>
  );
}
