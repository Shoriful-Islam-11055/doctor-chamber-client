import React from "react";

const InfoCard = ({clock}) => {
  return (
    <div>
      <div class="card lg:card-side bg-primary shadow-xl">
        <figure>
          <img
          className="p-3"
            src={clock}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
