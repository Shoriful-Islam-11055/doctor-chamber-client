import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import { format } from "date-fns";


const AppointmentBanner = ({date, setDate}) => {

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p className="text-2xl">You picked {format(date, "PP")}.</p>;
  }
  return (
    <div className="bg-banner">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-xl rounded-lg shadow-2xl cardInfo-size"
            alt=""
          />
          <div className="max-w-2lg text-2xl mr-12 cardInfo-size">
            <DayPicker className="cardInfo-size" mode="single" selected={date} onSelect={setDate} />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
