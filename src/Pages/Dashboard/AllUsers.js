import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const {
    isLoading,
    error,
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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index+1}</th>
                <td>{user.email}</td>
                <td><button class="btn btn-xs">Make Admin</button></td>
                <td><button class="btn btn-xs">❌ Delete User</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
