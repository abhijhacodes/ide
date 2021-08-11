import { useState, useEffect } from "react";

const prefix = "online-ide-";

function useLocalStorage(key, initialValue) {
  const prefixedKey = prefix + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });
  return <div></div>;
}

export default useLocalStorage;
