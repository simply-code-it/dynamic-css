import "./App.css";
import React, { useState } from "react";

function App() {
  const [content, setContent] = useState("Naga");
  const [pad, setPad] = useState(7);
  const [fontt, setFontt] = useState(10);
  return (
    <div className="App">
      <div>
        <div>
          <span>Content : </span>
          <input
            type="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="enter content"
          />
        </div>
        <div>
          <span>Padding : </span>
          <input
            type="number"
            onChange={(e) => {
              setPad(e.target.value);
            }}
            placeholder="enter number"
          />
        </div>
        <div>
          <span>fontSize : </span>
          <input
            type="number"
            onChange={(e) => {
              setFontt(e.target.value);
            }}
            placeholder="enter number"
          />
        </div>
      </div>
      <div
        style={{
          padding: `${pad}px`,
          fontSize: `${fontt}px`,
          border: "1px solid black",
          width: "20%",
          margin: "auto",
        }}
      >
        <h2>{content}</h2>
      </div>
    </div>
  );
}

export default App;
