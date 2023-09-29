"use client";
import {
  backgroundVideo,
  categories,
  cities,
  destinations,
  monthsOfYear,
  sortByArr,
} from "@/constants/data";
import { usePrevious } from "@uidotdev/usehooks";
import { jarallax, jarallaxVideo } from "jarallax";
import "jarallax/dist/jarallax.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  TfiCalendar,
  TfiSearch,
  TfiExchangeVertical,
  TfiAngleDown,
  TfiMoney,
} from "react-icons/tfi";
import AutoSuggest from "./auto-suggest";
import Navbar from "./navbar";
import Collapse from "./collapse";
import Dropdown from "./dropdown";
import SideBar from "../home/side-bar";
import { useMenuBar } from "@/hooks/useMenuBar";
import InputField from "./input";
function Header() {
  const transparentScope = 30;
  const [scrollY, setScrollY] = useState(0);
  const [transparent, setTransparent] = useState(true);
  const prevScrollY = usePrevious(scrollY);
  const [showNavbar, setShowNavbar] = useState(true);

  const { closeMenuBar } = useMenuBar();
  const [month, setMonth] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [destination, setDestination] = useState("");

  const navbarRef = useRef(null);
  const navbar = navbarRef.current;
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
  useLayoutEffect(() => {
    if (scrollY > prevScrollY) {
      // Scrolling down, hide the navbar
      navbar?.classList.remove("active");
      setShowNavbar(false);
    } else {
      // Scrolling up, show the navbar
      navbar?.classList.add("active");
      setShowNavbar(true);
    }
  }, [scrollY, prevScrollY]);

  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: backgroundVideo,
    });
  });

  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const menuItems = dropdown.querySelectorAll(".menu-items");
    menuItems.forEach((item) => {
      item.style.margin = "0 10px";
      item.style.borderBottom = "1px solid #c0c0c0";
      item.style.fontWeight = 500;
      item.addEventListener("mouseenter", () => {
        item.style.color = "#ff4a52";
      });
      item.addEventListener("mouseleave", () => {
        item.style.color = "black";
      });
    });
    if (menuItems.length > 0) {
      // Get the last 'menu-items' element within the current 'dropdown'
      const lastMenuItem = menuItems[menuItems.length - 1];

      // Apply the border style to the last 'menu-items' element
      lastMenuItem.style.borderBottom = "none";
    }
  });
  return (
    <header>
      <div
        ref={navbarRef}
        className={
          transparent ? "navbar wrapper" : "navbar wrapper boxshadow-bottom"
        }
        style={{
          backgroundColor: transparent ? "transparent " : "white",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          transitionDuration: "0.5s",
        }}
      >
        <style jsx>{`
          .navbar {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1;
            color: ${transparent ? "white" : "black"};
          }
        `}</style>
        <Navbar />
      </div>
      <div
        className="header-container jarallax"
        data-jarallax
        data-video-src="https://www.youtube.com/watch?v=JPe2mwq96cw"
      >
        <div className="inner-content wrapper">
          <h1>Where do you want to go?</h1>
          <p>Trips, experiences, and places. All in one service.</p>
          <div style={{ width: "100%", padding: 20 }}>
            <div className="grid-4" style={{ width: "100%" }}>
              <AutoSuggest
                placeholder="Destination, city"
                data={cities}
                affixIcon={
                  <TfiSearch style={{ color: "#c0c0c0", fontSize: 15 }} />
                }
                keyword="trip"
              />
              <Dropdown
                placeholder="Any month"
                options={monthsOfYear}
                affixIcon={
                  <TfiCalendar style={{ color: "#c0c0c0", fontSize: 15 }} />
                }
                onSelect={(selectedValue) => {
                  setMonth(selectedValue);
                }}
                value={month}
              />
              <Dropdown
                placeholder="Sort By Date"
                options={sortByArr}
                affixIcon={
                  <TfiExchangeVertical
                    style={{ color: "#c0c0c0", fontSize: 15 }}
                  />
                }
                onSelect={(selectedValue) => {
                  setSortBy(selectedValue);
                }}
                value={sortBy}
              />
              <button>Search</button>
            </div>
            <Collapse header="Advance Search">
              <Dropdown
                placeholder="All Categories"
                options={categories}
                affixIcon={
                  <TfiAngleDown style={{ color: "#c0c0c0", fontSize: 15 }} />
                }
                onSelect={(selectedValue) => {
                  setCategory(selectedValue);
                }}
                value={category}
              />
              <Dropdown
                placeholder="All Destinations"
                options={destinations}
                affixIcon={
                  <TfiAngleDown style={{ color: "#c0c0c0", fontSize: 15 }} />
                }
                onSelect={(selectedValue) => {
                  setDestination(selectedValue);
                }}
                value={destination}
              />
              <InputField
                placeholder="Max budget ex.5000"
                affixIcon={
                  <TfiMoney style={{ color: "#c0c0c0", fontSize: 15 }} />
                }
              />
            </Collapse>
          </div>
        </div>
      </div>
      <SideBar />
      <div className="overlay" id="overlay" onClick={closeMenuBar}></div>
    </header>
  );
}

export default Header;
