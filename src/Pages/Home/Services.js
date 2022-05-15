import React from "react";
import ServicesCard from "./ServicesCard";
import FluorideImg from "../../assets/images/fluoride.png";
import cavityImg from "../../assets/images/cavity.png";
import whiteningImg from "../../assets/images/whitening.png";
import treatment from '../../assets/images/treatment.png'

const Services = () => {
  return (
    <div className="mt-5">
      <div className="text-center py-12">
        <p className="text-base text-secondary">OUR SERVICES</p>
        <p className="text-4xl">Services We Provide</p>
      </div>
      <div className="grid gap-9 grid-cols-1 lg:grid-cols-3 px-6">
        <ServicesCard
          serviceTitle="Fluoride Treatment"
          serviceText="Fluoride treatments are typically professional treatments"
          serviceImg={FluorideImg}
        ></ServicesCard>
        <ServicesCard
          serviceTitle="Cavity Filling"
          serviceText="Cavity Filling are typically professional treatments"
          serviceImg={cavityImg}
        ></ServicesCard>
        <ServicesCard
          serviceTitle="Teeth Whitening"
          serviceText="Teeth Whitening are typically professional treatments"
          serviceImg={whiteningImg}
        ></ServicesCard>
      </div>

      <div className="w-9/12 mx-auto mt-12 cardInfo-size">
        <div class="card lg:card-side bg-white py-12">
          <figure>
            <img
              src= {treatment}
              alt="Album"
            />
          </figure>
          <div class="card-body">
            <div>
              <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p class="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
              </p>
              <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
