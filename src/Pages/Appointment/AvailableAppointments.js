import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import './AppointmentPage.css'
import ServicesCard from "./ServicesCard";

const AvailableSlots = ({date}) => {
  const [services, setServices] = useState([]);
  const [appointment, setAppointment] = useState(null);

  useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data));
  },[])

  return (
    <section className="mb-12 mt-[100px]">
      <div className="text-center">
        <p className="text-secondary text-3xl mb-12">
        Available Appointments on {format(date, "PP")}
        </p>
      </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 mx-auto">
       {
         services.map(service => 
         <ServicesCard 
         service = {service} 
         setAppointment = {setAppointment}
         key = {service._id}>
         </ServicesCard>)
       }
     </div>
     {appointment && <AppointmentModal appointment = {appointment}></AppointmentModal>}
    </section>
  );
};

export default AvailableSlots;
