import { menuItems } from "@/constants/data";
import MenuItems from "./menuItems";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiShoppingCart } from "react-icons/tfi";
import { useMenuBar } from "@/hooks/useMenuBar";
// Import the 'menuItems' data here
// const menuItems = require('./menuItems'); // Assuming you have a 'menuItems.js' file

function Navbar() {
  const transparentScope = 30;
  const [cartQuantity, setCartQuantity] = useState(0)
  const [scrollY, setScrollY] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const { toggleMenu } = useMenuBar();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY > transparentScope) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }, [scrollY]);

  return (
    <nav id="navbar">
      <ul className="menus">
        <img
          src={
            transparent
              ? `/assets/images/white-logo.png`
              : `/assets/images/black-logo.png`
          }
          style={{ height: 22 }}
        />
        <div className="flex">
          <div className="menu-list">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </div>
          <div className="menu-cart-container">
            <div
              className="menu-toggle"
              id="menu-toggle"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </div>
            <div className="cart">
              <span>{cartQuantity}</span>
              <TfiShoppingCart />
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
