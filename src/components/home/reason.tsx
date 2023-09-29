import React from "react";

function Reason({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="reason">
      <img src={image} alt={title} className="page_content_wrapper" />
      <h1 className="font-bold">{title}</h1>
      <p className="page_content_wrapper">{desc}</p>
    </div>
  );
}

export default Reason;
