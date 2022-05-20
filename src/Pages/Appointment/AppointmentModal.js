import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AppointmentModal = ({ appointment, date, setAppointment }) => {
  const { name, slots } = appointment;
  const [user, loading, error] = useAuthState(auth);

  const bookAppointment = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setAppointment(null);
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl mb-8">Booking for : {name}</h3>

          <form onSubmit={bookAppointment} className="py-4">
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-full mb-5 text-xl text-bold text-black"
              readOnly
            />

            <select
              name="slot"
              className="input input-bordered w-full max-w-full mb-5 text-black text-xl"
            >
              {slots.map((slot, index) => (
                <option value={slot} key ={index}>{slot}</option>
              ))}
            </select>

            <input
              name="fullName"
              disabled
              type="text"
              value = {user?.displayName || ''}
              className="input input-bordered w-full max-w-full mb-5 text-xl"
            />

            <input
              name="email"
              disabled
              type="email"
              value = {user?.email || ''}
              className="input input-bordered w-full max-w-full mb-5 text-xl"
            />

            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-full mb-5 text-xl"
            />

            <input
              type="submit"
              value="SUBMIT"
              className="btn w-full max-w-full py-2 text-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
