// hooks/useLocalStorage.js
import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore); // 상태 업데이트
      localStorage.setItem(key, JSON.stringify(valueToStore)); // 로컬 스토리지에 저장
    } catch (error) {
      console.error(error);
    }
  };

  // 초기값이 로컬 스토리지에서 변할 때마다 업데이트
  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      try {
        setStoredValue(JSON.parse(item));
      } catch (error) {
        console.error(error);
      }
    }
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
