import React from "react";
import Appointment from "./AppointmentCard";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Info></Info>
     <Services></Services>
     <Appointment></Appointment>
     <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
