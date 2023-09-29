import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Article({
  image,
  date,
  title,
  shortDescription,
}: {
  image: string;
  date: string;
  title: string;
  shortDescription: string;
}) {
  return (
    <div className="article-container float">
      <a href="#" className="article-image">
        <img src={image} alt={title} loading="lazy" />
      </a>
      <div className="article-content">
        <h2>{date}</h2>
        <h1>{title}</h1>
        <p>{shortDescription}</p>
        <div className="article-readmore">
          <span>Read More</span>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Article;
