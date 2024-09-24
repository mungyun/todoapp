import styles from "./List.module.css";

function List() {
  return (
    <div className={styles.List}>
      <h4>Todo List 🌱</h4>

      <input />
      <div className="todos_wrapper"></div>
    </div>
  );
}

export default List;
