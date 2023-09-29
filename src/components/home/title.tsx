import React from "react";

function Title({ title, tagline }: { title: string; tagline: string }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </div>
  );
}

export default Title;
