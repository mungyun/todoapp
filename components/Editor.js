import { useState, useRef } from "react";
import styles from "./Editor.module.css";
import { useAtom } from "jotai";
import { datasAtom } from "@/store/atoms";
function Editor() {
  const [value, setValue] = useState("");
  const [datas, setDatas] = useAtom(datasAtom);
  const idRef = useRef(4);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }

    setDatas((prevDatas) => [
      {
        id: idRef.current++,
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
        type="text"
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default Editor;
