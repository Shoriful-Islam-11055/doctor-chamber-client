import React from "react";
import Appointment from "./AppointmentCard";
import Banner from "./Banner";
import HomeContact from "./HomeContact";
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
     <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
