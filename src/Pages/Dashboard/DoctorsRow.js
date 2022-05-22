import React from "react";

const DoctorsRow = ({doctor, index}) => {
   const  {name, img, email, specialty} = doctor;
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
          <button className = "btn  btn-md">Delete</button>
        </th>
      </tr>
   
  );
};

export default DoctorsRow;
