import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./../app/features/todos/page";

export default function Home() {
  return (
    <main>
      <TodoList></TodoList>
    </main>
  );
}
