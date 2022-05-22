import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";


const AllUsers = () => {
  const {
    isLoading,
    error,
    refetch,
    data: users,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`,{
        method: 'GET',
        headers :{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;
 
   

//   const makeAdmin = () =>{
//     fetch(`http://localhost:5000/user/admin/${email}`,{
//         method: 'PUT',
//         headers :{
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     })
//     .then((res) => res.json())
//     .then(data => console.log(data));
//   }

  return (
    <div>
      <h1 className="text-3xl underline font-bold mt-3 text-accent mb-8">
        All Users - {users.length}
      </h1>

      <div className = "overflow-x-auto px-12">
        <table className = "table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin/User</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => 
               <UserRow user ={user} key={user._id} refetch = {refetch}></UserRow>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
