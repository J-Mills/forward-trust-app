/* eslint-disable */
import React, { useState } from "react";

function InputSection({ title, placeholder, value, onChange }) {
  const [showInput, setShowInput] = useState(false);

  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="input-section">
      <h2>{title}</h2>
      <button onClick={toggleInputVisibility}>Additional notes on {title} required?</button>
      {showInput && <input type="text" placeholder={placeholder} value={value} onChange={onChange} />}
    </div>
  );
}

export default InputSection;
