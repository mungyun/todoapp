import styles from "./TodoItem.module.css";

function TodoItem() {
  return (
    <div className={styles.Todoitem}>
      <input
        onChange={onChangeCheckbox}
        checked={item.isDone}
        type="checkbox"
      />
      <div className="content">{item.content}</div>
      <div className="date">{new Date(item.date).toLocaleDateString()}</div>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
}

export default TodoItem;
