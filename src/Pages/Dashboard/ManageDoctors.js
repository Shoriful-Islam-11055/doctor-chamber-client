import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if(isLoading){
      return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-3xl underline font-bold mt-3 text-accent mb-8">
        Manage Doctors: {doctors.length}
      </h1>
    </div>
  );
};

export default ManageDoctors;
