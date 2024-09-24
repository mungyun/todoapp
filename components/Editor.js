import { useState, useRef } from "react";
import styles from "./Editor.module.css";
import { v4 as uuidv4 } from "uuid"; // UUID 함수 임포트

function Editor({ setDatas }) {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      inputRef.current.focus();
      return;
    }

    setDatas((prevDatas) => [
      {
        id: uuidv4(),
        content: value,
        isDone: false,
        date: new Date().getTime(),
      },
      ...prevDatas,
    ]);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Editor}>
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default Editor;
