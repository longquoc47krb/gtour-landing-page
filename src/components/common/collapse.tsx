import React, { useState } from "react";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";
function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <div className="grid-4 collapse">{props.children}</div>}
      <div
        className="text-13"
        onClick={toggleCollapse}
        style={{ marginTop: 14, cursor: "pointer" }}
      >
        {isOpen ? <TfiAngleUp /> : <TfiAngleDown />}
        <span style={{ marginLeft: 5 }}>{props.header}</span>
      </div>
    </div>
  );
}

export default Collapse;
