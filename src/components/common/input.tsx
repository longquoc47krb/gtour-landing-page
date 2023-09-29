import React, { useState } from "react";

const InputField = ({
  placeholder,
  affixIcon,
}: {
  placeholder: string;
  affixIcon: any;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="field-container">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {affixIcon && <span className="affix-icon">{affixIcon}</span>}
    </div>
  );
};

export default InputField;
