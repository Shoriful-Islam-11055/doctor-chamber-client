import React from "react";
import appointmentBg from "../../assets/images/appointment.png";

const HomeContact = () => {
  return (
    <section className="mt-20 py-12" style={{ background: `url(${appointmentBg})` }}>
      <div className="text-white">
        <div className="text-center">
          <p className="text-primary text-3xl mb-3">Contact US</p>
          <h1 className="text-4xl font-bold mb-6">Stay Connected With Us</h1>
        </div>
        <form action="" className="text-center">
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs mb-3"
          /> <br />
          <input
            type="text"
            placeholder="Subjects"
            className="input input-bordered w-full max-w-xs mb-3"
          /> <br />
         <textarea className="textarea w-full max-w-xs mb-3" placeholder="Your message"></textarea><br />
         <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">
          Submit
        </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
