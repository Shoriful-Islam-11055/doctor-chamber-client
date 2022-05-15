import React from "react";

const ServicesCard = ({ serviceImg, serviceTitle, serviceText }) => {
  return (
    <div>
      <div class="card  bg-base-100 shadow-2xl">
        <figure class="pt-5">
          <img src={serviceImg} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{serviceTitle}!</h2>
          <p>{serviceText}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesCard;
