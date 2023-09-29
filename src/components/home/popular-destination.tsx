import React from "react";

function PopularDestination({
  image,
  place,
}: {
  image: string;
  place: string;
}) {
  return (
    <>
      <div className="popular-destination float">
        <img src={image} alt={place} loading="lazy" />
        <div className="popular-destination-title">
          <span>{place}</span>
        </div>
      </div>
    </>
  );
}

export default PopularDestination;
