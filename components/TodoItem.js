import styles from "./TodoItem.module.css";

function TodoItem({ data, onDelete }) {
  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <div className={styles.Todoitem}>
      <input type="checkbox" />
      <div className={styles.content}>{data.content}</div>
      <div className={styles.date}>
        {new Date(data.date).toLocaleDateString()}
      </div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
