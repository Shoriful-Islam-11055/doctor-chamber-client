import React from "react";
import quote from "../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonial = () => {
  const Patients = [
    {
      _id: 1,
      name: "Jony",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "Dhaka",
      img: people1,
    },
    {
      _id: 2,
      name: "Rocy",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "Dhaka",
      img: people2,
    },
    {
      _id: 3,
      name: "Jacy",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      city: "Dhaka",
      img: people3,
    },
  ];
  return (
    <div className="mx-6">
      <div className="flex justify-between">
        <div className="mt-[50px]">
          <h3 className="text-primary text-3xl">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="max-w-[192px] h-[156px]" src={quote} alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-col-2 gap-6">
        {Patients.map((patient) => (
          <TestimonialCard
            patient={patient}
            key={patient._id}
          ></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
