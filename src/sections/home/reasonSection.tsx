import Reason from "@/components/home/reason";
import Title from "@/components/home/title";
import { Reasons } from "@/constants/data";
import React from "react";

function ReasonSection() {
  return (
    <>
      <Title
        title="Why Choose Us"
        tagline="Here are reasons you should plan trip with us"
      />
      <div className="home-container wrapper" style={{ marginBottom: 51 }}>
        {Reasons.map((reason, index) => (
          <Reason
            image={reason.image}
            title={reason.title}
            desc={reason.desc}
          />
        ))}
      </div>
    </>
  );
}

export default ReasonSection;
