import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading, refetch } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl underline font-bold mt-3 text-accent mb-8">
        Manage Doctors: {doctors.length} </h1>
        <div class="overflow-x-auto w-full mt-8 px-8">
          <table class="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input required type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th className="text-xl">Name</th>
                <th className="text-xl">Email</th>
                <th className="text-xl">Delete Doctor</th>
              </tr>
            </thead>
            <tbody>
             {
                 doctors.map((doctor, index) => <DoctorsRow
                 key={doctor._key}
                 doctor = {doctor}
                 index = {index}
                 refetch = {refetch}
                 ></DoctorsRow>)
             }
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ManageDoctors;
