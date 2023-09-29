import React from "react";
import Image from "next/image";
import {
  TfiMobile,
  TfiLocationPin,
  TfiAlarmClock,
  TfiFacebook,
  TfiTwitterAlt,
  TfiYoutube,
  TfiPinterestAlt,
} from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { RecentTripsImg } from "@/constants/data";
import SocialMedia from "./social-media";
const social = [
  {
    icon: <TfiFacebook fontSize={18} style={{ lineHeight: 40 }} />,
    background: "#2d5f9a",
  },
  {
    icon: <TfiTwitterAlt size={18} style={{ lineHeight: 40 }} />,
    background: "#00c3f3",
  },
  {
    icon: <TfiYoutube size={18} style={{ lineHeight: 40 }} />,
    background: "#cc181e",
  },
  {
    icon: <TfiPinterestAlt size={18} style={{ lineHeight: 40 }} />,
    background: "#bd081c",
  },
  {
    icon: <BsInstagram size={18} style={{ lineHeight: 40 }} />,
    background: "#405de6",
  },
];
function Footer() {
  return (
    <footer>
      <div className="footer-container wrapper">
        <ul>
          <li>
            <h2>Our Awards</h2>
            <p>
              London is a megalopolis of people, ideas and frenetic energy. The
              capital and largest city of the United Kingdom.
            </p>
            <img src="/assets/images/footer/logo1.png" alt="logo1" />
          </li>
          <li>
            <h2>Contact Info</h2>
            <div className="footer-contacts">
              <p>
                <TfiMobile />
                <span>1-567-124-44227</span>
              </p>
              <p>
                <TfiLocationPin />
                <span>184 Main Street East Perl Habour 8007</span>
              </p>
              <p>
                <TfiAlarmClock />
                <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
              </p>
            </div>
            <div className="footer-social">
              {social.map((item) => (
                <SocialMedia icon={item.icon} background={item.background} />
              ))}
            </div>
          </li>
          <li>
            <h2>Recent Trips</h2>
            <div className="footer-images">
              {RecentTripsImg.map((img, index) => (
                <img src={img} alt={`img ${index}`} key={index} />
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-bar-container wrapper">
        <div className="footer-bar">
          <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
          <div className="footer-menu">
            <a>Home</a>
            <a>Tours</a>
            <a>Blog</a>
            <a>Purchase Theme</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
