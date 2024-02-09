/* eslint-disable */
import React, { useState } from "react";

function InputSection({ title, placeholder, value, onChange }) {
  const [showInput, setShowInput] = useState(false);

  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="checkbox-section">
      <h3>{title}</h3>
      <input type="checkbox" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default InputSection;
