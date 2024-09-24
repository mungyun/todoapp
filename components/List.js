import { datasAtom } from "@/store/atoms";
import styles from "./List.module.css";
import { useAtom } from "jotai";
import TodoItem from "./TodoItem";

function List() {
  const [datas] = useAtom(datasAtom);

  return (
    <div className={styles.List}>
      <h4>Todo List 🌱</h4>

      <input />
      <ul className={styles.todos_wrapper}>
        {datas.map((data) => (
          <li key={data.id}>
            <TodoItem data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
