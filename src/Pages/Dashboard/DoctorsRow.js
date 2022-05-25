import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({doctor, index, refetch}) => {
   const  {name, img, email, specialty} = doctor;

   const handleDlete = email =>{
       fetch(`http://localhost:5000/doctor/${email}`,{
           method: "DELETE",
           headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }
       })
       .then(res => res.json())
       .then(data =>{
           if(data.deletedCount){
               toast.success(`Doctor: ${name} is deleted`);
               refetch();
           }
           else{
               toast.error(`Failed deleted`)
           }
       })
   }
  return (
      <tr className="text-xl">
        <th>
          <label>
            <input type="checkbox" className = "checkbox" />
          </label>
        </th>
        <td>
          <div className = "flex items-center space-x-3">
            <div className = "avatar">
              <div className = "mask mask-squircle w-12 h-12">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className = "font-bold">{name}</div>
              <div className = "text-sm opacity-50">{specialty}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
        </td>
        <th>
          <button onClick={() => handleDlete(email)} className = "btn btn-xs px-5 bg-red-500">Delete</button>
        </th>
      </tr>
   
  );
};

export default DoctorsRow;
