import { formatAsCurrency } from "@/utils";
import { useEffect, useRef, useState } from "react";

const AutoSuggest = ({
  placeholder,
  data,
  affixIcon,
  keyword,
}: {
  placeholder: string;
  data: any[];
  affixIcon: any;
  keyword: string;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsPosition, setSuggestionsPosition] = useState("down"); // Default: suggestion list down
  const inputRef = useRef<any>(null);
  const suggestionsRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (inputRef.current && !inputRef.current?.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on the input value
    const filteredSuggestions = data.filter((item) =>
      item[keyword].toLowerCase().includes(value.toLowerCase())
    );
    const formattedSuggestions = filteredSuggestions.map((item) => ({
      trip: item.trip,
      price: item.price,
    }));
    setSuggestions(formattedSuggestions);

    // Show/hide suggestions based on input length
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (selectedValue) => {
    setInputValue(selectedValue);
    setShowSuggestions(false);
  };

  useEffect(() => {
    function handleWindowScroll() {
      const inputRect = inputRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (inputRect.top > windowHeight / 2) {
        setSuggestionsPosition("up"); // Nếu input ở phía dưới màn hình, hướng lên trên
      } else {
        setSuggestionsPosition("down"); // Nếu input ở phía trên màn hình, hướng xuống dưới
      }
    }

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  console.log({ suggestions });
  return (
    <div className={`field-container ${suggestionsPosition}`} ref={inputRef}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {affixIcon && <span className="affix-icon">{affixIcon}</span>}
      {showSuggestions && (
        <ul
          className={`field-list ${suggestionsPosition}`}
          ref={suggestionsRef}
        >
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)}>
              <p
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: 700 }}>{item.trip}</span>
                <span style={{ fontWeight: 400 }}>
                  {formatAsCurrency(item.price)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggest;
