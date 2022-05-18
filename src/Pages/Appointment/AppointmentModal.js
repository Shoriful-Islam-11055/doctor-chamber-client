import React from "react";

const AppointmentModal = ({ appointment }) => {
  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg mb-8">Booking for : {appointment.name}</h3>

          <form className="py-4">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-full mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-full mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-full mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-full mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-full mb-5"
            />
            <button class="btn w-full max-w-full py-2">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
