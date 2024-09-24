import styles from "./TodoItem.module.css";

function TodoItem({ data, onUpdate, onDelete }) {
  const handleDelete = () => {
    onDelete(data.id);
  };

  const handleUpdate = () => {
    onUpdate(data.id);
  };

  return (
    <div className={styles.Todoitem}>
      <input type="checkbox" checked={data.isDone} onClick={handleUpdate} />
      <div className={styles.content}>{data.content}</div>
      <div className={styles.date}>
        {new Date(data.date).toLocaleDateString()}
      </div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
