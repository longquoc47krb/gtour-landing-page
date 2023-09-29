import PopularDestination from "@/components/home/popular-destination";
import Title from "@/components/home/title";
import { PopuparDestinations } from "@/constants/data";
import React from "react";

function PopularDestinationSection() {
  return (
    <div>
      <Title
        title="Popular Destinations"
        tagline="World's best tourist destinations"
      />
      <div className="home-container wrapper wow zoomIn" data-wow-offset="20">
        {PopuparDestinations.map((destination, index) => (
          <PopularDestination
            image={destination.image}
            place={destination.place}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularDestinationSection;
