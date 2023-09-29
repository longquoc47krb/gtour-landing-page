import { useState, useEffect, useRef } from "react";
import SubMenu from "./sub-menu";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { getMenuLevels } from "@/utils";
import { menuItems } from "@/constants/data";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const menuLevels = getMenuLevels(menuItems);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  const renderMenuButton = () => {
    let buttonContent = null;

    if (items.submenu) {
      buttonContent = (
        <>
          <button
            style={{
              // menu level 0, submenu level 1, 2,...
              height: menuLevels[items.title] === 0 ? 74 : "auto",
              width: "100%",
              fontWeight: 600,
              marginRight: menuLevels[items.title] === 0 ? 5 : 0,
              paddingTop: menuLevels[items.title] === 0 ? 26 : 0,
              paddingBottom: menuLevels[items.title] === 0 ? 26 : 0,
              paddingRight: menuLevels[items.title] === 0 ? 17 : 0,
            }}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: menuLevels[items.title] === 0 ? "auto" : "10px 0",
                // margin: menuLevels[items.title] === 0 ? "auto" : "0 20px",
              }}
            >
              {window.innerWidth < 960 && depthLevel === 0 ? (
                items.title
              ) : (
                <span>{items.title}</span>
              )}
              {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                  0 && window.innerWidth > 960 ? (
                <MdOutlineKeyboardArrowRight />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
          </button>
          <SubMenu
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      );
    } else {
      buttonContent = (
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            fontWeight: 600,
            width: "100%",
          }}
        >
          <span
            style={{
              padding: menuLevels[items.title] === 0 ? "auto" : "10px 0",
              // margin: menuLevels[items.title] === 0 ? "auto" : "0 20px",
            }}
          >
            {items.title}
          </span>
        </button>
      );
    }

    return buttonContent;
  };
  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {renderMenuButton()}
    </li>
  );
};

export default MenuItems;
