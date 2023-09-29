import { useEffect, useRef, useState } from "react";

const Dropdown = ({
  placeholder,
  options,
  onSelect,
  value,
  affixIcon,
}: {
  placeholder: string;
  options: string[];
  onSelect: (selectedValue: string) => void;
  value: string;
  affixIcon: any;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<any>(null);
  const dropdownRef = useRef<any>(null);
  const [dropdownPosition, setDropdownPosition] = useState("down"); // Default: suggestion list down
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setShowDropdown(false);
  };
  useEffect(() => {
    function handleWindowScroll() {
      const inputRect = inputRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (inputRect.top > windowHeight / 2) {
        setDropdownPosition("up"); // Nếu input ở phía dưới màn hình, hướng lên trên
      } else {
        setDropdownPosition("down"); // Nếu input ở phía trên màn hình, hướng xuống dưới
      }
    }

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <div className={`field-container ${dropdownPosition}`} ref={inputRef}>
      <div className="field-header" onClick={handleDropdownClick}>
        <input type="text" placeholder={placeholder} value={value} readOnly />
        {affixIcon && <span className="affix-icon">{affixIcon}</span>}
      </div>
      {showDropdown && (
        <ul className={`field-list ${dropdownPosition}`}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
