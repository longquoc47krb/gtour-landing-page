import { generalMenu, tripsOnSideBar } from "@/constants/data";
import { useMenuBar } from "@/hooks/useMenuBar";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import TripThumbnail from "../common/trip-thumbnail";

const Social = [
  {
    icon: <FaSquareFacebook size={24} />,
  },
  {
    icon: <FaTwitter size={24} />,
  },
  {
    icon: <FaYoutube size={24} />,
  },
  {
    icon: <FaPinterest size={24} />,
  },
  {
    icon: <FaInstagram size={24} />,
  },
];

function SideBar() {
  const { toggleMenu, closeMenuBar } = useMenuBar();
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container" id="sidebar">
        <div className="sidebar-content">
          <ul>
            {generalMenu.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
            {tripsOnSideBar.map((trip) => (
              <TripThumbnail
                title={trip.title}
                image={trip.image}
                currentPrice={trip.currentPrice}
                previousPrice={trip.previousPrice}
                rate={trip.rate}
              />
            ))}
            <div
              style={{
                width: "100%",
                display: "inline-block",
                marginTop: 40,
              }}
            >
              {Social.map((item) => (
                <span className="social-icon">{item.icon}</span>
              ))}
            </div>
          </ul>
          <div className="exit float" onClick={toggleMenu}>
            <TfiClose />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default SideBar;
