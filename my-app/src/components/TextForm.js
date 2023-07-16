import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="mukul my-3">Uppercase converter</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            cols="70"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloClick}>
          lowewcase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summer</h1>
        <p>{text.split(/\s+/).length} words  {text.length} char</p>


      </div>
    </>
  );
}
