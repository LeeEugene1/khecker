import { useState } from "react";

export const useSessionStorage = (key, initialValue)=>{
    const [storedValue, setStoredValue] = useState(initialValue);

    const setValue = (value)=>{
      window.sessionStorage.setItem(key, value)
      setStoredValue(value)
    }

    return [storedValue, setValue]
}

export default useSessionStorage
