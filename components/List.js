import { useState } from "react";
import styles from "./List.module.css";
import TodoItem from "./TodoItem";

function List({ datas, setDatas }) {
  const [search, setSearch] = useState("");

  const handleUpdate = (id) => {
    const nextDatas = datas.map((data) =>
      data.id === id ? { ...data, isDone: !data.isDone } : data
    );
    setDatas(nextDatas);
  };

  const handleDelete = (id) => {
    const nextDatas = datas.filter((data) => data.id !== id);
    setDatas(nextDatas);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredDatas = search
    ? datas.filter((data) => data.content.includes(search))
    : datas;

  return (
    <div className={styles.List}>
      <h4>Todo List 🌱</h4>
      <input
        onChange={handleChange}
        value={search}
        type="text"
        placeholder="검색할 내용을 입력하세요"
      />
      {datas.length > 0 ? (
        <ul className={styles.todos_wrapper}>
          {filteredDatas.map((data) => (
            <li key={data.id}>
              <TodoItem
                data={data}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.message_box}>
          <p className={styles.emptymessage}>할 일을 추가해주세요! 😎</p>
        </div>
      )}
    </div>
  );
}

export default List;
