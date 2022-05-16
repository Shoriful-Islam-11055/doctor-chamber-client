import React from "react";

const TestimonialCard = ({patient}) => {
  return (
    <div className="mt-12">
      <div class="card bg-base-100 shadow-2xl">
        <div class="card-body text-black">
          <p>{patient.description}</p>
          <div class="flex items-center">
            <div><img className="mr-8 rounded-full ring ring-primary ring-offset-base-100" src={patient.img} alt="" /></div>
            <div>
                <p className="text-2xl text-bold">{patient.name}</p>
                <p className="text-xl">{patient.city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
