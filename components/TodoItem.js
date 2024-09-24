import styles from "./TodoItem.module.css";

function TodoItem({ data }) {
  return (
    <div className={styles.Todoitem}>
      <input checked={data.isDone} type="checkbox" />
      <div className={styles.content}>{data.content}</div>
      <div className={styles.date}>
        {new Date(data.date).toLocaleDateString()}
      </div>
      <button>삭제</button>
    </div>
  );
}

export default TodoItem;
