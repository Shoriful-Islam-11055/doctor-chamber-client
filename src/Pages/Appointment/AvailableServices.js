import React from "react";

const AvailableServices = () => {
  return (
    <section className="mb-12 mt-[100px]">
      <div className="text-center">
        <p className="text-secondary text-3xl mb-3">
          Available Services on April 30, 2022
        </p>
        <h1 class="text-4xl font-bold mb-12">Please select a service</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary text-2xl"> Teeth Orthodontics</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">Teeth Cleaning</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">Pediatric Dental</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">Pediatric Dental</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">Pediatric Dental</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl py-5">
          <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary text-2xl">Pediatric Dental</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableServices;
