import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointmentBg from "../../assets/images/appointment.png";

const AppointmentCard = () => {
  return (
    <div
      style={{ background: `url(${appointmentBg})` }}
      className=" mb-12 flex justify-center items-center px-12 appointment-small"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="Album" />
      </div>
      <div className="text-white flex-1">
        <p className="text-primary text-3xl mb-3">Appointment</p>
        <h1 class="text-4xl font-bold mb-3">Make an appointment Today</h1>
        <p className="text-xl mb-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
