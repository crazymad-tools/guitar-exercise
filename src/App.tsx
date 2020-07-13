import React, { useState, useEffect } from "react";

function App() {
  const [bpm, setBpm] = useState(60);
  const [strings, setStrings] = useState(1);
  const [color, setColor] = useState("rgba(0, 0, 0, 1)");

  useEffect(() => {
    let timer = setInterval(() => {
      setStrings(Math.ceil(Math.random() * 6));
      setColor(
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 1)`
      );
    }, (bpm / 60) * 1000);

    return () => {
      clearInterval(timer);
    }
  }, [bpm]);

  return (
    <div className="App">
      <div>
        <label>BPM: </label>
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(Number(e.currentTarget.value))}
        />
      </div>
      <div>
        <label>弦:</label>
        <span style={{ color: color, fontSize: 30, fontWeight: 600 }}>
          {strings}
        </span>
      </div>
    </div>
  );
}

export default App;
