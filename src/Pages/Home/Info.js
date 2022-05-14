import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 text-white">
      <InfoCard
        cardBg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        cardBody = "Ours Office Opening Hours 09:00 AM to 05:00 PM"
        cardImg={clock}
      ></InfoCard>
      <InfoCard
        cardBg="bg-accent"
        cardTitle="Visiting Hours"
        cardBody = "Ours Office Visiting Hours 09:00 AM to 05:00 PM"
        cardImg={marker}
      ></InfoCard>
      <InfoCard
        cardBg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us"
        cardBody = "You can contact with Us in any problems in opening time"
        cardImg={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
