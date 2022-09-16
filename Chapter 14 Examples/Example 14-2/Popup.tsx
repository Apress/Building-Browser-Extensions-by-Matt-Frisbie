import React, { useEffect, useState } from "react";

export function Popup() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    chrome.storage.sync.get(["count"], (result) => {
      if (typeof result.count !== "number") {
        result.count = 0;
      }
      setCount(result.count);
    });
  }, []);

  if (count != null) {
    return <h1>Popup count: {count}</h1>;
  }
}
