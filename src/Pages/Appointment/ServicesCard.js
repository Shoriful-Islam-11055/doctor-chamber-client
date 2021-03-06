import React from "react";

const ServicesCard = ({ service, setAppointment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl py-8">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">NOT AVAILABLE</span>
            )}
          </p>
          <p className="mb-5">
            {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
          </p>
          <div className="card-actions">
            <label
              htmlFor="appointment-modal"
              disabled={slots.length === 0}
              onClick={() => setAppointment(service)}
              className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
