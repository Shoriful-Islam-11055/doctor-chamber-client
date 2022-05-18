import { format } from "date-fns";
import React from "react";

const AvailableSlots = ({date}) => {
  return (
    <section className="mb-12 mt-[100px]">
      <div className="text-center">
        <p className="text-secondary text-3xl mb-12">
        Available Appointments on {format(date, "PP")}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 mx-auto">
        <div className = "card bg-base-100 shadow-2xl py-8 cardInfo-size">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Teeth Orthodontics</h2>
            <p>8:00 AM - 9:00 AM</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
              <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className = "card bg-base-100 shadow-2xl py-8">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Cosmetic Dentistry</h2>
            <p>10:05 am - 11:30 am</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className = "card bg-base-100 shadow-2xl py-8">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Teeth Cleaning</h2>
            <p>8:00 AM - 9:00 AM</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className = "card bg-base-100 shadow-2xl py-8">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Teeth Orthodontics</h2>
            <p>8:00 AM - 9:00 AM</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className = "card bg-base-100 shadow-2xl py-8">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Teeth Orthodontics</h2>
            <p>8:00 AM - 9:00 AM</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
        <div className = "card bg-base-100 shadow-2xl py-8">
          <div className = "card-body items-center text-center">
            <h2 className = "card-title">Pediatric Dental</h2>
            <p >8:00 AM - 9:00 AM</p>
            <p className="mb-5">10 SPACES AVAILABLE</p>
            <div className = "card-actions">
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableSlots;
