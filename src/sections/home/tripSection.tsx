import Title from "@/components/home/title";
import Trip, { ITrip } from "@/components/home/trip";
import { Trips } from "@/constants/data";
import React from "react";

function TripSection() {
  return (
    <>
      <Title title="Best Value Trips" tagline="Best offers trips from us" />
      <div className="home-container wrapper">
        {Trips.map((trip: ITrip, index) => (
          <Trip {...trip} />
        ))}
      </div>
    </>
  );
}

export default TripSection;
