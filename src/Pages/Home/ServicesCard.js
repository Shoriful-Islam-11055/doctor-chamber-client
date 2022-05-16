import React from "react";

const ServicesCard = ({ serviceImg, serviceTitle, serviceText }) => {
  return (
    <div>
      <div className ="card  bg-base-100 shadow-2xl">
        <figure className ="pt-5">
          <img src={serviceImg} alt="Shoes" className ="rounded-xl" />
        </figure>
        <div className ="card-body items-center text-center">
          <h2 className ="card-title">{serviceTitle}!</h2>
          <p>{serviceText}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ServicesCard;
